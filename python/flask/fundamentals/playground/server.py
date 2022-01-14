from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def welcome():
    return "welcome to playground"

@app.route('/play')
@app.route('/play/<int:times>')
@app.route('/play/<int:times>/<color>')
def index(times=None, color=None):
    if color ==None:
        color ="#00FFFF"
        if times==None:
            times=3
            return render_template("index.html",times=times,color=color)
        else:
            return render_template("index.html",times=times,color =color)
    else:
        return render_template("index.html",times=times,color =color)




if __name__=="__main__":
    app.run(debug=True,port=5001)