
from flask import Blueprint, jsonify, request, session
from flask_login import current_user, login_user, logout_user, login_required
from app.models import Server, User, Channel, Message, Reaction
from app.models import db
from app.forms import ServerForm
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


msg_routes = Blueprint('messages', __name__)


# -------- still working on this code
@msg_routes.route('/<int:id>/<int:channelId>/<int:serverId>')
# @login_required
def channel_messages(id, channelId,serverId):
    msg = Message.query.filter(Message.channel_id == channelId).all()
    reactions = Reaction.query.join(Message, Reaction.messages).filter()
    reactions = db.session.query(Reaction).join(User,Server.user).join(Message,Reaction.messages).filter(User.id ==id,Server.id == serverId,Channel.server_id ==serverId,Message.channel_id==channelId)
    print('--------------------------------',[each.to_dict() for each in reactions])
    # print('-----------------', msg[0].to_dict())
    return [each.to_dict() for each in msg]

@msg_routes.route('/<int:id>/<int:messageId>/delete', methods=['GET','POST','DELETE'])
@login_required
def delete_post(id,messageId):
  print('------------------------------',messageId)
  messgae_to_delete = Message.query.get(messageId)
  db.session.delete(messgae_to_delete)
  db.session.commit()
  return {'message':'deleted'}

@msg_routes.route('/<int:id>/<int:messageId>/reaction/<int:reactionId>/delete', methods=['GET','POST','DELETE'])
@login_required
def delete_reaction(id,reactionId):
  print('------------------------------',reactionId)
  reaction_to_delete = Reaction.query.get(reactionId)
  db.session.delete(reaction_to_delete)
  db.session.commit()
  return {'message':'deleted'}
