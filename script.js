
let player = 'x',
    ar = ['','','','','','','','',''],
    done =  false,
    playerX = 0,
    playerO = 0

function tap(tile) {
    // displays X or O on the board and switches players' turn
    if  (ar[tile-1] == '' && done == false)  {
        if (player == 'x') {
            document.getElementsByClassName(tile)[0].innerHTML = 'X'
            player ='o'
            ar[tile-1] =  'x'
        }
        else if (player ==  'o') {
            document.getElementsByClassName(tile)[0].innerHTML = 'O'
            player = 'x'
            ar[tile-1] = 'o'
        }
    }

    // winning conditions
    for(let i=0; i < 9; i+=3)
        if(ar[i] ==  ar[i+1] && ar[i+1] == ar[i+2] && ar[i+2] == 'x')
            result('X')
    for(let i=0; i < 9; i+=3)
        if(ar[i] ==  ar[i+1] && ar[i+1] == ar[i+2] && ar[i+2] == 'o') 
            result('O')
    for(let i=0; i < 9; i++)
        if(ar[i] ==  ar[i+3] && ar[i+3] == ar[i+6] && ar[i+6] == 'x')
            result('X')
    for(let i=0; i < 9; i++)
        if(ar[i] ==  ar[i+3] && ar[i+3] == ar[i+6] && ar[i+6] == 'o')
            result('O')
    if(ar[0] == ar[4] && ar[4] == ar[8] && ar[8] == 'x')
            result('X')
    if(ar[0] == ar[4] && ar[4] == ar[8] && ar[8] == 'o')
            result('O')
    if(ar[2] == ar[4] && ar[4] == ar[6] && ar[6] == 'x')
            result('X')
    if(ar[2] == ar[4] && ar[4] == ar[6] && ar[6] == 'o')
            result('O')
    
    // displays winning player
    function result(player) {
        if(player == 'X') {
            playerX++     // increments X's score
            document.getElementsByClassName("x")[0].innerHTML = playerX     // displays X's score
        }
        if(player == 'O') {
            playerO++     // increments O's score
            document.getElementsByClassName("y")[0].innerHTML = playerO     // displays O's score
        }
        document.getElementsByClassName("win")[0].innerHTML = 'PLAYER ' + player + ' HAS WON!!!'
        done = true
    }
    // checks for drawing conditions
    function checkDraw() {
        if(ar.indexOf('') == -1 ) {
            document.getElementsByClassName("win")[0].innerHTML = "THE GAME IS TIED!!!"
            done = true
        }
    }
    checkDraw()
    
    console.log(playerX)
    // displays the play again button if the game is finished
    if(done == true) {
        document.getElementsByClassName("button")[0].innerHTML = 'PLAY AGAIN'
        return
    }
}
// resets the board
function wipe() {
    done = false
    for(let i=0; i<9; i++) {
            document.getElementsByClassName(i+1)[0].innerHTML = ''
            ar[i] = ''
    }
    document.getElementsByClassName("win")[0].innerHTML = ''
    document.getElementsByClassName("button")[0].innerHTML = ''
    player = 'x'
}