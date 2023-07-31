from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_login import UserMixin
from .messagereactions import message_reactions


class Message(db.Model, UserMixin):
    __tablename__ = 'messages'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    channel_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('channels.id')), nullable=False)

    users_id = db.relationship(
        "User",
        back_populates="messages"
    )

    reaction = db.relationship(
        "Reaction",
        secondary=message_reactions,
        back_populates="messages"
    )

    channels_id = db.relationship(
            "Channel",
            back_populates="messages"
        )

    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'user_id': self.user_id,
            'channel_id': self.channel_id
        }