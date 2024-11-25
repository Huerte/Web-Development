let player1 = [];
let player2 = [];
let p1turn = true;

const winningCombinations = [
    [1, 2, 3], // Top row
    [4, 5, 6], // Middle row
    [7, 8, 9], // Bottom row
    [1, 4, 7], // Left column
    [2, 5, 8], // Middle column
    [3, 6, 9], // Right column
    [1, 5, 9], // Main diagonal
    [3, 5, 7]  // Anti-diagonal
];


function clickedButton(btn, element){
    if(btn.textContent !== ""){
        return;
    }

    if (p1turn){
        btn.textContent = "X";
        player1.push(element);
    } else {
        btn.textContent = "O";
        player2.push(element);
    }

    p1turn = !p1turn;

    if (winner()){
        location.reload();
    }
    checkTie()
}

function checkTie(){
    if (((player1.length + player2.length) == 9) && !winner()){
        location.reload();
    }
}

function winner(){
    for (i = 0; i < winningCombinations.length; i++){
        if (isEqual(winningCombinations[i], player1)){
            console.log('player 1 win');
            return true;
        } else if (isEqual(winningCombinations[i], player2)){
            console.log('player 2 win');
            return true;
        }
    }
    return false;
}

function isEqual(list1, list2){
    if (list1.length != list2.length){
        return false;
    }
    let sameCount = 0;
    for (let i = 0; i < list1.length; i++){
        if (list2.includes(list1[i])){
            sameCount++;
        }
    }

    return sameCount == list1.length;
}