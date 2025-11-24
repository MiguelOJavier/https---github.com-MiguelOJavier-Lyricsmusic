const container = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener('click', async () => {
    const musica = tocarMusica("music.mp3");   
    container.innerHTML = "";
    autoScrollContainer();
    await escrever("----------------",300);
    await escrever("Don't you notice how",100);
    await escrever("₍ᐢ-(ｪ)-ᐢ₎",70);
    await escrever("I get quiet when there's no one",100);
    await escrever("else around?",150);
    await escrever("(´㉨`)",150);
    await escrever("Me and you and awkward silence",90);
    await escrever("Don't you dare",180);
    await escrever("look at me that way",130);
    await escrever("≽^•⩊•^≼",150);
    await escrever("I don't need reminders of how you don't feel the same",80);
    await escrever("",100);
    await escrever("Oh, the burning",160);
    await escrever("pain",140);
    await escrever("‧₊˚ ☁️⋅♡𓂃 ࣪ ִֶָ☾.",60);
    await escrever("Listening to you harp on 'bout some",70);
    await escrever("new soulmate",170);
    await escrever("(She's so perfect,)",100);
    await escrever("blah",70);
    await escrever("blah",70);
    await escrever("blah",70);
    await escrever("✩₊˚.⋆☾⋆⁺₊✧",70);
    await escrever("Oh, how I wish you'll wake up one day",130);
    await escrever("✩₊˚.⋆☾⋆⁺₊✧",70);
    await escrever("Run to me, confess your love, at least just let me say",80);
    await escrever("",100);
    await escrever("That when I talk to you, oh, Cupid walks right through",130);
    await escrever("And shoots an arrow through my heart",90);
    await escrever("˚₊ · ͟͟͞͞➳❥",140);
    await escrever("And I sound like a loon, but don't you feel it too?",100);
    await escrever("Confess I loved you from the start❤︎",130);
    await escrever("-----fim.",100); 
    musica.stop();
});

function escrever(texto, tempo) {
    return new Promise(resolve => {
        let index = 0;

        function animar() {
            if (index < texto.length) {
                container.innerHTML += texto.charAt(index);
                index++;

                autoScrollContainer();

                setTimeout(animar, tempo);
            } else {
                container.innerHTML += "<br>";

                autoScrollContainer(); 

                resolve();
            }
        }

        animar();
    });
}


function tocarMusica(url) {
    const audio = new Audio(url);
    audio.loop = false;     
    audio.volume = 0.5;   
    audio.play();

    return {
        audio,
        stop() {
            audio.pause();
            audio.currentTime = 0;
        }
    };
}
function autoScrollContainer() {
    container.scrollTop = container.scrollHeight;
}




