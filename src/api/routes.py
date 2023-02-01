"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Favorite, Supplier, Offer, City
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required , get_jwt_identity



api = Blueprint('api', __name__)



@api.route('/supplier', methods=['GET']) # se obtiene proveedor por id 
@jwt_required()
def get_supplier():
    supplier_id= get_jwt_identity()
    supplier= Supplier.query.filter_by(id=supplier_id).first()
    if supplier : 
        return jsonify(supplier.serialize()),200
    
    return jsonify({"Doesn´t exist"}), 400

@api.route('/user', methods=['GET']) # se obtiene usuario por id 
@jwt_required()
def get_user():
    user_id= get_jwt_identity()
    user= User.query.filter_by(id=user_id).first()
    if user : 
        return jsonify(user.serialize()),200
    
    return jsonify({"Doesn´t exist"})

@api.route('/user/favorite', methods=['GET'])  #Listar todos los favoritos que pertenecen al usuario actual.
@jwt_required()
def favorite_user():  
    user_id = get_jwt_identity()                                            
    favorites= Favorite.query.filter_by(id_user=user_id)
    data = [favorite.serialize() for favorite in favorites]
    return jsonify(data),200


@api.route('/supplier/offer', methods=['GET'])  #Listar todos las ofertas que pertenecen al proveedor.
@jwt_required()
def offer_supplier():
    supplier_id = get_jwt_identity()                                               
    offers= Offer.query.filter_by(id_supplier=supplier_id)
    data=[offer.serialize() for offer in offers ]
    return jsonify(data), 200

@api.route('offer', methods=['GET'])            #Listar la totalidad de las ofertas (no mover de momento).
def all_offers():
    offers = Offer.query.all()
    data = [offer.serialize() for offer in offers]
    return jsonify(data), 200

@api.route('offer/<int:offer_id>', methods=['GET'])       #Se obtienen datos de una oferta por id
def get_offer(offer_id):
    try:
        offer = Offer.query.filter_by(offer_id=offer_id).first()
        data = [offer.serialize() for offer in offers]
    except Exception:
        return jsonify({"msg": "Offer doesn't exist"}), 400

    return jsonify(data), 200

@api.route('/city', methods=['GET'])  #se obtiene todas las ciudades
def get_cities():
    cities=City.query.all()
    data=[city.serialize() for city in cities]

    return jsonify(data), 200



@api.route('/delete_user', methods=['DELETE'])   #eliminar usuario  por id 
@jwt_required()    # pendiente 
def delete_user():
    try: 
        user_id= get_jwt_identity()
        user=User.query.filter_by(user_id).first()
        db.session.delete(user)
        db.session.commit()

    except Exception:
        return jsonify({"message": "Error"}), 400
    
    return jsonify({"message": "User Deleted."}),200

@api.route('/delete_supplier', methods=['DELETE'])  #emilinar proveedor por id 
@jwt_required()   #pendiente ver si funciona 
def delete_supplier():
    try: 
        supplier_id=get_jwt_identity()
        supplier =Supplier.query.filter_by(id=supplier_id).first()
        db.session.delete(supplier)
        db.session.commit()

    except Exception:
        return jsonify({"message": "Error"}), 400
    
    return jsonify({"message": "User Deleted."})

@api.route('/delete_favorite/<int:favorite_id>', methods=['DELETE'])      #emilinar favorito del usuario.  
@jwt_required()       #pendiente ver su funcionalidad, supongo que si! ¬¬
def delete_favorite(favorite_id):
    try:
        removeFavorite=Favorite.query.filter_by(id=favorite_id).first
        db.session.delete(removeFavorite)
        db.session.commit()
    except Exception:
        return jsonify({"message": "Error"}),400

    return jsonify({"message":"Favorite removed"}),200

@api.route('/delete_offer/<int:offer_id>', methods=['DELETE'])   #eliminar oferta de un proveedor 
@jwt_required()          
def delete_offer(offer_id):    
    try:
        removeOffer = Offer.query.filter_by(id=offer_id).first()
        db.session.delete(removeOffer)
        db.session.commit()
    except Exception as e:
        print(e)
        return jsonify({"message": "Error"}),400

    return jsonify({"message":"Offer removed"}),200

@api.route('/register-user', methods=['POST'])   #registro de usuario
def register_user():
    data = request.json
    try:
        user = User(name=data['name'], email=data['email'], password=data['password'],  
        telephone_number=data['telephone_number'], city_id=data['city'])
        db.session.add(user)
        db.session.commit()
    except Exception as e: 
        print(e)
        return jsonify({"msg": "Error"}),400
    
    return jsonify({"msg": "User created"}),200
    

@api.route('/register-supplier', methods=['POST'])   #registro de proveedor
def register_supplier():
    data = request.json
    try:
        supplier = Supplier(company_name=data['company_name'], company_cif=data['company_cif'], name=data['name'], email=data['email'],
        password=data['password'], telephone_number=data['telephone_number'], city_id=data['city'])
        db.session.add(supplier)
        db.session.commit()
    except Exception as e:
        print(e)
        return jsonify({"msg": "Error"}),400
    
    return jsonify({"msg": "Supplier created"}),200


@api.route('/login-user', methods=['POST'])  #login de usuario    
def login_user():
    data = request.json 
    user = User.query.filter_by(email=data['email'], password=data['password']).first()
    if user:
        access_token = create_access_token(identity=user.id)   
        return jsonify({"token": access_token}), 200
    
    return jsonify({"msg": "Wrong user/password"}), 400

    
@api.route('/login-supplier', methods=['POST'])  #login de proveedor    
def login_supplier():
    data = request.json
    supplier = Supplier.query.filter_by(email=data['email'], password=data['password']).first()
    if supplier:
        access_token = create_access_token(identity=supplier.id)
        return jsonify({"token": access_token}), 200

    return jsonify({"msg": "Wrong supplier/password"}), 400


