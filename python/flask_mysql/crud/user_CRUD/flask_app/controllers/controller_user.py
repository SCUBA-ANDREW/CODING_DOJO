from crypt import methods
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

@app.route('/user/<int:id>')
def user_show(id):
    user=User.get_one({'id':id})
    return render_template('user_show.html',user=user)

@app.route('/user/<int:id>/edit')
def user_edit(id):
    user = User.get_one({'id':id})
    return render_template('user_edit.html', user =user)

@app.route('/user/<int:id>/update', methods=['post'])
def user_update(id):
    data={
        **request.form,
        'id':id
    }
    User.update_one(data)
    return redirect('/')

@app.route('/user/<int:id>/delete')
def user_delete(id):
    User.delete_one({'id':id})
    return redirect('/')