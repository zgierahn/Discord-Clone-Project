
from flask import Blueprint, jsonify, request, session
from flask_login import current_user, login_user, logout_user, login_required
from app.models import Server, User, Channel, Message, Reaction
from app.models import db
from app.forms import ServerForm
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


msg_routes = Blueprint('messages', __name__)


# -------- still working on this code
@msg_routes.route('/<int:id>/<int:channelId>/')
# @login_required
def channel_messages(id, channelId):
    msg = Message.query.filter(Message.channel_id == channelId).all()
    print('-----------------', msg)
    return [each.to_dict() for each in msg]
