const boxes = document.querySelectorAll('.button');
const resetbutton = document.querySelector('#resetbutton');
let currentplayer = true;
let playerstatus = document.getElementById('playerStatus')

function disabledboxes(){
boxes.forEach(box =>box.disabled = true);
}


const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach( (box)=> {
    box.addEventListener("click" ,() =>
    { 
      console.log("Button Pressed");  
      if(currentplayer === true){
        box.innerHTML= 'X';
        currentplayer = false;
      }else{
        box.innerHTML = "O";
        currentplayer = true;
      }
      box.disabled = true;
      WinningPattern()     // if this is call inside the same function nothing will be shown 
    });
    
})

function WinningPattern(){

    for( let pattern of winpattern){
        console.log(pattern[0],pattern[1],pattern[2]);
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;
        if (position1 != '' && position2 != '' && position3 != ''){
          if( position1 === position2 && position2 === position3){
            if(position1 == 'O'){
              playerstatus.innerHTML = `<i>The <u>player O</u> is the Winner</i>`
              disabledboxes()
            }else{
              playerstatus.innerHTML = `<i>The <u>Player X</u> is the Winner</i>`
              disabledboxes()
            }
          }
          
        }

      }
}

function resetgame (){
  resetbutton.addEventListener('click', ()=> {
    boxes.forEach((box) => {box.innerText = null;box.disabled = false;});
    
    playerstatus.innerHTML = "";
    currentplayer = "";

  })
}
resetgame()
