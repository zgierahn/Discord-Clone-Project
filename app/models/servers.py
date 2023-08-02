from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_login import UserMixin
from .serveruser import server_user

class Server(db.Model, UserMixin):
    __tablename__ = 'servers'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    privates = db.Column(db.Boolean, nullable=False)
    picture = db.Column(db.Text)

    channels = db.relationship(
        "Channel",
        cascade="all, delete-orphan",
        back_populates="server"
    )

    user = db.relationship(
        "User",
        secondary=server_user,
        back_populates="server"
    )

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'privates': self.privates,
            'picture': self.picture,
            'owner': [owner.to_dict() for owner in self.user],
        }
