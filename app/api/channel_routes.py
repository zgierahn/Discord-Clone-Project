from flask import Blueprint, jsonify, session
from flask_login import login_required
from app.models import Server, User,Channel
from app.models import db

server_routes = Blueprint('channels', __name__)


@server_routes.route('/<int:id>')
@login_required
def servers(id):
    servers = Server.query.join(User, Server.user).filter(User.id ==id)
