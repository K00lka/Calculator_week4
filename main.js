function getElements(num){
    let values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.'];
    if (!values.includes(num)) {
        return;
    }
    let n = document.getElementById("mathElements");
    n.value += num;
    if (n.value.length > 18) {
        n.value = n.value.slice(0, 18) + '...';
        
    }
}



function Clear() {
    let input = document.getElementById("mathElements");
    input.value = '';
}

function Backspace() {
    let input = document.getElementById("mathElements");
    input.value = input.value.slice(0, -1);
}

function Operate() {
    let input = document.getElementById('mathElements');
    let expr = input.value.replace(/x/g, '*');
    if (/\/\s*0(?!\d)/.test(expr)) {
        input.value = 'Are you 5?';
        return;
    }
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

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/'];
    if (validKeys.includes(key)) {
        getElements(key === '*' ? 'x' : key);
        event.preventDefault();
    } else if (key === 'Backspace') {
        Backspace();
        event.preventDefault();
    } else if (key === 'Enter') {
        Operate();
        event.preventDefault();   
    } else if (key === 'Escape') { } else if (key === 'Escape') {
        Clear();        Clear();
        event.preventDefault();        
    }



});  


