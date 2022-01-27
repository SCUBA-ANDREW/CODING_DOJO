from flask import render_template, redirect, request, session

from flask_app import app,bcrypt
from flask_app.models import model_user,model_recipe
# *****below will change*****
# @app.route('/register/user', methods=['POST'])
# def register():
#     # validate the form here ...
#     # create the hash
#     pw_hash = bcrypt.generate_password_hash(request.form['password'])
#     print(pw_hash)
#     # put the pw_hash into the data dictionary
#     data = {
#         'username': request.form['username'],
#         'password' : pw_hash
#     }
#     # Call the save @classmethod on User
#     user_id = model_user.User.save(data)
#     # store user id into session
#     session['user_id'] = user_id
#     return redirect('/dashboard')


@app.route('/')
@app.route('/user/new')
def user_new():
    if 'uuid' in session:
        return redirect('/success')
    return render_template('login.html')

@app.route('/user/login',methods=['post'])
def user_login():
    # validations
    is_valid = model_user.User.validate_login(request.form)
    if is_valid:
        data={
        **request.form,
        # 'pw':hash_pw
        }
        # create the user
        user_instance=model_user.User.get_one_by_email(data)
        session['first_name']=user_instance.first_name
        # session['uuid']=model_user.User.get_one_by_email(request.form).id
        return redirect('/success')
    else:
        return redirect('/')
        

@app.route('/success')
def success():
    if 'uuid' not in session:
        return redirect('/')
    recipe=model_recipe.Recipe.get_all()
    
    # user=model_user.User.get_one_with_recipe({'id':id})
    return render_template('dashboard.html',recipe=recipe)

@app.route('/logout')
def logout():
    del session['uuid']
    del session['first_name']
    return redirect('/')

@app.route('/user/create', methods=['post'])
def user_create():
    # validation
    if not model_user.User.validate_reg(request.form):
        return redirect('/')

    #create the hash password
    hash_pw=bcrypt.generate_password_hash(request.form['pw'])
    print(hash_pw)

    data={
        **request.form,
        'pw':hash_pw
    }
    # create the user
    user_id=model_user.User.create(data)
    session['uuid']=user_id
    session['first_name']=data['first_name']

    return redirect('/success')

@app.route('/user/<int:id>')
def user_show(id):
    user=model_user.User.get_one({'id':id})
    return render_template('user_show.html',user =user)

@app.route('/user/<int:id>/edit')
def user_edit(id):
    user = model_user.User.get_one({'id':id})
    return render_template('user_edit.html', user=user)

@app.route('/user/<int:id>/update',methods=['post'])
def user_update(id):
    data={
        **request.form,
        'id':id
    }
    model_user.User.update_one(data)
    return redirect('/')

@app.route('/user/<int:id>/delete')
def user_delete(id):
    model_user.User.delete_one({'id':id})
    return redirect('/')
# ******above will change*****