from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(80), unique=False, nullable=False)
    last_name=db.Column(db.String(80), unique=False, nullable=False)
    email=db.Column(db.String(250), unique=True, nullable=False)
    city=db.Column(db.String(80), unique=False, nullable=False)
    telephone_number=db.Column(db.String(80), nullable=True)
    
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email, # revisar
            "city": self.city

        }


class Favorite(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    id_user=db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
    id_offer=db.Column(db.Integer, db.ForeignKey('offer.id'),nullable=False)
    user=db.relationship('User', backref='favorite', lazy=True) 
    offer=db.relationship('Offer', backref='favorite', lazy=True)

    def __repr__(self):
        return f'<Favorite {self.id}>'

    def serialize(self):
        return {
            "user": self.id_user,
            "offer": self.id_offer,
            
        }


class Supplier(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    company_name=db.Column(db.String(80), unique=True, nullable=False) 
    company_cif=db.Column(db.String(80),unique=True, nullable=False)
    name=db.Column(db.String(80), unique=False, nullable=False)
    last_name=db.Column(db.String(80), unique=False, nullable=False)
    email=db.Column(db.String(250), unique=True, nullable=False)
    city=db.Column(db.String(80), unique=False, nullable=False)
    telephone_number=db.Column(db.String(80), nullable=True)

    def __repr__(self):
        return f'<Supplier {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last name": self.last_name,
            "company name": self.company_name,
            "city": self.city
        }


class Offer(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    supplier_id=db.Column(db.Integer, db.ForeignKey('supplier.id'),nullable=False)
    supplier=db.relationship('Supplier', backref='offer', lazy=True) 
    name=db.Column(db.String(80), unique=False, nullable=False)
    price=db.Column(db.Integer, nullable=False )
    url=db.Column(db.String(200), nullable=False)
    city=db.Column(db.String(200), nullable=False)


    def __repr__(self):
        return f'<Offer {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
            "supplier": self.supplier
            
        }
