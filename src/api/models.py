from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Login(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    type_user= db.Column(db.Integer)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name =db.Column(db.String(80), unique=False, nullable=False)
    last_name=db.Column(db.String(80), unique=False, nullable=False)
    city=db.Column(db.String(80), unique=False, nullable=False)
    telephone_number=db.Column(db.Integer, nullable=False) 
    image= db.Column(db.String(120),nullable=True)
    id_login= db.Column(db.Integer, db.ForeignKey('login.id'), nullable=False)
    login= db.relationship('Login', backref='user', lazy=True) 
    
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
           
        }


class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)
    id_offer =db.Column(db.Integer, db.ForeignKey('ofertas.id'),
        nullable=False)


class Proveedor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    company_name =db.Column(db.String(80), unique=True, nullable=False) 
    cif_empresa=db.Column(db.Integer,unique=True, nullable=False)
    name=db.Column(db.String(80), unique=False, nullable=False)
    last_name=db.Column(db.String(80), unique=False, nullable=False)
    city=db.Column(db.String(80), unique=False, nullable=False)
    telephone_number=db.Column(db.Integer, nullable=False)
    imagen=db.Column(db.String(120),nullable=True)
    id_login= db.Column(db.Integer, db.ForeignKey('login.id'), nullable=False)
    login= db.relationship('Login', backref='proveedor', lazy=True) 
    

class Offer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_user =db.Column(db.Integer, db.ForeignKey('proveedor.id'),nullable=False)
    name=db.Column(db.String(80), unique=False, nullable=False)
    precio= db.Column(db.Integer, nullable=False )
    url= db.Column(db.String(200), nullable=False)
    location=db.Column(db.String(200), nullable=False)
    image= db.Column(db.String(120),nullable=True)




