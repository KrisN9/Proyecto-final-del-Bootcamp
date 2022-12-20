"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprintgit 
from api.models import db, User, Login, Favorite, Supplier, Offer
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)


@api.route('/user', methods=['GET'])  #se obtiene todo los usuarios 
def all_user():
    users=User.query.all()
    data=[user.serialize() for user in users]

    return jsonify(data), 200


@api.route('/user', methods=['GET']) #se obtiene los datos de un usuario concreto
def get_user():
    user = User.query.filter_by(user_id).first()
    data =[user.serialize() for user in users]
    return jsonify(data), 200

@api.route('/supplier' , methods=['GET'] )   # se obtiene todos lo proveedores
def all_suppliers():
    suppliers= Suppliers.query.all()
    data =[supplier.serialize() for supplier in suppliers]

    return jsonify(data), 200

@api.route('/supplier/<int:supplier_id>', methods=['GET']) # se obtiene proveedor por id 
def get_supplier(supplier_id):
    supplier= Supplier.query.filter_by(id=supplier_id).first()
    if supplier : 
        return jsonify(supplier.serialize()),200
    
    return jsonify({"Doesn´t exist"})

@api.route('/user/favorite/<int:user_id>', methods=['GET'])  #Listar todos los favoritos que pertenecen al usuario actual.
def favorite_user(user_id):                                             #pendiente de revisar
    favorites= Favorite.query.all(id=user_id)
    data = [favorite.serialize() for favorite in favorites]
    return jsonify(data),200

@api.route('/supplier/offer/<int:supplier_id>', methods=['GET'])  #Listar todos las ofertas que pertenecen al proveedor.
def offer_supplier(supplier_id):                                                  #pendiente de revisar
    offers= Offer.query.all(id=supplier_id)
    data=[offer.serialize() for offer in offers ]
    return jsonify(data), 200

@api.route('/offer', methods=['GET'])  #obtiene todas las ofertas
def all_offer():
    offers= Offer.query.all()
    data =[offer.serialize() for Offer in offers]
    return jsonify(data), 200

@api.route('/favorite', methods=['GET'])  #obtiene todas los favoritos 
def all_favorite():
    favorites= Favorite.query.all()
    data =[favorite.serialize() for favorite in favorites]
    return jsonify(data), 200


@api.route('/delete_user/<int:user_id>', methods=['DELETE'])   #eliminar user por id 
def delete_user(user_id):
    try: 
        user =User.query.filter_by(user_id).first()
        db.session.delete(user)
        db.session.commit()

    except:
        return jsonify({"message": "Error"}), 400
    
    return jsonify({"message": "User Deleted."})

@api.route('/delete_supplier/<int:supplier_id>', methods=['DELETE'])  #emilinar proveedor por id 
def delete_supplier(supplier_id):
    try: 
        supplier =Supplier.query.filter_by(supplier_id).first()
        db.session.delete(supplier)
        db.session.commit()

    except:
        return jsonify({"message": "Error"}), 400
    
    return jsonify({"message": "User Deleted."})


@api.route('/user', methods=['POST'])  #crear un nuevo usuario
def create_user():
    data = request.json
    user = User.query.filter_by(email=data['email'], password=data['password'])
    if user:
        access_token = create_access_token(identity=user.id)
        return jsonify({"token": access_token}), 200
    
    return jsonify({"msg": "Wrong user/password"}), 400


@api.route('/supplier', methods=['POST'])  #crear un nuevo proveedor
def create_supplier():
    data = request.json
    supplier = Supplier.query.filter_by(email=data['email'], password=data['password'])
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


@api.route('/user/<int: user_id>', methods=['PUT']) #modificación de datos de usuario
def update_user(user_id):
    change_data = request.json

    for user in users:
        if user['id'] == user_id:
            user['email'] = change_data['email'],
            user['password'] = change_data['password']
            user['telephone_number'] = change_data['telephone_number']
            return jsonify(user), 200

        return ({"msg": 'User with id {user_id} not found'}), 404

@api.route('/supplier/<int: supplier_id>', methods=['PUT']) #modificacion de datos de proveedor
def update_supplier(supplier_id):

    change_data = request.json

    for supplier in suppliers:
        if supplier['id'] == supplier_id:
            supplier['email'] = change_data['email'],
            supplier['password'] = change_data['password']
            supplier['telephone_number'] = change_data['telephone_number']
            return jsonify(supplier), 200

        return ({"msg": 'Supplier with id {supplier_id} not found'}), 404