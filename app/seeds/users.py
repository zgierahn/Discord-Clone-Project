from app.models import db, User, environment, SCHEMA, Server, Channel,Message,Reaction
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    server1 = Server(
        name='zachs place', public=True,user=[demo,marnie])
    server2 = Server(
        name='mikes place', public=False,user=[demo])
    server3 = Server(
        name='emilys place', public=False,user=[marnie])
    server4 = Server(
        name='matts place', public=True,user=[demo,marnie])
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
        content='This is a test message user 4, channel 3', user_id=4,channel_id=3)
    message6 = Message(
        content='This is a test message user 4, channel 4', user_id=4,channel_id=4)
    reaction1 = Reaction(
        emoji='😀', user_id=1,messages=[message1])
    reaction2 = Reaction(
        emoji='😂', user_id=3,messages=[message1,message2])
    reaction3 = Reaction(
        emoji='🤐', user_id=3,messages=[message1,message3,message2])
    reaction4 = Reaction(
        emoji='😂',user_id=3,messages=[message1,message4])
    reaction5 = Reaction(
        emoji='😅', user_id=4,messages=[message1,message4])
    reaction6 = Reaction(
        emoji='😇', user_id=4,messages=[message1])

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.commit()
    db.session.add_all([server1, server2,server3,server4])
    db.session.commit()
    db.session.add_all([channel1,channel2,channel3,channel4,channel5,channel6])
    db.session.commit()
    db.session.add_all([message1, message2,message3,message4,message5,message6])
    db.session.commit()
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
