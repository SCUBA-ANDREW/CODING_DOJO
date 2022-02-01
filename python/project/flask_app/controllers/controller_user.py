from builtins import print
from flask import render_template, redirect, request, session

from flask_app import app,bcrypt
from flask_app.models import model_user,model_show,model_like


# login page
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
        
# dashboard
@app.route('/success')
def success():
    if 'uuid' not in session:
        return redirect('/')
    show=model_show.Show.get_all()
    check_like=model_like.Like.check_like({'user_id':session['uuid']})
    print(check_like)
    # user=model_user.User.get_one_with_show({'id':id})
    return render_template('dashboard.html',show=show,check_like=check_like)

# logout
@app.route('/logout')
def logout():
    del session['uuid']
    del session['first_name']
    return redirect('/')

# C
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
# R
@app.route('/user/<int:id>')
def user_show(id):
    user=model_user.User.get_one({'id':id})
    return render_template('user_show.html',user =user)

# U
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
#D
@app.route('/user/<int:id>/delete')
def user_delete(id):
    model_user.User.delete_one({'id':id})
    return redirect('/')
