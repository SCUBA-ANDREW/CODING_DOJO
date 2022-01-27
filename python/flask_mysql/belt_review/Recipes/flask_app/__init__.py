from flask import Flask, render_template, redirect, request, session
from flask_bcrypt import Bcrypt
app = Flask(__name__)
app.secret_key = 'shhhh'
bcrypt = Bcrypt(app)
DATABASE = 'recp_db_schema'