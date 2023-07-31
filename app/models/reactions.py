from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_login import UserMixin
from .messagereactions import message_reactions


class Reaction(db.Model, UserMixin):
    __tablename__ = 'reactions'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    emoji = db.Column(db.Text)


    users = db.relationship(
        "User",
        back_populates="reaction"
    )

    messages = db.relationship(
        "Message",
        secondary=message_reactions,
        back_populates="reaction"
    )

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'emoji': self.emoji
        }
