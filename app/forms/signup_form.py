from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

def is_email(form,field):

    email=field.data
    if '@' not in email:
        raise ValidationError("Email must be valid")
def long_enough(form, field):
    username=field.data
    if len(username) <2 or len(username) > 32:
        raise ValidationError("Must be 2-32 characters long")

def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def password_enough(form,field):
    password=field.data
    if len(password)<8:
        raise ValidationError("Must be at least 8 characters long")


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists, long_enough])
    email = StringField('email', validators=[DataRequired(), user_exists, is_email])
    password = StringField('password', validators=[DataRequired(), password_enough])
