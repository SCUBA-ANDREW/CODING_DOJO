# from flask import Flask, render_template, redirect, request, session
# app = Flask(__name__)
# app.secret_key = 'ahhhh'

from flask_app import app
from flask_app.controllers import controller_user


if __name__ == '__main__':
    app.run(debug=True, port=5001)