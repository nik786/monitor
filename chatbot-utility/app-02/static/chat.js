// crée la conversation

const param11 = new Date();
const param22 = param11.getHours() + ':' + param11.getMinutes();
const chat = {
    1: {
        text: '<b style="font-size:12px;color:#000;">Plato</b><div style="display:flex;"><div><img src="static/img/bot-mini.png" style="width:25px;height:25px;margin-left:5px;"/></div><div class="chat-response activated">Hi. My name is plato , How How can I help you? </div></div>',
        options: [
            {
                text: "<strong>Bike+ !</strong>",
                next: 2
            },
            {
                text: "<strong>Bike2+ !</strong>",
                next: 2
            },

            


            
        ]
    },
   


    2 : {
        text: '<b style="font-size:12px;color:#000;">Plato</b><div style="display:flex;"><div><img src="static/img/bot-mini.png" style="width:25px;height:25px;margin-left:5px;"/></div><div class="chat-response activated"> Before we get started  whats the best email address so that we can better assist you?! !</div>'+param22+'</div>',
    },
    3: {
        text: '<b style="font-size:12px;color:#000;">Plato</b><div style="display:flex;"><div><img src="static/img/bot-mini.png" style="width:25px;height:25px;margin-left:5px;"/></div><div class="chat-response activated">Good!! You?</div>'+param22+'</div>',
    },
};