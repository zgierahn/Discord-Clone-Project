from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError



class ReactionForm(FlaskForm):
    user_id= IntegerField('user_id')
    emoji=StringField('emoji')
