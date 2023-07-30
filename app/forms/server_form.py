from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class ServerForm(FlaskForm):
    name = StringField('name')
    privates = StringField('privates')
    picture = StringField('picture')
