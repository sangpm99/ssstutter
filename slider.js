const myslide = document.querySelectorAll('.slider-box');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide() {
    counter += 1;
    sliderfun(counter);
}
function plusslide(n) {
    counter += n;
    sliderfun(counter);
    resetTimer();
}
function currentslide(n) {
    counter = n;
    sliderfun(counter);
    resetTimer();
}
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}
function sliderfun(n){
    let i;
    for (i = 0; i<myslide.length; i++) {
        myslide[i].style.display = "none";
    }
    if(n>myslide.length){
        counter = 1;
    }
    if(n<1) {
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    
}