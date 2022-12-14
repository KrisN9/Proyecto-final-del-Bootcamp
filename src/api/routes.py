"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Login, Favorite, Supplier, Offer
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required , get_jwt_identity


api = Blueprint('api', __name__)


@api.route('/user', methods=['GET'])  #se obtiene todo los usuarios 
def all_user():
    users=User.query.all()
    data=[user.serialize() for user in users]

    return jsonify(data), 200


@api.route('/supplier' , methods=['GET'] )   # se obtiene todos los proveedores
def all_suppliers():
    suppliers= Supplier.query.all()
    data =[supplier.serialize() for supplier in suppliers]

    return jsonify(data), 200

@api.route('/supplier/<int:supplier_id>', methods=['GET']) # se obtiene proveedor por id 
def get_supplier(supplier_id):
    supplier= Supplier.query.filter_by(id=supplier_id).first()
    if supplier : 
        return jsonify(supplier.serialize()),200
    
    return jsonify({"Doesn´t exist"}), 400

@api.route('/user/<int:user_id>', methods=['GET']) # se obtiene usuario por id 
def get_user(user_id):
    users= User.query.filter_by(id=user_id).first()
    if users : 
        return jsonify(users.serialize()),200
    
    return jsonify({"Doesn´t exist"})

@api.route('/user/favorite/<int:user_id>', methods=['GET'])  #Listar todos los favoritos que pertenecen al usuario actual.
def favorite_user(user_id):                                             
    favorites= Favorite.query.all(id=user_id)
    data = [favorite.serialize() for favorite in favorites]
    return jsonify(data),200

@api.route('/supplier/offer/<int:supplier_id>', methods=['GET'])  #Listar todos las ofertas que pertenecen al proveedor.
def offer_supplier(supplier_id):                                                 
    offers= Offer.query.all(id=supplier_id)
    data=[offer.serialize() for offer in offers ]
    return jsonify(data), 200

@api.route('/offer', methods=['GET'])  #obtiene todas las ofertas  # revisar
def all_offer():
    offers= Offer.query.all()
    data =[offer.serialize() for offer in offers]
    return jsonify(data), 200

@api.route('/favorite', methods=['GET'])  #obtiene todos los favoritos 
def all_favorite():
    favorites= Favorite.query.all()
    data =[favorite.serialize() for favorite in favorites]
    return jsonify(data), 200


@api.route('/delete_user/<int:user_id>', methods=['DELETE'])   #eliminar usuario  por id 
def delete_user(user_id):
    try: 
        user =User.query.filter_by(user_id).first()
        db.session.delete(user)
        db.session.commit()

    except:
        return jsonify({"message": "Error"}), 400
    
    return jsonify({"message": "User Deleted."}),200

@api.route('/delete_supplier/<int:supplier_id>', methods=['DELETE'])  #emilinar proveedor por id 
def delete_supplier(supplier_id):
    try: 
        supplier =Supplier.query.filter_by(supplier_id).first()
        db.session.delete(supplier)
        db.session.commit()

    except:
        return jsonify({"message": "Error"}), 400
    
    return jsonify({"message": "User Deleted."})

@api.route('/delete_favorite/<int:user_id>/<int:favorite_id>', methods=['DELETE'])      #emilinar favorito del usuario. 
def delete_favorite(user_id, favorite_id):
    try:
        removeFavorite=Favorite(id=favorite_id)
        db.session.delete(removeFavorite)
        db.session.commit()
    except:
        return jsonify({"message": "Error"}),400

    return jsonify({"Favorite removed"})

@api.route('/delete_offer/<int:supplier_id>/<int:offer_id>', methods=['DELETE'])      #eliminar oferta de un proveedor 
def delete_offer(supplier_id, offer_id):
    try:
        removeOffer=Offer(id=offer_id)
        db.session.delete(removeOffer)
        db.session.commit()
    except:
        return jsonify({"message": "Error"}),400

    return jsonify({"Offer removed"})


@api.route('/register-user', methods=['POST'])   #registro de usuario
def register_user():
    data = request.json
    user = User(id=data['id'], name=data['name'], last_name=data['last name'], 
    id_login=data['id login'], telephone_number=data['telephone number'], city=data['city'])
    db.session.add(user)
    db.session.commit()

    return jsonify({"msg": "User created"})


