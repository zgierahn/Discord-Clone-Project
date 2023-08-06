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
        name='Pixar Theory', server_id=5)
    channel10 = Channel(
        name='Disney Adults', server_id=5)
    channel11 = Channel(
        name='Disney Events', server_id=5)
    channel12 = Channel(
        name='Movie Fight', server_id=5)
    channel13 = Channel(
        name='League of Legends', server_id=6)
    channel14 = Channel(
        name='Gym Life', server_id=6)
    channel15 = Channel(
        name='Music Recs', server_id=6)
    channel16 = Channel(
        name='Going Places', server_id=6)
    channel17 = Channel(
        name='Coding', server_id=7)
    channel18 = Channel(
        name='Gym Bros', server_id=7)
    channel19 = Channel(
        name='Making Money', server_id=7)
    channel20 = Channel(
        name='24 Grind Life', server_id=7)
    channel21 = Channel(
        name='Book Club', server_id=3)
    channel22 = Channel(
        name='Spicy Recs', server_id=3)
    channel23 = Channel(
        name='Borrowers Club', server_id=3)
    channel24 = Channel(
        name='Events', server_id=3)
    channel25 = Channel(
        name='Definiely Not Villians', server_id=4)
    channel26 = Channel(
        name='Hero Meet Up', server_id=4)
    channel27 = Channel(
        name='Handling a Giant Squid', server_id=4)
    channel28 = Channel(
        name='Dodging Death Rays', server_id=4)
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
        name='Hacks', server_id=9)
    channel35 = Channel(
        name='Upcoming Releases', server_id=9)
    channel36 = Channel(
        name='Newbies', server_id=9)
    channel37 = Channel(
        name='Recipes', server_id=10)
    channel38 = Channel(
        name='Cooking Class', server_id=10)
    channel39 = Channel(
        name='Wine Pairing', server_id=10)
    channel40 = Channel(
        name='Local Sales', server_id=10)
    message1 = Message(
        content='Hey guys this is where we can talk about all our cool snowboarding stuff!', user_id=1,channel_id=1)
    message2 = Message(
        content='Anyone live in Colorado? Would love a snowboarding partner!!', user_id=2,channel_id=1)
    message3 = Message(
        content='I live in Colorado! I go up to Aspen every weekend!', user_id=6,channel_id=1)
    message4 = Message(
        content='You should totally join my group!', user_id=6,channel_id=1)
    message5 = Message(
        content='Yeah i go with alex and its always a great time!!', user_id=1,channel_id=1)
    message6 = Message(
        content='Count me in!!', user_id=2,channel_id=1)
    message7 = Message(
        content='Anyone want to buy my car that i refurbished??', user_id=1,channel_id=2)
    message8 = Message(
        content='How much?', user_id=6,channel_id=2)
    message9 = Message(
        content='A million dollars?', user_id=1,channel_id=2)
    message10 = Message(
        content='LOL no, what is it made of, gold?? This is highway robbery!!', user_id=6,channel_id=2)
    message11 = Message(
        content="I'm going hiking in the Pacific Coast Trail! If you never hear from me again the aliens got me!!", user_id=6,channel_id=3)
    message12 = Message(
        content='You hiking the PCT alone? Stay safe!!', user_id=2,channel_id=3)
    message13 = Message(
        content='I like food', user_id=2,channel_id=7)
    message14 = Message(
        content="I can't ride a bike", user_id=2,channel_id=4)
    message15 = Message(
        content='Then why are you here??', user_id=1,channel_id=4)
    message16 = Message(
        content='Have you read Project Hail Mary?? it was amazing!! Totally reccomend the audio book', user_id=2,channel_id=5)
    message17 = Message(
        content="That's on my TBR! Definitely moving it up the list", user_id=3,channel_id=5)
    message18 = Message(
        content='Girl have you read anything by Tiffany Roberts?', user_id=4,channel_id=22)
    message19 = Message(
        content='How could I not you know me and spice!', user_id=2,channel_id=22)
    message20 = Message(
        content='give me back my copy of The Cruel Prince!!', user_id=2,channel_id=23)
    message21 = Message(
        content='did you seriously just make a whole channel to tell me this???', user_id=4,channel_id=23)
    message22 = Message(
        content='About to watch the new season of Jutusu Kaisen!! So excited!', user_id=2,channel_id=8)
    message23 = Message(
        content='I just finished it. Geto deserves the world!! ', user_id=3,channel_id=8)
    message24 = Message(
        content='NO SPOILERS!!!', user_id=2,channel_id=8)
    message25 = Message(
        content='we need a good conspiracy', user_id=4,channel_id=9)
    message26 = Message(
        content='who else is going to disney this weekend?', user_id=2,channel_id=10)
    message27 = Message(
        content='Which one?', user_id=5,channel_id=10)
    message28 = Message(
        content="I'll be at the one in CA", user_id=4,channel_id=10)
    message29 = Message(
        content='Go to the halloween night at disney so fun to trick or treat!!', user_id=2,channel_id=11)
    message30 = Message(
        content='Marnie you are 30', user_id=3,channel_id=11)
    message31 = Message(
        content='And your point is....', user_id=2,channel_id=11)
    message32 = Message(
        content='Movie Fight: which is better Toy Story 1 or Toy Story 3 ', user_id=2,channel_id=12)
    message33 = Message(
        content="Just waiting for the Doctor to show up! It'll definitely happen", user_id=2,channel_id=6)
    message34 = Message(
        content="Sure it will", user_id=3,channel_id=6)
    message35 = Message(
        content="We are reading Hamlet this month", user_id=4,channel_id=21)
    message36 = Message(
        content="Why? Just watch the Lion King", user_id=5,channel_id=21)
    message37 = Message(
        content="34th and Main", user_id=5,channel_id=24)
    message38 = Message(
        content="Well that's frustratingly vague", user_id=2,channel_id=24)
    message39 = Message(
        content="Just started playing with some friends, anyone want in?", user_id=1,channel_id=13)
    message40 = Message(
        content="Me!!!", user_id=5,channel_id=13)
    message41 = Message(
        content="Do you even lift bro", user_id=5,channel_id=14)
    message42 = Message(
        content="Nope", user_id=2,channel_id=14)
    message43 = Message(
        content="My new single comes out on friday, give it a listen.", user_id=5,channel_id=15)
    message44 = Message(
        content="I think this is for real music not you mumbling into a microphone", user_id=2,channel_id=15)
    message45 = Message(
        content="IDK where but I'm going", user_id=1,channel_id=16)
    message46 = Message(
        content="Hello World!", user_id=1,channel_id=17)
    message47 = Message(
        content="Do you even lift bro", user_id=5,channel_id=18)
    message48 = Message(
        content="Why would you write this in two seperate servers??", user_id=2,channel_id=18)
    message49 = Message(
        content="Easy invest in Twitter", user_id=6,channel_id=19)
    message50 = Message(
        content="Nothing like living off of caffiene and heavy metal", user_id=1,channel_id=20)
    message51 = Message(
        content="This is a very suspicious name. Are you sure you aren't villians", user_id=4,channel_id=25)
    message52 = Message(
        content="I mean everyone is the villian in someones story right", user_id=2,channel_id=25)
    message53 = Message(
        content="Avengers Assemble!!", user_id=6,channel_id=26)
    message54 = Message(
        content="How often does this actually happen, that you have a whole channel for it??", user_id=4,channel_id=27)
    message55 = Message(
        content="Surprisingly a lot. Avoid the ink clouds of death!!", user_id=2,channel_id=27)
    message56 = Message(
        content="Serpentine! Serpentine!", user_id=6,channel_id=28)
    message57 = Message(
        content="Zig Zag formation!!", user_id=2,channel_id=28)
    message58 = Message(
        content="Anyone know how to get my pigeon to stop singing Taylor Swift?", user_id=3,channel_id=29)
    message59 = Message(
        content="Yeah they fixed that bug with the software update", user_id=2,channel_id=29)
    message60 = Message(
        content="Never get caught", user_id=1,channel_id=30)
    message61 = Message(
        content="I concur", user_id=3,channel_id=30)
    message62 = Message(
        content="Anyone got any ideas?", user_id=4,channel_id=31)
    message63 = Message(
        content="Yeah just befriend your neighbor and ask for their WIFI password. Done!", user_id=6,channel_id=31)
    message64 = Message(
        content="This isn't real, or maybe it is?", user_id=1,channel_id=32)
    message65 = Message(
        content="I have an opening at my table and its virtual if anyone wants in.", user_id=5,channel_id=33)
    message66 = Message(
        content="Whats the story line?", user_id=1,channel_id=33)
    message67 = Message(
        content="It's a heist, any more info and it'll ruin the experience", user_id=5,channel_id=33)
    message68 = Message(
        content="I'm in!!", user_id=2,channel_id=33)
    message69 = Message(
        content="Cheat", user_id=4,channel_id=34)
    message70 = Message(
        content="Diablo IV, I think", user_id=1,channel_id=35)
    message71 = Message(
        content="Can someone please teach me how to play D&D i am so interested.", user_id=4,channel_id=36)
    message72 = Message(
        content="As long as you don't cheat you can join my campaign", user_id=5,channel_id=36)
    message73 = Message(
        content="Anyone have any ideas for a home cooked dinner?", user_id=1,channel_id=37)
    message74 = Message(
        content="Taco Bell", user_id=6,channel_id=37)
    message75 = Message(
        content="What if im really bad at cooking", user_id=2,channel_id=38)
    message76 = Message(
        content="That's ok all we really make is frozen food anyway", user_id=1,channel_id=38)
    message77 = Message(
        content="Anyone know what wine goes well with steak?", user_id=1,channel_id=39)
    message78 = Message(
        content="All of them", user_id=2,channel_id=39)
    message79 = Message(
        content="Costco is having a sale on stoves, get it while its hot", user_id=1,channel_id=40)
    message80 = Message(
        content="Lit", user_id=2,channel_id=40)
    reaction1 = Reaction(
        emoji='😀', user_id=2,messages=[message4])
    reaction2 = Reaction(
        emoji='💰', user_id=1,messages=[message10])
    reaction3 = Reaction(
        emoji='🔥', user_id=6,messages=[message6])
    reaction4 = Reaction(
        emoji='🫠', user_id=6,messages=[message9])
    reaction5 = Reaction(
        emoji='😅', user_id=1,messages=[message10])
    reaction6 = Reaction(
        emoji='😇', user_id=2,messages=[message11])
    reaction7 = Reaction(
        emoji='😎', user_id=3,messages=[message16])
    reaction8 = Reaction(
        emoji='💀', user_id=2,messages=[message22])
    reaction9 = Reaction(
        emoji='💀', user_id=3,messages=[message20])
    reaction10 = Reaction(
        emoji='👀', user_id=2,messages=[message37])
    reaction11 = Reaction(
        emoji='🔥', user_id=2,messages=[message79])

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
                        channel31,channel32,channel33, channel34,channel35,channel36,channel37,channel38,channel39,channel40])
    db.session.add_all([message1, message2,message3,message4,message5,message6,message7,message8,message9,message10,
                        message11,message12,message13,message14,message15,message16,message17,message18,message19,message20,
                        message21,message22,message23,message24,message25,message26,message27,message28,message29,message30,
                        message31,message32,message33,message34,message35,message36,message37,message38,message39,message40,
                        message41,message42,message43,message44,message45,message46,message47,message48,message49,message50,
                        message51,message52,message53,message54,message55,message56,message57,message58,message59,message60,
                        message61,message62,message63,message64,message65,message66,message67,message68,message69,message70,
                        message71,message72,message73,message74,message75,message76,message77,message78,message79,message80])
    db.session.add_all([reaction1, reaction2,reaction3,reaction4,reaction5,reaction6,reaction7,reaction8,reaction9,reaction10,reaction11])
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
