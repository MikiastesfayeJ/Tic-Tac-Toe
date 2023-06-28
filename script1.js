let player = 'x',
    ar = ['','','','','','','','',''],
    playerX = 0,
    playerO = 0

function tap(tile) {
    turn(tile)
    //check = checkWinOrDraw()
    display(player)
    wipe()
}

// displays X or O on the board and switches players' turn   
function turn(tile) {
    if (ar[tile-1] == '' && done == false)  {
        if (player == 'x') {
            document.getElementsByClassName(tile)[0].innerHTML = 'X'
            player = 'o'
            ar[tile-1] =  'x'
        }
        else if (player ==  'o') {
            document.getElementsByClassName(tile)[0].innerHTML = 'O'
            player = 'x'
            ar[tile-1] = 'o'
        }
    }
}

// winning or drawing conditions
function checkWinOrDraw() {
    done = ''
    for(let i=0; i < 9; i+=3)
        if(ar[i] ==  ar[i+1] && ar[i+1] == ar[i+2] && ar[i+2] == 'x')
            done = 'win'
    for(let i=0; i < 9; i+=3)
        if(ar[i] ==  ar[i+1] && ar[i+1] == ar[i+2] && ar[i+2] == 'o') 
            done = 'win'
    for(let i=0; i < 9; i++)
        if(ar[i] ==  ar[i+3] && ar[i+3] == ar[i+6] && ar[i+6] == 'x')
            done = 'win'
    for(let i=0; i < 9; i++)
        if(ar[i] ==  ar[i+3] && ar[i+3] == ar[i+6] && ar[i+6] == 'o')
            done = 'win'
    if(ar[0] == ar[4] && ar[4] == ar[8] && ar[8] == 'x')
            done = 'win'
    if(ar[0] == ar[4] && ar[4] == ar[8] && ar[8] == 'o')
            done = 'win'
    if(ar[2] == ar[4] && ar[4] == ar[6] && ar[6] == 'x')
            done = 'win'
    if(ar[2] == ar[4] && ar[4] == ar[6] && ar[6] == 'o')
            done = 'win'
    // drawing condition
    if(ar.indexOf('') == -1 )
        done = 'draw'
    return done
}

function display(player = 'draw') {
    document.getElementsByClassName("win")[0].innerHTML = 'PLAYER ' + player + ' HAS WON!!!'
}