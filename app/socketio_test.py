from flask_socketio import SocketIO, emit
import os
from .models import Message, db


# configure cors_allowed_origins
if os.environ.get('FLASK_ENV') == 'production':
    origins = [
        'http://actual-app-url.herokuapp.com',
        'https://actual-app-url.herokuapp.com'
    ]
else:
    origins = "*"

# initialize your socket instance
socketio = SocketIO(cors_allowed_origins=origins)


# handle chat messages
@socketio.on("chat")
def handle_chat(data):
    if data:
        # print(data, '=============')
        new_msg = Message(
                content = data['content'],
                user_id = data['user_id'],
                channel_id = 1
            )
        db.session.add(new_msg)
        db.session.commit()
    emit("chat", data, broadcast=True)



# @socketio.on('join')
# def on_join(data):
#     username = session['username']
#     room = data['room']
#     join_room(room)
#     send(username + ' has entered the room.', to=room)
