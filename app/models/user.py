from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .serveruser import server_user

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    userPhoto = db.Column(db.Text)
    hashed_password = db.Column(db.String(255), nullable=False)

    messages = db.relationship(
        "Message",
        cascade="all, delete-orphan",
        back_populates="users_id"
    )

    server = db.relationship(
        "Server",
        secondary=server_user,
        back_populates="user"
    )

    reaction = db.relationship(
        "Reaction",
        cascade="all, delete-orphan",
        back_populates="users"
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)


    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'userPhoto': self.userPhoto,
            'email': self.email
        }
