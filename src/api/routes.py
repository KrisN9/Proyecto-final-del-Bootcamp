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

@api.route('/user/<int:user_id>', methods=['GET'] ) #Se obtiene un usuario por id 
def get_user(user_id):
    user= User.query.filter_by(id=user_id).first()
    if user: 
        return jsonify(user.serialize()), 200

    return jsonify({"Doesn´t exist"}), 400

@api.route('/supplier/<int:supplier_id>', methods=['GET']) # se obtiene proveedor por id 
def get_supplier(supplier_id):
    supplier= Supplier.query.filter_by(id=supplier_id).first()
    if supplier : 
        return jsonify(supplier.serialize()),200
    
    return jsonify({"Doesn´t exist"})

@api.route('/user/favorite/<int:user_id>', methods=['GET'])  #Listar todos los favoritos que pertenecen al usuario actual.
def all_favorite():                                             #pendiente de revisar
    favorites= Favorite.query.all(id=user_id)
    data = [favorite.serialize() for favorite in favorites]
    return jsonify(data),200

@api.route('/supplier/<int:supplier_id>', methods=['GET']) # se obtiene proveedor por id 
def get_supplier(supplier_id):
    supplier= Supplier.query.filter_by(id=supplier_id).first()
    if supplier : 
        return jsonify(supplier.serialize()),200
    
    return jsonify({"Doesn´t exist"})

@api.route('/user/favorite/<int:user_id>', methods=['GET'])  #Listar todos los favoritos que pertenecen al usuario actual.
def all_favorite():                                             #pendiente de revisar
    favorites= Favorite.query.all(id=user_id)
    data = [favorite.serialize() for favorite in favorites]
    return jsonify(data),200

@api.route('/supplier/offer/<int:supplier_id>', methods=['GET'])  #Listar todos las ofertas que pertenecen al proveedor.
def all_offer():                                                  #pendiente de revisar
    offers= Offer.query.all(id=supplier_id)
    data=[offer.serialize() for offer in offers ]
    return jsonify(data), 200


@api.route('/offer', methods=['GET'])  #obtine todas las ofertas
def all_offer():
    offers= Offer.query.all()
    data =[offer.serialize() for Offer in offers]
    return jsonify(data), 200




