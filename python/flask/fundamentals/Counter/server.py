import re
from flask import Flask,request,redirect,session
from flask.templating import render_template

app = Flask(__name__)

@app.route('/')
def homepage(count=0):
    return render_template('index.html',count=count)

@app.route('/destroy_session')
def clear():
    # count=0
    return redirect("/")


if __name__ =="__main__":
    app.run(debug=True,port=5001)