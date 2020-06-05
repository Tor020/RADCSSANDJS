  window.onload = document.location.hash='openModal';

  class Ele {
    constructor(element, id, _class) {
      this.element = element;
      this.id = id;
      this.class = _class;
    }
    getID() {
      return document.getElementById(`${this.id}`);
    }
    chngText(text) {
      document.getElementById(`${this.id}`).innerHTML = `${text}`;
    }
    changePos(top, left) {
      document.getElementById(`${this.id}`).style.top = `${top}px`;
      document.getElementById(`${this.id}`).style.left = `${left}px`;
    }
  }
  class Utility {
    constructor() {
      this.num1_10 = Math.floor(Math.random() * 10);
      this.num1_20 = Math.floor(Math.random() * 20);
      this.num1_50 = Math.floor(Math.random() * 50);
      this.num1_100 = Math.floor(Math.random() * 100);
      this.randPageHeight = Math.floor(Math.random() * window.innerHeight);
      this.randPageWidth = Math.floor(Math.random() * window.innerWidth);
    }
  }

function cssVariableStyles(ele){
// requires the element class without a period for selector

ಠ(window.getComputedStyle(document.querySelector(`.${ele}`)).getPropertyValue('--m1Translate'))
ಠ(window.getComputedStyle(document.querySelector(`.${ele}`)).getPropertyValue('--m1Rotate'))
ಠ(window.getComputedStyle(document.querySelector(`.${ele}`)).getPropertyValue('--m2Translate'))
ಠ(window.getComputedStyle(document.querySelector(`.${ele}`)).getPropertyValue('--m2Rotate'))





}



function ಠ(arg){
  return console.log(arg)
}


  //Instantiation
  let audio = new Ele('audio', 'player', 'null');
  let dirBtn = new Ele('button', 'btn-return', 'btn');
  let moveMarquee = new Ele('div', 'marqueeMoveOne', 'marquee')


  let randCent = new Utility();
  //Audio
  // let ap = audio.getID();
  // ap.volume = 1;
  let counter = 0;
  let myBtn = dirBtn.getID();
  dirBtn.changePos(window.innerHeight / 2, window.innerWidth / 2);

  



(function(window, document) {


let customModalMovement = document.querySelector('.one');
//  console.log(customModalMovement.style.setProperty('--m1Translate', ))

cssVariableStyles('one')




let randPageHeight = Math.floor(Math.random() * window.innerHeight);
let randPageWidth = Math.floor(Math.random() * window.innerWidth-300);

moveMarquee.changePos(randPageHeight, randPageWidth)




})(window, document);



setInterval(() => {
  
let randPageHeight = Math.floor(Math.random() * window.innerHeight);
let randPageWidth = Math.floor(Math.random() * window.innerWidth-300);

moveMarquee.changePos(randPageHeight, randPageWidth)

}, 4000);



  function btnmove() {
    let rand = new Utility();

    dirBtn.changePos(rand.randPageWidth / 2, rand.randPageHeight / 2)
    counter++ ; 

  if (counter === 4) {
      dirBtn.chngText('Still under construction check back soon!')
      this.removeEventListener('mousemove', btnmove)
    }

  else if (counter === 3){
      document.body.style.backgroundColor = "#0cffae";
    }
  else if (counter === 2){
      document.body.style.backgroundColor = "#f902d0"
    }
  else if (counter === 1){
      document.body.style.backgroundColor = "#5cf901"
    }
  }

  myBtn.addEventListener('mousemove', btnmove)

