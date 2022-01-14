from flask import Flask
import flask
from flask.templating import render_template

app = Flask(__name__)

@app.route('/')
@app.route('/<int:num_height>')
@app.route('/<int:num_height>/<int:num_wide>')
@app.route('/<int:num_height>/<int:num_wide>/<color1>')
@app.route('/<int:num_height>/<int:num_wide>/<color1>/<color2>')
def checkerboard(num_height=None,num_wide=None,color1=None,color2=None):
    if color2 ==None:
        color2="black"
        if color1==None:
            color1="red"
            if num_wide==None:
                num_wide=8
                if num_height==None:
                    num_height=8
                    return render_template('index.html',num_height=int(num_height/2),num_wide=int(num_wide/2),color1=color1,color2=color2)
                else:
                    return render_template('index.html',num_height=int(num_height/2),num_wide=int(num_wide/2),color1=color1,color2=color2)
            else:
                return render_template('index.html',num_height=int(num_height/2),num_wide=int(num_wide/2),color1=color1,color2=color2)
        else:
            return render_template('index.html',num_height=int(num_height/2),num_wide=int(num_wide/2),color1=color1,color2=color2)
    else:
        return render_template('index.html',num_height=int(num_height/2),num_wide=int(num_wide/2),color1=color1,color2=color2)



if __name__=="__main__":
    app.run(debug=True,port=5001)
