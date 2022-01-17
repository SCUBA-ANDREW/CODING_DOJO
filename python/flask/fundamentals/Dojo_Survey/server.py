from flask import Flask,render_template,session,redirect,request

app=Flask(__name__)
app.secret_key="ohhh"

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/process', methods=['POST'])
def process():
    session['form'] = {**request.form}
    return redirect('/result')

@app.route('/result')
def result():
    print(session['form'])
    return render_template("result.html")




if __name__=="__main__":
    app.run(debug=True,port=5001)