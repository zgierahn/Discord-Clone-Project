
from flask import Blueprint, jsonify, request, session
from flask_login import current_user, login_user, logout_user, login_required
from app.models import Server, User, Channel, Message, Reaction
from app.models import db
from app.forms import ServerForm
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, joinedload


msg_routes = Blueprint('messages', __name__)


db_url = "sqlite:///dev.db"
engine = create_engine(db_url)
SessionFactory = sessionmaker(bind=engine)
session = SessionFactory()


# -------- still working on this code
@msg_routes.route('/<int:id>/<int:channelId>')
# @login_required
def channel_messages(id, channelId):
    # msg = Message.query.filter(Message.channel_id == channelId).all()
    # reactions1 = db.session.query(Message,Reaction).join(Reaction, Message.reaction).options(joinedload(Message.reaction))
    # print(reactions1)

    selected_channel = Channel.query.get(channelId)
    # all_msg = selected_channel.messages
    messages = [msg.to_dict() for msg in selected_channel.messages]
    print(messages, '---------------------')

    # reactions1 = db.session.query(Message,Reaction).join(Reaction, Message.reaction).filter(Message.channel_id == channelId)
    # # print(reactions1, '------------------')
    # res = []
    # answer = {}
    # for server in reactions1:
    #     # answer[4] = 'test'
    #     # print(len(answer[server[0].to_dict()['id']]), '-------------------')
    #     if answer.get(server[0].to_dict()['id']) is not None:
    #         answer[server[0].to_dict()['id']].append(server[1].to_dict())
    #     else:
    #         # print('this is elese-----------------')
    #         answer[server[0].to_dict()['id']] = [server[0].to_dict(), server[1].to_dict()]
            # print(answer, '================')
        # for ele in server:
        #     answer.append(ele.to_dict())
        # res.append(answer)
    # print('------------------------------------------',res)
    # reactions = Reaction.query.join(Message, Reaction.messages).filter()
    # reactions = db.session.query(Reaction).join(User,Server.user).join(Message,Reaction.messages).filter(User.id ==id,Server.id == serverId,Channel.server_id ==serverId,Message.channel_id==channelId)
    # print('--------------------------------',[each.to_dict() for each in reactions])


    # print('-----------------', msg[0].to_dict())
    # return [each.to_dict() for each in msg]
    return {'messages': messages}


@msg_routes.route('/<int:messageId>/delete', methods=['GET','POST','DELETE'])
@login_required
def delete_post(messageId):
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