@api.route('/register-supplier', methods=['POST'])   #registro de proveedor
def register_supplier():
    data = request.json
    supplier = Supplier(id=data['id'], company_name=data['company name'], company_cif=data['company cif'], 
    name=data['name'], last_name=data['last name'], city=data['city'], telephone_number=data['telephone number'],
    id_login=data['id login'])
    db.session.add(supplier)
    db.session.commit()

    return jsonify({"msg": "Supplier created"})


@api.route('/login-user', methods=['POST'])  #login de usuario    revisar
def login_user():
    data = request.json
    user = Login.query.filter_by(email=data['email'], password=data['password']).first()
    if user:
        access_token = create_access_token(identity=user.id)
        return jsonify({"token": access_token, "user": user}), 200
    
    return jsonify({"msg": "Wrong user/password"}), 400


# @api.route('/login', methods=['GET'])         # como ejemplo
# @jwt_required()
# def get_allLogin():
#     user_id = get_jwt_identity()
#     user = Login.query.filter_by(id=user_id).first()  #revisar 
#     return jsonify(user),200  #revisar no es del proyecto 
#     return jsonify([login.serialize() for login in Login.query.all()]), 200


@api.route('/login', methods=['GET'])         # devuelve todos los usuarios logiados
@jwt_required()
def get_allLogin():
    return jsonify([login.serialize() for login in Login.query.all()]), 200
    
@api.route('/login-supplier', methods=['POST'])  #login de proveedor    revisar
def login_supplier():
    data = request.json
    supplier = Login.query.filter_by(email=data['email'], password=data['password']).first()
    if supplier:
        access_token = create_access_token(identity=supplier.id)
        return jsonify({"token": access_token}), 200

    return jsonify({"msg": "Wrong user/password"}), 400


@api.route('/offer', methods=['POST'])  #crear una nueva oferta
def create_offer():
    
    data = request.json
    offer = Offer.query.filter_by(name=data['name'], url=data['url'])
    if offer:
        return jsonify(data), 200

    return jsonify({"msg": "Wrong name/URL"}), 400


@api.route('/favorite', methods=['POST']) #añadir un nuevo favorito
def add_favorite():

    data = request.json
    favorite = Favorite.query.filter_by(id_user=data['id_user'], id_offer=data['id_offer'])
    if favorite:
        return jsonify(data), 200

    return jsonify({"msg": "Your favorite cannot be added, wrong details"}), 400


@api.route('/user/<int:user_id>', methods=['PUT']) #modificación de datos de usuario
def update_user(user_id):
    change_data = request.json

    for user in users:
        if user['id'] == user_id:
            user['email'] = change_data['email'],
            user['password'] = change_data['password']
            user['telephone_number'] = change_data['telephone_number']
            return jsonify(user), 200

        return ({"msg": 'User with id {user_id} not found'}), 404

@api.route('/supplier/<int:supplier_id>', methods=['PUT']) #modificacion de datos de proveedor
def update_supplier(supplier_id):

    change_data = request.json

    for supplier in suppliers:
        if supplier['id'] == supplier_id:
            supplier['email'] = change_data['email'],
            supplier['password'] = change_data['password']
            supplier['telephone_number'] = change_data['telephone_number']
            return jsonify(supplier), 200

        return ({"msg": 'Supplier with id {supplier_id} not found'}), 404

@api.route('/offer/<int:offer_id>', methods=['PUT']) #modificar datos de oferta
def update_offer(offer_id):

    change_data = request.json

    for offer in offers:
        if offer['id'] == offer_id:
            offer['name'] = change_data['name'],
            offer['price'] = change_data['price']
            offer['url'] = change_data['url']
            offer['location'] = change_data['location']
            return jsonify(offer), 200

        return ({"msg": 'Offer with id {offer_id} not found'}), 404


@api.route('/favorite/<int:favorite_id>', methods=['PUT']) #modificar datos de favoritos
def update_favorite(favorite_id):

    change_data = request.json

    for favorite in favorites:
        if favorite['id'] == favorite_id:
            favorite['id_offer'] = change_data['id_offer']
            return jsonify(favorite), 200

        return jsonify({"msg": "Favorite with id {favorite_id} is not found"}), 404