@api.route('/offer', methods=['POST'])  #crear una nueva oferta   #pendiente de revisar si va id en la ruta
@jwt_required()
def create_offer():
    data=request.json
    supplier_id = get_jwt_identity()
    try:
       offer= Offer(id_supplier=supplier_id,company_name=data['company_name'], 
       url=data['url'], url_image=data['url_image'], title=data['title'], price=data['price'], location=data['location'])  
       db.session.add(offer)
       db.session.commit()
    except Exception as e: 
        print(e)
        return jsonify({"msg":"Error"}),400
        
    return jsonify({"msg":"Offer created"}),200

@api.route('/favorite', methods=['POST']) #añadir un nuevo favorito
@jwt_required()
def add_favorite():
    data = request.json
    user_id = get_jwt_identity()
    try:
        favorite = Favorite(id_user=user_id, id_offer=data['id_offer'])
        db.session.add(favorite)
        db.session.commit()
    except Exception as e: 
        print(e)
        return jsonify({"msg": "Your favorite cannot be added, wrong details"}), 400

    return jsonify({"msg": "Saved favorite"}), 200


@api.route('/user/<int:user_id>', methods=['PUT']) #modificación de datos de usuario
def update_user(user_id):
    try:
        user = User.query.filter_by(user_id=user_id).first()
    except Exception:
        return jsonify({"msg": "User doesn't exist"}), 400

    new_name = request.json.get("name", user.name)
    new_email = request.json.get("email", user.email)
    new_telephone_number = request.json.get("telephone_number", user.telephone_number)
    new_city = request.json.get("city", user.city)

    setattr(user, "name", new_name)
    setattr(user, "email", new_email)
    setattr(user, "telephone_number", new_telephone_number)

    db.session.commit()
       
    return jsonify(user.serialize()), 200

@api.route('/supplier/<int:supplier_id>', methods=['PUT']) #modificacion de datos de proveedor
def update_supplier(supplier_id):
    try:
        supplier = Supplier.query.filter_by(supplier_id=supplier_id).first()
    except Exception:
        return jsonify({"msg": "Supplier doesn't exist"}), 400

    new_company_name = request.json.get("company_name", supplier.company_name)
    new_company_cif = request.json.get("company_cif", supplier.company_cif)
    new_name = request.json.get("name", supplier.name)
    new_email = request.json.get("email", supplier.email)

    setattr(supplier, "company_name", new_company_name)
    setattr(supplier, "company_cif", new_company_cif)
    setattr(supplier, "name", new_name)
    setattr(supplier, "email", new_email)

    db.session.commit()
       
    return jsonify(supplier.serialize()), 200

@api.route('/offer/<int:offer_id>', methods=['PUT']) #modificar datos de oferta
def update_offer(offer_id):
    try:
        offer = Offer.query.filter_by(offer_id=offer_id).first()
    except Exception:
        return jsonify({"msg": "Offer doesn't exist"}), 400

    new_company_name = request.json.get("company_name", offer.company_name)
    new_name = request.json.get("name", offer.name)
    new_price = request.json.get("price", offer.price)
    new_url_image = request.json.get("url_image", offer.url_image)
    new_url = request.json.get("url", offer.url)
    new_location = request.json.get("location", offer.location)

    setattr(offer, "company_name", new_company_name)
    setattr(offer, "name", new_name)
    setattr(offer, "price", new_price)
    setattr(offer, "url_image", new_url_image)
    setattr(offer, "url", new_url)
    setattr(offer, "location", new_location)

    db.session.commit()
       
    return jsonify(user.serialize()), 200

#pendiente de preguntar crear ROUTE PARA obetener las ofertas por la zona de busqueda 






# @api.route('/user', methods=['GET'])  #se obtiene todo los usuarios 
# def all_user():
#     users=User.query.all()
#     data=[user.serialize() for user in users]

#     return jsonify(data), 200



# @api.route('/login', methods=['GET'])         # devuelve todos los usuarios logiados
# @jwt_required()
# def get_allLogin():
#     return jsonify([login.serialize() for login in Login.query.all()]), 200


# @api.route('/supplier' , methods=['GET'] )   # se obtiene todos los proveedores
# def all_suppliers():
#     suppliers= Supplier.query.all()
#     data =[supplier.serialize() for supplier in suppliers]

#     return jsonify(data), 200

# @api.route('/offer', methods=['GET'])  #obtiene todas las ofertas  # revisar
# def all_offer():
#     offers= Offer.query.all()
#     data =[offer.serialize() for offer in offers]
#     return jsonify(data), 200

# @api.route('/favorite', methods=['GET'])  #obtiene todos los favoritos 
# def all_favorite():
#     favorites= Favorite.query.all()
#     data =[favorite.serialize() for favorite in favorites]
#     return jsonify(data), 200


# @api.route('/favorite/<int:favorite_id>', methods=['PUT']) #modificar datos de favoritos
# def update_favorite(favorite_id):

#     change_data = request.json

#     for favorite in favorites:
#         if favorite['id'] == favorite_id:
#             favorite['id_offer'] = change_data['id_offer']
#             return jsonify(favorite), 200

#         return jsonify({"msg": "Favorite with id {favorite_id} is not found"}), 404



# @api.route('/login', methods=['GET'])         # como ejemplo
# @jwt_required()
# def get_allLogin():
#     user_id = get_jwt_identity()
#     user = Login.query.filter_by(id=user_id).first()  #revisar 
#     return jsonify(user),200  #revisar no es del proyecto 
#     return jsonify([login.serialize() for login in Login.query.all()]), 200