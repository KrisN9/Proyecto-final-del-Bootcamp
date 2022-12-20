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

@api.route('/user/favorite', methods=['GET'])  #Se obtiene todos los favoritos 
def all_favorite():
    favorites= Favorite.query.all()
    data = [favorite.serialize() for favorite in favorites]
    return jsonify(data),200