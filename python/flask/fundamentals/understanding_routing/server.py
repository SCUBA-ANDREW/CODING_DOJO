from flask import Flask  # Import Flask to allow us to create our app

app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response
# localhost:5000/ - have it say "Hello World!" - put 5001 as port seens i'm using newer mac

# import statements, maybe some other routes

# localhost:5000/dojo - have it say "Dojo!"
@app.route('/dojo')
def dojo():
    return "Dojo!"
    
@app.route('/success')
def success():
    return "success"
# Create one url pattern and function that can handle the following examples:
@app.route('/say/<randomstuff>')
def say_something(randomstuff):
    return "Hi, "+str(randomstuff)
# Create one url pattern and function that can handle the following examples (HINT: int() will come in handy! For example int("35") returns 35):
@app.route('/repeat/<rpttime>/<words>')
def repeat(rpttime, words):
    if type(int(rpttime))==int:
        return int(rpttime)*str(words)
    else:
        return "we need int"


@app.route('/hello/<name>') # for a route '/hello/____' anything after '/hello/' gets passed as a variable 'name'
def hello(name):
    print(name)
    return "Hello, " + name

@app.route('/users/<username>/<id>') # for a route '/users/____/____', two parameters in the url get passed as username and id
def show_user_profile(username, id):
    print(username)
    print(id)
    return "username: " + username + ", id: " + id


# app.run(debug=True) should be the very last statement! 
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True,port=5001)    # Run the app in debug mode.
