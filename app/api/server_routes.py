

from flask import Blueprint, jsonify, request, session
from flask_login import current_user, login_user, logout_user, login_required
from app.models import Server, User, Channel, Message, Reaction
from app.models import db
from app.forms import ServerForm
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


server_routes = Blueprint('servers', __name__)


db_url = "sqlite:///dev.db"
engine = create_engine(db_url)
SessionFactory = sessionmaker(bind=engine)
session = SessionFactory()

@server_routes.route("/delete/<int:serverId>", methods=['GET','POST','DELETE'])
@login_required
def delete_post(serverId):
  server_to_delete = Server.query.get(serverId)
  db.session.delete(server_to_delete)
  db.session.commit()
  return {'message':'deleted'}

@server_routes.route('/new', methods=['POST'])
@login_required
def create_server():
    form = ServerForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    curr_user = User.query.get(current_user.id)
    if form.validate_on_submit():
        if form.data['privates'] == 1:
            answer = True
        else:
            answer = False
        server = Server(
            name = form.data['name'],
            privates = answer,
            picture = form.data['picture']
        )
        server.user.append(curr_user)
        db.session.commit()
        db.session.add(server)
        db.session.commit()
        return server.to_dict()
    return {'errors': 'error'}, 401

@server_routes.route('/edit/<int:serverId>', methods=['GET','POST','PUT'])
@login_required
def edit_server(serverId):
    form = ServerForm()
    server = Server.query.get(serverId)
    print('-----------------------formdata----------------',form.data['name'])
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.data['privates'] == 1:
        answer = False
    else:
        answer = True
    server.name = form.data['name']
    server.privates = answer
    server.picture = form.data['picture']
    db.session.commit()
    return server.to_dict()
    return {'errors': 'error'}, 401

@server_routes.route('/<int:id>/<int:serverId>') #/<int:id>/<int:serverId>/<int:channelId>
@login_required
def single_server(id,serverId):
    server = Server.query.get(serverId)
<<<<<<< HEAD
=======
    print('servers',server.to_dict)
>>>>>>> team1
    # reactions = db.session.query(Reaction).join(User,Server.user).join(Message,Reaction.messages).filter(User.id ==id,Server.id == serverId,Channel.server_id ==serverId,Message.channel_id==channelId)
    # messages = db.session.query(Message).join(User,Server.user).filter(User.id ==id,Server.id == serverId,Channel.server_id ==serverId,Message.channel_id==channelId)
    # servers = session.query(User).join(Server).filter(User.id == id)
    # res = []
    # for server in servers:
    #     answer = []
    #     for ele in server:
    #         answer.append(ele.to_dict())
    #     res.append(answer)
    # print('------------------------------------------',res)
    # print('--------------------------------',[message.to_dict() for message in messages])
    # print('--------------------------------',[emoji.to_dict() for emoji in reactions])
    """
    print([server.to_dict() for server in servers])
    print('-----------------this is my servers------------------', servers)
    servers = Server.query.join(User, Server.user).filter(User.id ==id, Server.id == serverId) #Server.id == serverId
    Query for all users and returns them in a list of user dictionaries
    return {'servers': [server.to_dict() for server in servers]}
    """
    return server.to_dict()

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
