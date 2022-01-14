from abc import update_abstractmethods
from flask import Flask
from flask.templating import render_template

app = Flask(__name__)

@app.route('/')
def home_page():
    users = [
        {'first_name' : 'Michael', 'last_name' : 'Choi'},
        {'first_name' : 'John', 'last_name' : 'Supsupin'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
        ]
    Length=len(users)

    return render_template('index.html',users=users,Length=int(Length))



if __name__=="__main__":
    app.run(debug=True, port=5001)