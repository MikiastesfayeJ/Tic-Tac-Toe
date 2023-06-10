
let player = 'x',
    ar = ['','','','','','','','',''],
    done =  false
function tap(tile) {
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
    console.log(ar)
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
    checkDraw()
    function result(player) {
        document.getElementsByClassName("win")[0].innerHTML = 'PLAYER ' + player + ' HAS WON!!!'
        done = true
    }
}
function wipe() {
    done = false
    for(let i=0; i<9; i++) {
            document.getElementsByClassName(i+1)[0].innerHTML = ''
            ar[i] = ''
    }
    document.getElementsByClassName("win")[0].innerHTML = ''
    console.log(ar)
}
function checkDraw() {
    if(ar.indexOf('') == -1 )
        document.getElementsByClassName("win")[0].innerHTML = "THE GAME IS TIED!!!"
}