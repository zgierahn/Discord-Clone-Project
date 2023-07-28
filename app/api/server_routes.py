from flask import Blueprint, jsonify, session
from flask_login import login_required
from app.models import Server, User
from app.models import db

server_routes = Blueprint('servers', __name__)


@server_routes.route('/<int:id>')
@login_required
def servers(id):
    servers = Server.query.join(User, Server.user).filter(User.id ==id)
    """
    servers = servers[0].to_dict()
    servers = Server.query.all()
    Query for all users and returns them in a list of user dictionaries
    return {'servers': [server.to_dict() for server in servers]}
    """
    return [server.to_dict() for server in servers]
