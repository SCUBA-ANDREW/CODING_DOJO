from flask import render_template, redirect, request, session
from flask_app import app
from flask_app.models.model_user import User
@app.route('/')
def index():
    all_users = User.get_all()
    return render_template('index.html',all_users=all_users)

@app.route('/user/new')
def user_new():
    return render_template('user_new.html')

@app.route('/user/create', methods=['post'])
def user_create():
    User.create(request.form)
    return redirect('/')