from .db import db
from .db import environment, SCHEMA, add_prefix_for_prod

server_user = db.Table(
    'server_user',
    db.Model.metadata,
    db.Column("servers", db.Integer, db.ForeignKey(add_prefix_for_prod('servers.id')), primary_key=True),
    db.Column("users", db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), primary_key=True)
)
if environment == "production":
    server_user.schema = SCHEMA
