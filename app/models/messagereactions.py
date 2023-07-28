from .db import db
from .db import environment, SCHEMA

message_reactions = db.Table(
    'message_reactions',
    db.Model.metadata,
    db.Column("messages", db.Integer, db.ForeignKey("messages.id"), primary_key=True),
    db.Column("reactions", db.Integer, db.ForeignKey("reactions.id"), primary_key=True)
)

if environment == "production":
    message_reactions.schema = SCHEMA
