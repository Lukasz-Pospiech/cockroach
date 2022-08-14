//LOCK SCREEN ORIENTATION ON PHONES (ONLY PORTRAIT ORIENTATION) 
// screen.orientation.lock("portrait");
// screen.orientation.lock("portrait-primary");

//Dealing with viewport height issue (when browser address bar hides the viewport gets higher - we don't want that)
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//MENU BIG FACE JAW DROP
function dropBigFace() {
    const container = document.getElementById("facesContainer");
    const containerOpacity = window.getComputedStyle(container).opacity;
    const bigFace = document.getElementById("bigFace");

    if (containerOpacity === "0") {
        container.style.visibility = "visible";
        container.style.opacity = 1;
        bigFace.className = "bigFaceAnimation";
    }
    else {
        container.style.opacity = "0";
        setTimeout(reset, 600);
        function reset() {
            container.style.visibility = "hidden";
            bigFace.className = "";
            resetGIF("bigFace");
        }
    }

    function resetGIF(id) {
        const gif = document.getElementById(id);
        const imageURL = gif.src;
        gif.src = "";
        gif.src = imageURL;
    }
}

//LAPTOP TYPING EFFECT
function typeWriterEffect() {
    const text1 = "Hello World! My name is Lukasz and I created this website. From scratch. Using only raw HTML/CSS/JS (no libraries nor frameworks).";
    const text2 = "This webpage doesn\’t serve any particular purpose. I created it for fun… improving my coding skills by the way.";
    const text3 = "As you have surely noticed by now, this page contains some bugs… Well I\’m still learning the very basics of web development.";
    const text4 = "Bugs are bugging me in Thailand where I currently live…. I have to deal with bugs in my bungalow and bugs in my code.";
    const text5 = "Fortunately, I can control all the creatures on my page. I\’m the puppet master here, they will do as I say!";
    const text6 = "Don\’t you believe me? Check this out…"; 

    function changeSentence(text) {
        let lapContainer = document.getElementById("laptopContainer");
        let gif = `<img id="laptopGif" src="typing.gif" alt="typing">`;
        let pic = `<img id="laptopPic" src="laptopPic.jpg" alt="laptop">`;
        let empty = `<div id="laptopScreenEmpty"></div>`;
        lapContainer.innerHTML = gif + empty; 
        let lapScreenEmpty = document.getElementById("laptopScreenEmpty");
        let i = 0; 
        (function typeWriter() {
            if (i < text.length) {
              lapScreenEmpty.innerHTML += text.charAt(i);
              i++;
              setTimeout(typeWriter, 100);
            } 
        })();
        setTimeout(freezeHands, (text.length*100 + 1000));
        function freezeHands() {
            lapContainer.innerHTML = pic + `<div id="laptopScreen">${text}</div>`;
        }
    }
    setTimeout(changeSentence, 200, text1);
    setTimeout(changeSentence, text1.length*100 + 1000 + 5000, text2);
    setTimeout(changeSentence, text1.length*100 + 1000 + 5000 + text2.length*100 + 1000 + 5000, text3);
    setTimeout(changeSentence, text1.length*100 + 1000 + 5000 + text2.length*100 + 1000 + 5000 + text3.length*100 + 1000 + 5000, text4);
    setTimeout(changeSentence, text1.length*100 + 1000 + 5000 + text2.length*100 + 1000 + 5000 + text3.length*100 + 1000 + 5000 + text4.length*100 + 1000 + 5000, text5);
    setTimeout(changeSentence, text1.length*100 + 1000 + 5000 + text2.length*100 + 1000 + 5000 + text3.length*100 + 1000 + 5000 + text4.length*100 + 1000 + 5000 + text5.length*100 + 1000 + 5000, text6);

}


