from flask import render_template, redirect, request, session
from flask_app import app,bcrypt
from flask_app.models import model_recipe,model_user
@app.route('/recipe/new')
def recipe_new():
    if 'uuid' in session:
        return render_template('recipe_new.html')
    return redirect('/')

@app.route('/recipe/create', methods=['post'])
def recipe_create():
    print(request.form)
    data={
        **request.form,
        'user_id':session['uuid']
    }
    model_recipe.Recipe.create(data)
    return redirect('/')

@app.route('/recipe/<int:id>')
def recipe_show(id):
    recipe=model_recipe.Recipe.get_one({'id':id})
    return render_template('recipe_show.html',recipe =recipe)

@app.route('/recipe/edit/<int:id>')
def recipe_edit(id):
    
    recipe = model_recipe.Recipe.get_one({'id':id})
    if session['uuid']!=recipe.user_id:
        return redirect('/success')
    return render_template('recipe_edit.html', recipe=recipe)

@app.route('/recipe/<int:id>/update',methods=['post'])
def recipe_update(id):
    data={
        **request.form,
        'id':id
    }
    model_recipe.Recipe.update_one(data)
    return redirect('/')

@app.route('/recipe/delete/<int:id>')
def recipe_delete(id):
    model_recipe.Recipe.delete_one({'id':id})
    return redirect('/')
# ******above will change*****