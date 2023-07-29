"""all the migrationss

Revision ID: 5f846c1a272d
Revises: ffdc0a98111c
Create Date: 2023-07-26 19:24:14.149663

"""
from alembic import op
import sqlalchemy as sa


import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

# revision identifiers, used by Alembic.
revision = '5f846c1a272d'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('servers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('public', sa.Boolean(), nullable=False),
    sa.Column('picture', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('server_user',
    sa.Column('servers', sa.Integer(), nullable=False),
    sa.Column('users', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['servers'], ['servers.id'], ),
    sa.ForeignKeyConstraint(['users'], ['users.id'], ),
    sa.PrimaryKeyConstraint('servers', 'users')
    )
    op.create_table('channels',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('server_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['server_id'], ['servers.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
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
    op.create_table('reactions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('emoji', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('message_reactions',
    sa.Column('messages', sa.Integer(), nullable=False),
    sa.Column('reactions', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['messages'], ['messages.id'], ),
    sa.ForeignKeyConstraint(['reactions'], ['reactions.id'], ),
    sa.PrimaryKeyConstraint('messages', 'reactions')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE servers SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE server_user SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE channels SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE messages SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE reactions SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE message_reactions SET SCHEMA {SCHEMA};")

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('message_reactions')
    op.drop_table('messages')
    op.drop_table('server_user')
    op.drop_table('channels')
    op.drop_table('servers')
    op.drop_table('reactions')
    # ### end Alembic commands ###
