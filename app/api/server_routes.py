from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Server, User, Channel, Message, Reaction
from app.models import db
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

server_routes = Blueprint('servers', __name__)

#####test stuff#######
db_url = "sqlite:///dev.db"
engine = create_engine(db_url)
SessionFactory = sessionmaker(bind=engine)
session = SessionFactory()
############################

@server_routes.route('/<int:id>/<int:serverId>')
@login_required
def single_server(id,serverId):
    servers = session.query.join(User).join(Channel).join(Reaction).filter(User.id == id, Server.id == serverId) #Server.id == serverId
    # servers = session.query(User).join(Server).filter(User.id == id)
    print('-----------------this is my servers------------------', servers.values())
    """
    servers = Server.query.join(User, Server.user).filter(User.id ==id, Server.id == serverId) #Server.id == serverId
    Query for all users and returns them in a list of user dictionaries
    return {'servers': [server.to_dict() for server in servers]}
    """
    return {"key": "test"}

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




###########test stuff#############
session.close()
engine.dispose()
