const btns = document.querySelectorAll('[data-set]');
const resultPlace=document.querySelector('.winner')
//player one plays with x ; the other player plays with o ;

class Game {

    checkPlayer(button, index) {
        const operation = temp / 2;
        const operationTest = operation.toString().split('.');
        if (operationTest[1]) {
            //this player playes with X;
            button.innerText = 'X'
            button.style.color = "lime";
            playerOneButtons.push(index)
        } else {
            //this player playes with O;
            button.innerText = 'O';
            button.style.color = 'red';
            playerTwoButtons.push(index);
        }
        temp++;
        button.disabled = true;
    }
    getWinner(btn) {
        let indexes;
        let isWinner;
        if(btn.innerText==='X'){
             indexes= playerOneButtons;
        }else{
            indexes=playerTwoButtons

        }
            indexes.forEach(index=>{
                for(let i=0;i<indexes.length;i++){
                    const deffrence= index-indexes[i];
                    const thirdIndex= index- 2*deffrence;
                   if(deffrence===1){
                    if(index===2||index===5||index===8){
                        if(this.isThere(indexes,thirdIndex)){
                            isWinner=true;
                        }
                    }
                   }else if(deffrence===2){
                        if(index===6){
                            if(this.isThere(indexes,thirdIndex)){
                                isWinner=true;
                            }
                        }
                   }else if(deffrence===3){
                        if(this.isThere(indexes,thirdIndex)){
                            isWinner=true;
                        }
                   }else if(deffrence===4){
                        if(this.isThere(indexes,thirdIndex)){
                            isWinner=true;
                        }
                   }

                }
            })
            if(isWinner){
                btns.forEach(btn=>{
                    btn.disabled=true
                })
                if(indexes===playerOneButtons){
                    return 'player1'
                }else{
                    return 'player2'
                } 
               
            }else{
                return false
            }
    }
    isThere(arr,index){
       const lastIndex= arr.find(item=>item===index)
       if(lastIndex!==undefined){
        console.log(lastIndex)
        return true
       }
    }
    displayWinner(winner){
        if(winner===false){
            resultPlace.innerText=`
       tie game`
        }else{
            resultPlace.innerText=`
        ${winner} has won the game`

        }
        
    }

}

let temp = 1;
let playerOneButtons = [];
let playerTwoButtons = [];
const game = new Game();
btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        game.checkPlayer(btn, index);
        if (playerOneButtons.length >= 3 || playerTwoButtons.length >= 3) {
            const winner =game.getWinner(btn);
            if(winner){
                game.displayWinner(winner)  
            }
          if( playerOneButtons.length>=5 && !winner){
            game.displayWinner(false)
          }
          
        }
    })
})