from flask_sqlalchemy import SQLAlchemy
from geopy.geocoders import Nominatim

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email=db.Column(db.String(120), unique=True, nullable=False)
    password =db.Column(db.String(80), unique=False, nullable=False)
    name =db.Column(db.String(80), unique=False, nullable=False)
    #last_name=db.Column(db.String(80), unique=False, nullable=False)
    city_id=db.Column(db.Integer, db.ForeignKey('city.id'), nullable=False)      
    city=db.relationship('City', backref='user', lazy=True)
    telephone_number=db.Column(db.String(80), nullable=True) 
    #id_login= db.Column(db.Integer, db.ForeignKey('login.id'), nullable=False)
   
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name":self.name,
            "telephone_number":self.telephone_number,
            


        }

class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
    user= db.relationship('User', backref='user', lazy=True) 
    id_offer =db.Column(db.Integer, db.ForeignKey('offer.id'),nullable=False)
    offer= db.relationship('Offer', backref='offer', lazy=True)

    def __repr__(self):
        return f'<Favorite {self.id}>'

    def serialize(self):
        offerlist = Offer.query.get(self.id_offer)
        return {
            "user": self.id_user,
            "offer": self.id_offer,
            "offerlist": offerlist.serialize(),
            "id": self.id
        }


class Supplier(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    company_name =db.Column(db.String(80), unique=True, nullable=True) 
    company_cif=db.Column(db.String(80),unique=True, nullable=True)
    name=db.Column(db.String(80), unique=False, nullable=False)
    #last_name=db.Column(db.String(80), unique=False, nullable=False)
    city_id=db.Column(db.Integer, db.ForeignKey('city.id'), nullable=False)       #address  por city  
    city=db.relationship('City', backref='supplier', lazy=True) 
    telephone_number=db.Column(db.String(80), nullable=True)
    # id_login= db.Column(db.Integer, db.ForeignKey('login.id'), nullable=False)
    # login= db.relationship('Login', backref='supplier', lazy=True)

    def __repr__(self):
        return f'<Supplier {self.company_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "email":self.email,
            "name": self.name,
            # "last_name": self.last_name,
            "company_name": self.company_name,
            "company_cif":self.company_cif,
            "telephone_number":self.telephone_number
        }


class Offer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_supplier =db.Column(db.Integer, db.ForeignKey('supplier.id'),nullable=False)
    #name=db.Column(db.String(250), unique=False, nullable=False)   
    title=db.Column(db.String(250), unique=False, nullable=False)    
    supplier= db.relationship('Supplier', backref='supplier', lazy=True)
    company_name=db.Column(db.String(80),unique=False, nullable=False) 
    price= db.Column(db.Float, default= 0, nullable=False )
    url_image=db.Column(db.String(250), nullable=False)
    url= db.Column(db.String(250), nullable=False)
    location = db.Column(db.String(250), nullable=False) #ubicacion en el mapa, pendiente de revisar
    #city_id=db.Column(db.Integer, db.ForeignKey('city.id'), nullable=False)
    #city=db.relationship('City', backref='offer', lazy=True) 


    def __repr__(self):
        return f'<Offer {self.title}>'

    def serialize(self):       # pendiente revisar si va id_supplier 
        geolocator = Nominatim(user_agent="MyApp")
        location = geolocator.geocode(self.location)
        print(location.latitude, location.longitude)
        return {
            "id": self.id,
            "title":self.title,
            "url_image":self.url_image,
            "url":self.url,
            "company_name":self.company_name,
            "location":self.location,
            "latitude": location.latitude,
            "longitude": location.longitude,
            "price":self.price
        }


class City(db.Model):
    __tablename__: "city"
    id = db.Column(db.Integer, primary_key=True)
    name =db.Column(db.String(80), unique=True, nullable=False)

    def __repr__(self):
        return f'<City {self.id} - {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }