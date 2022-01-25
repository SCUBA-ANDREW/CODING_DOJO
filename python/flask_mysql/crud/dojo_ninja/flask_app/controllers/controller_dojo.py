from flask import render_template, redirect, request, session
from flask.app import app
from flask_app.models import model_dojo,model_ninja
# *****below will change*****
@app.route('/')
def index():
    all_dojos = model_dojo.Dojo.get_all()
    return render_template('index.html')

@app.route('/dojo/new')
def dojo_new():
    all_dojos = model_dojo.Dojo.get_all()
    return render_template('dojo_new.html')

@app.route('/dojo/create', methods=['post'])
def dojo_create():
    model_dojo.Dojo.create(request.form)
    return redirect('/')

@app.route('/dojo/<int:id>')
def dojo_show(id):
    dojo=model_dojo.Dojo.get_one({'id':id})
    return render_template('dojo_show.html',dojo =dojo)

@app.route('/dojo/<int:id>/edit')
def dojo_edit(id):
    dojo = model_dojo.Dojo.ger_one({'id':id})
    return render_template('dojo_edit.html', dojo=dojo)

@app.route('/dojo/<int:id>/update',methods=['post'])
def dojo_update(id):
    data={
        **request.form,
        'id':id
    }
    model_dojo.Dojo.update_one(data)
    return redirect('/')

@app.route('/dojo/<int:id>/delete')
def dojo_delete(id):
    model_dojo.Dojo.delete_one({'id':id})
    return redirect('/')
# ******above will change*****