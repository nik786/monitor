// bot fonctionnement 
const bot = function () {
    //selectionne d'éléments htlm par l'id
    const easychat = document.getElementById('easychat');
    const container = document.getElementById('easychat-container')
    const inner = document.getElementById('easychat-inner')
    let restartButton = null;
    //sleep function
    const sleep = function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
    //Srcroll dans l'interface
    const scrollContainer = function () {
        inner.scrollTop = inner.scrollHeight;
    };

    const insertNewChatItem = function (elem) {
        easychat.appendChild(elem);
        scrollContainer();
        //debugger;
        elem.classList.add('activated');
    };
    //créattion de la div pour la réponse
    const printResponse = async function (step) {
        const response = document.createElement('div');
        //response.classList.add('chat-response');
        response.innerHTML = step.text;
        insertNewChatItem(response);

        await sleep(1500);

        if (step.options) {
            const choices = document.createElement('div');
            choices.classList.add('choices');
            step.options.forEach(function (option) {
                const button = document.createElement(option.url ? 'a' : 'button');
                button.classList.add('choice');
                button.innerHTML = option.text;
                if (option.url) {
                    button.href = option.url;
                } else {
                    button.dataset.next = option.next;
                }
                choices.appendChild(button);
            });
            insertNewChatItem(choices);
        } else if (step.next) {
            printResponse(chat[step.next]);
        }
    };
    //création de la div avec la class chat-ask
    const printChoice = function (choice) {
        const choiceElem = document.createElement('div');
        choiceElem.classList.add('chat-ask');
        choiceElem.innerHTML = choice.innerHTML;
        insertNewChatItem(choiceElem);
    };
    //désactive tout les choix
    const disableAllChoices = function () {
        const choices = document.querySelectorAll('.choice');
        choices.forEach(function (choice) {
            choice.disabled = 'disabled';
        });
        // return;
    };
    //choix
    const handleChoice = async function (e) {

        if (!e.target.classList.contains('choice') || e.target.tagName === 'A') {
            //
            const button = e.target.closest('#easychat-container .choice');

            if (button !== null) {
                button.click();
            }

            return;
        }
        e.preventDefault();
        const choice = e.target;

        disableAllChoices();

        printChoice(choice);
        scrollContainer();

        await sleep(1500);

        if (choice.dataset.next) {
            printResponse(chat[choice.dataset.next]);
        }
        // Nécessité de désactiver les boutons ici pour éviter les choix multiples
    };
    //démarre la conversation
    const startConversation = function () {
        printResponse(chat[1]);
    }
    //relance la conversation
    const handleRestart = function () {
        startConversation();
    }
    //handleChoice
    const init = function () {
        container.addEventListener('click', handleChoice);
       
       
        startConversation();
    };
    init();
};

bot();
//javascript pour la bull
document.getElementById("chatbot_toggle").onclick = function () {
    if (document.getElementById("chatbot").classList.contains("collapsed")) {
        document.getElementById("chatbot").classList.remove("collapsed")
        document.getElementById("chatbot_toggle").children[0].style.display = "none"
        document.getElementById("chatbot_toggle").children[1].style.display = ""
    }
    else {
        document.getElementById("chatbot").classList.add("collapsed")
        document.getElementById("chatbot_toggle").children[0].style.display = ""
        document.getElementById("chatbot_toggle").children[1].style.display = "none"
    }
};


