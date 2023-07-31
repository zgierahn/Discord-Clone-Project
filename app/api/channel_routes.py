from flask import Blueprint, jsonify, session,request
from flask_login import login_required
from app.models import Server, User,Channel, Message
from app.models import db
from app.forms.channel_form import ChannelForm

channel_routes = Blueprint('channels', __name__)


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
    if form.validate_on_submit():
        channel = Channel(
            name = form.data['name'],
            server_id=serverId
        )

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
def edit_channel(channelId,serverId):
    channel_form = Channel.query.get(channelId)
    channel_form['csrf_token'].data = request.cookies['csrf_token']
    return channel_form.to_dict()
    return {'errors': 'error'}, 401


@channel_routes.route('/<int:id>/<int:serverId>/<int:channelId>')
@login_required
def single_channel(id,serverId,channelId):
    channels = db.session.query(Channel).join(User,Server.user).filter(User.id ==id,Server.id == serverId,Channel.server_id ==serverId,Message.channel_id==channelId)
    return [channel.to_dict() for channel in channels]
