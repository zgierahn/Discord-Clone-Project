from flask import Blueprint, jsonify, session,request
from flask_login import login_required,current_user
from app.models import Server, User,Channel, Message
from app.models import db
from app.forms.channel_form import ChannelForm
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

channel_routes = Blueprint('channels', __name__)

db_url = "sqlite:///dev.db"
engine = create_engine(db_url)
SessionFactory = sessionmaker(bind=engine)
session = SessionFactory()

@channel_routes.route('/<int:id>/<int:serverId>')
@login_required
def channels(id,serverId):
    channels = Channel.query.filter(Channel.server_id ==serverId)
    print('channels',channels)
    return [channel.to_dict() for channel in channels]


@channel_routes.route('/<int:serverId>/new', methods=['POST'])
@login_required
def create_Channel(serverId):
    form = ChannelForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # curr_user = User.query.get(current_user.id)
    # owners=Server.query(Server.user).all()
    # print("owners",owners)
    if form.validate_on_submit():
        channel = Channel(
            name = form.data['name'],
            server_id=serverId
        )
        # print('backend-----------',channel)
        db.session.add(channel)
        db.session.commit()
        return channel.to_dict()
    return {'errors': 'error'}, 401


@channel_routes.route("/delete/<int:channelId>", methods=['GET','POST','DELETE'])
@login_required
def delete_post(channelId):
  channel_to_delete = Channel.query.get(channelId)
  db.session.delete(channel_to_delete)
  db.session.commit()
  return {'message':'deleted'}

@channel_routes.route('/edit/<int:channelId>', methods=['GET','POST','PUT'])
@login_required
def edit_channel(channelId):
    form = ChannelForm()
    channel = Channel.query.get(channelId)
    form['csrf_token'].data = request.cookies['csrf_token']
    channel.name = form.data['name']
    # channel.server_id=serverId
    db.session.commit()
    return channel.to_dict()
    # return {'errors': 'error'}, 401


@channel_routes.route('/<int:channelId>')
@login_required
def single_channel(channelId):
    channel = Channel.query.get(channelId)
    # channel=Channel.query.all()
    # print('backend chanel--------------', channel.to_dict())
    return channel.to_dict()

###########test stuff#############
session.close()
engine.dispose()
