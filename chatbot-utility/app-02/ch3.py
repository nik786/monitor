from flask import Flask, render_template, request



#2

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')



@app.route('/get', methods=['GET','POST'])

#3
def chatbot_response():
    msg = request.form["msg"]
    response = chatbot.get_response(msg)
    return str(response)


if __name__ == "__main__":
 app.run()
