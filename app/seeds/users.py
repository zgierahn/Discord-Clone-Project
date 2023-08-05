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
    will = User(
        username='will', email='will@aa.io', password='password')
    sean = User(
        username='sean', email='sean@aa.io', password='password')
    alex = User(
        username='alex', email='alex@aa.io', password='password')
    server1 = Server(
        name="Zach's place", picture= "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png", privates=True,user=[demo,marnie,alex])
    server2 = Server(
        name="Mike's place", picture= "https://www.hdwallpaper.nu/wp-content/uploads/2021/02/league_of_legends-11-scaled.jpg" ,  privates=False,user=[demo,will,marnie,sean])
    server3 = Server(
        name="Emily's place", picture= "https://i.pinimg.com/originals/eb/42/cb/eb42cb6804b5ac185e973d1d4d256fcb.jpg" ,  privates=False,user=[marnie,sean])
    server4 = Server(
        name='MattDonalds', picture= "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" ,  privates=True,user=[demo,marnie,will,alex])
    server5 = Server(
        name='Bibliophiles', picture= "https://i.pinimg.com/originals/65/d4/d8/65d4d807c93884ee6ce4ac0212de1428.jpg" ,  privates=True,user=[marnie,bobbie,will])
    server6 = Server(
        name='Superhero Training', picture= "https://static.vecteezy.com/system/resources/previews/000/652/026/original/superhero-flat-icons-vector.jpg" ,  privates=True,user=[marnie,bobbie,alex])
    server7 = Server(
        name='Hackers Anon', picture= "https://i.pinimg.com/736x/85/9c/47/859c47e6ffdcbb28cf03a7d11207fced.jpg" ,  privates=False,user=[demo,marnie,will,sean,alex])
    server8 = Server(
        name='Gaming', picture= "https://st2.depositphotos.com/4410397/7876/v/450/depositphotos_78763754-stock-illustration-game-controller-icon.jpg" ,  privates=False,user=[demo,marnie,bobbie,will])
    server9 = Server(
        name="Adventure's Out There", picture= "https://img0.etsystatic.com/il_fullxfull.175159679.jpg" ,  privates=True,user=[marnie, sean, will, bobbie])
    server10 = Server(
        name='Cooking', picture= "https://cdn.dribbble.com/users/68386/screenshots/2312479/cooking.png" ,  privates=True,user=[demo,marnie,alex])
    channel1 = Channel(
        name='snowboarding', server_id=1)
    channel2 = Channel(
        name='cars', server_id=1)
    channel3 = Channel(
        name='hiking', server_id=1)
    channel4 = Channel(
        name='cycling', server_id=1)
    channel5 = Channel(
        name='Book Talk!', server_id=2)
    channel6 = Channel(
        name='Tardis Travels', server_id=2)
    channel7 = Channel(
        name='Food Talk', server_id=2)
    channel8 = Channel(
        name='Anime', server_id=2)
    channel9 = Channel(
        name='Pixar Theory', server_id=3)
    channel10 = Channel(
        name='Disney Adults', server_id=3)
    channel11 = Channel(
        name='Disney Events', server_id=3)
    channel12 = Channel(
        name='New Releases', server_id=3)
    channel13 = Channel(
        name='League of Legends', server_id=4)
    channel14 = Channel(
        name='Gym Life', server_id=4)
    channel15 = Channel(
        name='Music Recs', server_id=4)
    channel16 = Channel(
        name='Going Places', server_id=4)
    channel17 = Channel(
        name='Coding', server_id=5)
    channel18 = Channel(
        name='Gym Bros', server_id=5)
    channel19 = Channel(
        name='Making Money', server_id=5)
    channel20 = Channel(
        name='24 Grind Life', server_id=5)
    channel21 = Channel(
        name='Book Club', server_id=6)
    channel22 = Channel(
        name='Spicy Recs', server_id=6)
    channel23 = Channel(
        name='Borrowers Club', server_id=6)
    channel24 = Channel(
        name='Events', server_id=6)
    channel25 = Channel(
        name='Definiely Not Villians', server_id=7)
    channel26 = Channel(
        name='Hero Meet Up', server_id=7)
    channel27 = Channel(
        name='Handling a Giant Squid', server_id=7)
    channel28 = Channel(
        name='Dodging Death Rays', server_id=7)
    channel29 = Channel(
        name='Programming Pigeons', server_id=8)
    channel30 = Channel(
        name='How to get away with Hacking', server_id=8)
    channel31 = Channel(
        name="Pirating your Neighbor's WIFI", server_id=8)
    channel32 = Channel(
        name='Dark Web', server_id=8)
    channel33 = Channel(
        name='D&D Meetup', server_id=9)
    channel34 = Channel(
        name='Recipes', server_id=10)
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
    db.session.add_all([channel1,channel2,channel3,channel4,channel5,channel6,channel7,channel8,channel9,channel10,
                        channel11,channel12,channel13,channel14,channel15,channel16,channel17,channel18,channel19,channel20,
                        channel21,channel22,channel23,channel24,channel25,channel26,channel27,channel28,channel29,channel30,
                        channel31,channel32,channel33, channel34])
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
