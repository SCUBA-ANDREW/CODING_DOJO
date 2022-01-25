from flask import render_template, redirect, request, session
from flask_app import app
from flask_app.models.model_ninja import Ninja
from flask_app.models.model_dojo import Dojo


@app.route('/')
def index():
    return render_template('index.html')