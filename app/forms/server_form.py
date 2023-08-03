from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User,Server

# def name_dup_server(form,field):
#     name =field.data
#     name_dupicate = Server.query.filter(name==Server.name).first()
#     name_dupicate_length =len([server.to_dict() for server in name_dupicate])
#     if name_dupicate_length > 0:
#         raise ValidationError("error":"Server name already exists")

# ,validators=[DataRequired(),name_dup_server]
class ServerForm(FlaskForm):
    name = StringField('name')
    privates = StringField('privates')
    picture = StringField('picture')
