from flask_socketio import SocketIO, emit, send, join_room
import os
from .models import Message, db


# configure cors_allowed_origins
if os.environ.get('FLASK_ENV') == 'production':
    origins = [
        'http://discord-flask-clone.onrender.com',
        'https://discord-flask-clone.onrender.com'
    ]
else:
    origins = "*"

# initialize your socket instance
socketio = SocketIO(cors_allowed_origins=origins)


# handle chat messages
@socketio.on("chat")
def handle_chat(data):
    if data:
        print(data, '=============')
        new_msg = Message(
                content = data['content'],
                user_id = data['user_id'],
                channel_id = data['channel_Id']
            )
        db.session.add(new_msg)
        db.session.commit()
    emit("chat", data, broadcast=True)



@socketio.on('join')
def on_join(data):
    print('-------------------- here', data)
    # username = data['username']
    room = data['channel']
    join_room(room)
    emit('join', data, to=room)
    # send('has entered the room.', to=room)
