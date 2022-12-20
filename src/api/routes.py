"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprintgit 
from api.models import db, User, Login, Favorite, Supplier, Offer
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/user', methods=['GET'])  #se obtiene todo los usuarios 
def all_user():
    users=User.query.all()
    data=[user.serialize() for user in users]

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

@api.route('/user/<int:user_id>', methods=['GET']) # se obtiene usuario por id 
def get_supplier(user_id):
    users= User.query.filter_by(id=user_id).first()
    if users : 
        return jsonify(users.serialize()),200
    
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

@api.route('/favorite', methods=['GET'])  #obtiene todos los favoritos 
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
    
    return jsonify({"message": "User Deleted."}),200

@api.route('/delete_supplier/<int:supplier_id>', methods=['DELETE'])  #emilinar proveedor por id 
def delete_supplier(supplier_id):
    try: 
        supplier =Supplier.query.filter_by(supplier_id).first()
        db.session.delete(supplier)
        db.session.commit()

    except:
        return jsonify({"message": "Error"}), 400
    
    return jsonify({"message": "User Deleted."}),200

@api.route('/delete_offer/<int:supplier_id>/<int:offer_id>', methods=['DELETE'])   # eliminar oferta por proveedor  # pendiente de revisar 
def delete_offer(supplier_id, offer_id):
    deleteOffer= Offer() #pendiente


                                                            