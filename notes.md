import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")

Insides Shell
flask db init
flask db migrate
flask db upgrade
flask seed all

flask undo seed
