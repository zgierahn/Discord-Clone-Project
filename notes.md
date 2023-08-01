import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")

Insides Shell
Flask db init
Flask db migrate
Flask db upgrade
Flask seed all

Flask undo seed
