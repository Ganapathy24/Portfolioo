from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('portfolio.html')


for (int i =0;i++,++i;)