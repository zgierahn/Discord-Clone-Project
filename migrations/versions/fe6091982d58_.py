"""empty message

<<<<<<<< HEAD:migrations/versions/fe6091982d58_.py
Revision ID: fe6091982d58
Revises: 
Create Date: 2023-08-05 13:39:16.088226
========
Revision ID: 4c89e463e885
Revises: 
Create Date: 2023-08-05 11:28:51.844449
>>>>>>>> 8baa843 (servers):migrations/versions/4c89e463e885_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<<< HEAD:migrations/versions/fe6091982d58_.py
revision = 'fe6091982d58'
========
revision = '4c89e463e885'
>>>>>>>> 8baa843 (servers):migrations/versions/4c89e463e885_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('servers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('privates', sa.Boolean(), nullable=False),
    sa.Column('picture', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('userPhoto', sa.Text(), nullable=True),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('channels',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('server_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['server_id'], ['servers.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('reactions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('emoji', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('server_user',
    sa.Column('servers', sa.Integer(), nullable=False),
    sa.Column('users', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['servers'], ['servers.id'], ),
    sa.ForeignKeyConstraint(['users'], ['users.id'], ),
    sa.PrimaryKeyConstraint('servers', 'users')
    )
    op.create_table('messages',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('content', sa.Text(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('channel_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['channel_id'], ['channels.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('message_reactions',
    sa.Column('messages', sa.Integer(), nullable=False),
    sa.Column('reactions', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['messages'], ['messages.id'], ),
    sa.ForeignKeyConstraint(['reactions'], ['reactions.id'], ),
    sa.PrimaryKeyConstraint('messages', 'reactions')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('message_reactions')
    op.drop_table('messages')
    op.drop_table('server_user')
    op.drop_table('reactions')
    op.drop_table('channels')
    op.drop_table('users')
    op.drop_table('servers')
    # ### end Alembic commands ###
