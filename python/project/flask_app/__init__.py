from flask import Flask, render_template, redirect, request, session
from flask_bcrypt import Bcrypt
from cloudinary.api import delete_resources_by_tag, resources_by_tag
from cloudinary.uploader import upload
from cloudinary.utils import cloudinary_url
app = Flask(__name__)
app.secret_key = 'shhhh'
bcrypt = Bcrypt(app)
DATABASE = 'diveexp'
# cloudinary.config={
#     cloud_name: "dmwbjvfaq", 
#     api_key: "534194267285965", 
#     api_secret: "YMCqSd0z2NZvO7Ye-xWf8fYWcBY"
# }

CLOUDINARY_URL='cloudinary://my_key:my_secret@my_cloud_name'