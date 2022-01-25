from flask_app import app
from flask_app.controllers import controller_route,controller_ninja,controller_dojo
if __name__ == '__main__':
    app.run(debug=True, port=5001)