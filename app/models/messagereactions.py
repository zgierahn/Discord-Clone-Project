from .db import db
from .db import environment, SCHEMA, add_prefix_for_prod

message_reactions = db.Table(
    'message_reactions',
    db.Model.metadata,
    db.Column("messages", db.Integer, db.ForeignKey(add_prefix_for_prod('messages.id')), primary_key=True),
    db.Column("reactions", db.Integer, db.ForeignKey(add_prefix_for_prod('reactions.id')), primary_key=True)
)

if environment == "production":
    message_reactions.schema = SCHEMA
