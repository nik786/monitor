from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
import spacy




#1
nlp = spacy.blank("en")
#Flask initialization
app = Flask(__name__)
chatbot=ChatBot('Pythonscholar')

# Create a new trainer for the chatbot
trainer = ChatterBotCorpusTrainer(chatbot)

# Now let us train our bot with multiple corpus
#trainer.train("chatterbot.corpus.english.greetings",
#"chatterbot.corpus.english.conversations" )

trainer = ListTrainer(chatbot)

trainer.train([
    "What is your name?",
    "What is your number?"
])



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
