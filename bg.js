const body = document.querySelector("body");

const IMG_NUMBER = 1;

function imageLoaded(){

}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `${imgNumber+1}.png`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function getRandom(){
    const number = Math.floor(Math.random() *IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();