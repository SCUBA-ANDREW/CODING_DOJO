
from flask import Flask,request,redirect,session,render_template


app = Flask(__name__)
app.secret_key='ahhh'



@app.route('/')
def index():
    print("test")
    if 'visit_session' not in session:
        session['visit_session']=1
    else:
        session['visit_session']+=1
    if 'count_session' not in session:
        session['count_session']=1
    else:
        session['count_session']+=1
    return render_template('index.html',count_var=session['count_session'],vis_count=session['visit_session'])

@app.route('/count_page',methods=['POST'])
def count():
    print("test count page")
    # session['count_session'] =request.form['count_request']
    session['count_session']+=1
    return redirect("/")

@app.route('/destroy_session')
@app.route('/destroy_session', methods=['POST'])
def clear():
    print("test clear page")
    session.pop('count_session')
    return redirect("/")

@app.route('/input_count',methods=['POST'])
def input_count():
    print("test input count ")
    session['count_session'] =int(request.form['input_count'])+int(session['count_session']-1)
    return redirect("/")


if __name__ =="__main__":
    app.run(debug=True,port=5001)