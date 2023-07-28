from .db import db


server_user = db.Table(
    'server_user',
    db.Model.metadata,
    db.Column("servers", db.Integer, db.ForeignKey("servers.id"), primary_key=True),
    db.Column("users", db.Integer, db.ForeignKey("users.id"), primary_key=True)
)
