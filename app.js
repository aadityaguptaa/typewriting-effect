const text = ["websites", "android apps", "games"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let i = 1;
let time = 600;
let j = 0;
(function type() {


    if(index === 0){
        sleep(1000);
    }

    if(count === text.length){
        count = 0;
    }



    currentText = text[count];
    index = index + i;
    letter = currentText.slice(0, index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
        
    }

    setTimeout(type, time);



}());

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}