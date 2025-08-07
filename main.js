function getElements(num){
    let n = document.getElementById("mathElements");
    n.value += num;
}



function Clear() {
    let input = document.getElementById("mathElements");
    input.value = '';
}

function Operate() {
    let input = document.getElementById('mathElements');
    let expr = input.value.replace(/x/g, '*');
    if (/^[0-9+\-*/.]+$/.test(expr)) {
        try {
            let result = Function('"use strict";return (' + expr + ')')();
            input.value = result;
        } catch {
            input.value = 'Whoopsie!';
        }
    } else {
        input.value = 'Whoopsie!';
    }
}

document.onkeydown('keadown', function(event) {
    const key = event.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/'];
    if (validKeys.includes(key)) {
        getElements(key === '*' ? 'x' : key);
    } else if (key  === 'equals') {
        Operate();
    } else if (key === 'clear') {
        Clear();
    }

});

