from flask import render_template, redirect, request, session,flash
from flask_app import app,bcrypt
from flask_app.models import model_story,model_user
import os
import urllib.request
from cloudinary.uploader import upload
from cloudinary.utils import cloudinary_url
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = 'flask_app/static/uploads'
app.config['UPLOAD_FOLDER']=UPLOAD_FOLDER
# app.config['MAX_CONTENT_LENGTH']=16 * 1024 * 1024

ALLOWED_EXTENSIONS = set(['png','jpg','jpeg','gif'])

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.',1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/new_story')
def story_new():
    if 'uuid' in session:
        return render_template('story_new.html')
    return redirect('/success')

# C
@app.route('/story/create', methods=['post'])
def story_create():

    # print(request.form)
    if 'file' not in request.files:
        flash('No file part')
        return redirect(request.url)
    file = request.files['file']
    if file.filename=='':
        flash('no image selected for uploading')
        return redirect(request.url)
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        print(filename)
        upload_result = upload(file)
        thumbnail_url1, options = cloudinary_url(upload_result['public_id'], format="jpg", crop="fill", width=100,
                                                     height=100)
        thumbnail_url2, options = cloudinary_url(upload_result['public_id'], format="jpg", crop="fill", width=200,
                                                     height=100, radius=20, effect="sepia")
        url=thumbnail_url1[-24:]
        print(url)
        data={
            'site':request.form['site'],
            'date':request.form['date'],
            'fish_saw':request.form['fish_saw'],
            'comment':request.form['comment'],
            'user_id':session['uuid'],
            'pic':url
        }
        # print(data)
        model_story.Story.create(data) 
        return redirect('/success')
    else:
        flash('Allowed image types are - png, jpg, jpeg, gif')
        return redirect(request.url)

# R
@app.route('/story/<int:id>')
def story_show(id):
    story=model_story.Story.get_one({'id':id})
    return render_template('story_show.html',story =story)

# U
@app.route('/story/edit/<int:id>')
def story_edit(id):
    
    story = model_story.Story.get_one({'id':id})
    if session['uuid']!=story.user_id:
        return redirect('/success')
    return render_template('story_edit.html', story=story)

@app.route('/story/<int:id>/update',methods=['post'])
def story_update(id):
    data={
        **request.form,
        'id':id
    }
    model_story.Story.update_one(data)
    return redirect('/story/<int:id>')

# D
@app.route('/story/delete/<int:id>')
def story_delete(id):
    model_story.Story.delete_one({'id':id})
    return redirect('/success')