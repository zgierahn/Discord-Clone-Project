from app.models import db, User, environment, SCHEMA, Server, Channel,Message,Reaction
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', userPhoto="https://d4l6e04z43qjx.cloudfront.net/images/articles/iconic-logo/Iconic-Logo-2.jpg", password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', userPhoto="https://static.vecteezy.com/system/resources/previews/002/195/322/original/crown-logo-template-illustration-free-vector.jpg", password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', userPhoto="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg", password='password')
    will = User(
        username='will', email='will@aa.io', userPhoto="https://static.vecteezy.com/system/resources/previews/000/623/024/original/viper-snake-logo-design-element-danger-snake-icon-viper-symbol-vector.jpg", password='password')
    sean = User(
        username='sean', email='sean@aa.io', userPhoto="https://media.istockphoto.com/id/1204538042/vector/pant-jeans.jpg?s=612x612&w=0&k=20&c=xWTYid08fI_YmXxwycuQ84aKd71BW7cXJkuzO4KZKFg=", password='password')
    alex = User(
        username='alex', email='alex@aa.io', userPhoto="https://images-platform.99static.com//tO4kwznrw2CeK0F1FP6D9Xrr06o=/197x1200:796x1799/fit-in/500x500/99designs-contests-attachments/136/136706/attachment_136706091", password='password')
    server1 = Server(
        name='zachs place', picture= "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png", privates=True,user=[demo,marnie])
    server2 = Server(
        name='mikes place', picture= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU" ,  privates=False,user=[demo])
    server3 = Server(
        name='emilys place', picture= "https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" ,  privates=False,user=[marnie])
    server4 = Server(
        name='matts place', picture= "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" ,  privates=True,user=[demo,marnie])
    server5 = Server(
        name='Bibliophiles', picture= "https://static.vecteezy.com/system/resources/previews/000/652/026/original/superhero-flat-icons-vector.jpg" ,  privates=True,user=[demo,marnie])
    server6 = Server(
        name='Superhero Training', picture= "https://static.vecteezy.com/system/resources/previews/000/652/026/original/superhero-flat-icons-vector.jpg" ,  privates=True,user=[demo,marnie])
    server7 = Server(
        name='Hackers Anon', picture= "https://wallpapercave.com/wp/wp7447715.jpg" ,  privates=False,user=[demo,marnie])
    server8 = Server(
        name='Gaming', picture= "https://cdn5.vectorstock.com/i/1000x1000/91/44/game-controller-flat-app-icon-with-long-shadow-vector-3619144.jpg" ,  privates=False,user=[demo,marnie])
    server9 = Server(
        name="Adventure's Out There", picture= "https://img0.etsystatic.com/il_fullxfull.175159679.jpg" ,  privates=True,user=[demo,marnie])
    server10 = Server(
        name='The Great Escape', picture= "https://wallpapersmug.com/download/3840x2400/d3d05e/fantasy-astronaut-space.jpg" ,  privates=True,user=[demo,marnie])
    channel1 = Channel(
        name='awesome', server_id=1)
    channel2 = Channel(
        name='talking', server_id=3)
    channel3 = Channel(
        name='surfing', server_id=3)
    channel4 = Channel(
        name='school', server_id=3)
    channel5 = Channel(
        name='learning', server_id=4)
    channel6 = Channel(
        name='homework', server_id=4)
    message1 = Message(
        content='This is a test message user 1, channel 1', user_id=1,channel_id=1)
    message2 = Message(
        content='This is a test message user 3, channel 1', user_id=3,channel_id=1)
    message3 = Message(
        content='This is a test message user 3, channel 1', user_id=3,channel_id=1)
    message4 = Message(
        content='This is a test message user 3, channel 2', user_id=3,channel_id=2)
    message5 = Message(
        content='This is a test message user 1, channel 3', user_id=1,channel_id=3)
    message6 = Message(
        content='This is a test message user 1, channel 4', user_id=1,channel_id=4)
    reaction1 = Reaction(
        emoji='😀', user_id=1,messages=[message1])
    reaction2 = Reaction(
        emoji='😂', user_id=3,messages=[message1,message2])
    reaction3 = Reaction(
        emoji='🤐', user_id=3,messages=[message1,message3,message2])
    reaction4 = Reaction(
        emoji='😂',user_id=3,messages=[message1,message4])
    reaction5 = Reaction(
        emoji='😅', user_id=1,messages=[message1,message4])
    reaction6 = Reaction(
        emoji='😇', user_id=1,messages=[message1])

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(will)
    db.session.add(sean)
    db.session.add(alex)
    db.session.add_all([server1, server2,server3,server4,server5,server6,server7,server8,server9,server10])
    db.session.add_all([channel1,channel2,channel3,channel4,channel5,channel6])
    db.session.add_all([message1, message2,message3,message4,message5,message6])
    db.session.add_all([reaction1, reaction2,reaction3,reaction4,reaction5,reaction6])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.message_reactions RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.reactions RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.messages RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.server_user RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.channels RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.servers RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM message_reactions"))
        db.session.execute(text("DELETE FROM reactions"))
        db.session.execute(text("DELETE FROM messages"))
        db.session.execute(text("DELETE FROM server_user"))
        db.session.execute(text("DELETE FROM channels"))
        db.session.execute(text("DELETE FROM servers"))
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
