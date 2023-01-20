from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email=db.Column(db.String(120), unique=True, nullable=False)
    password =db.Column(db.String(80), unique=False, nullable=False)
    name =db.Column(db.String(80), unique=False, nullable=False)
    #last_name=db.Column(db.String(80), unique=False, nullable=False)
    city_id=db.Column(db.Integer, db.ForeignKey('city.id'), nullable=False)      
    city=db.relationship('City', backref='user', lazy=True)
    telephone_number=db.Column(db.String(80), nullable=False) 
    #id_login= db.Column(db.Integer, db.ForeignKey('login.id'), nullable=False)
   
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,

        }

class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
    user= db.relationship('User', backref='user', lazy=True) 
    id_offer =db.Column(db.Integer, db.ForeignKey('offer.id'),nullable=False)
    offer= db.relationship('Offer', backref='offer', lazy=True)

    def __repr__(self):
        return f'<Favorite {self.email}>'

    def serialize(self):
        return {
            "user": self.id_user,
            "offer": self.id_offer,
            
        }


class Supplier(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    company_name =db.Column(db.String(80), unique=True, nullable=False) 
    company_cif=db.Column(db.String(80),unique=True, nullable=False)
    name=db.Column(db.String(80), unique=False, nullable=False)
    #last_name=db.Column(db.String(80), unique=False, nullable=False)
    city_id=db.Column(db.Integer, db.ForeignKey('city.id'), nullable=False)       #address  por city  
    city=db.relationship('City', backref='supplier', lazy=True) 
    telephone_number=db.Column(db.String(80), nullable=False)
    # id_login= db.Column(db.Integer, db.ForeignKey('login.id'), nullable=False)
    # login= db.relationship('Login', backref='supplier', lazy=True)

    def __repr__(self):
        return f'<Supplier {self.company_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "email":self.email,
            "name": self.name,
            "last name": self.last_name,
            "company name": self.company_name,
        }


class Offer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_supplier =db.Column(db.Integer, db.ForeignKey('supplier.id'),nullable=False)
    title=db.Column(db.String(250), unique=False, nullable=False)    
    supplier= db.relationship('Supplier', backref='supplier', lazy=True)
    company_name=db.Column(db.String(80),unique=True, nullable=False) #pendiente   db.ForeignKey('supplier.company_name')
    name=db.Column(db.String(200), unique=False, nullable=False)    #posible cambio de nombre a "title" donde se colocar el titulop de la oferta
    price= db.Column(db.Integer, nullable=False )
    url_image=db.Column(db.String(250), nullable=False)
    url= db.Column(db.String(250), nullable=False)
    #location =db.Column(db.String(200), nullable=False) #ubicacion en el mapa, pendiente de revisar


    def __repr__(self):
        return f'<Offer {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "company name":self.company_name,
            "price":self.price,
            "title":self.title,
            "url": self.url,
            "url image":self.url_image
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