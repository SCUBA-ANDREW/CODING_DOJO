from crypt import methods
from flask import render_template, redirect, request, session
from flask_app import app
from flask_app.models import model_ninja,model_dojo
@app.route('/ninja/new')
def ninja_new():
    all_ninjas = model_ninja.Ninja.get_all()
    return render_template('ninja_new.html')

@app.route('/ninja/create', methods=['post'])
def ninja_create():
    model_ninja.Ninja.create(request.form)
    return redirect('/')

@app.route('/ninja/<int:id>')
def ninja_show(id):
    ninja=model_ninja.Ninja.get_one({'id':id})
    return render_template('ninja_show.html',ninja =ninja)

@app.route('/ninja/<int:id>/edit')
def ninja_edit(id):
    ninja = model_ninja.Ninja.ger_one({'id':id})
    return render_template('ninja_edit.html', ninja=ninja)

@app.route('/ninja/<int:id>/update',methods=['post'])
def ninja_update(id):
    data={
        **request.form,
        'id':id
    }
    model_ninja.Ninja.update_one(data)
    return redirect('/')

@app.route('/ninja/<int:id>/delete')
def ninja_delete(id):
    model_ninja.Ninja.delete_one({'id':id})
    return redirect('/')
# ******above will change*****