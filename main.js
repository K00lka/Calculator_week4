function getElements(num){
    let values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.'];
    if (!values.includes(num)) {
        return;
    }
    let n = document.getElementById("mathElements");
    let lastChar = n.value.slice(-1);
    if (['+', '-', '*', '/', '.'].includes(num)) {
        if (lastChar === num) {
            return; 
        }
        if (num === '.' && /\.\d*$/.test(n.value)) {
            return;
        }
        if (n.value === '' && num !== '-') {
            return;
        }
    }
    if (num === '0') {
        // If the value is empty or last char is operator, allow a single zero
        if ((n.value === '' || ['+', '-', '*', '/', '.'].includes(lastChar))) {
            n.value += num;
            return;
        }
        // If last char is zero and it's at the start or after operator, prevent more zeros
        let parts = n.value.split(/[\+\-\*\/]/);
        let lastPart = parts[parts.length - 1];
        if (/^0+$/.test(lastPart)) {
            return;
        }
    }

    n.value += num;
    if (n.value.length > 10) {
        n.value = n.value.slice(0, 10) + '...';
    }
}



function clear() {
    let input = document.getElementById("mathElements");
    input.value = '';
}

function backspace() {
    let input = document.getElementById("mathElements");
    input.value = input.value.slice(0, -1);
}

function operate() {
    let input = document.getElementById('mathElements');
    let expr = input.value.replace(/x/g, '*');
    if (/\/\s*0(?!\d)/.test(expr)) {
        input.value = 'Are you 5?';
        return;
    }
    if (/^[0-9+\-*/.]+$/.test(expr)) {
        try {
            let result = Function('"use strict";return (' + expr + ')')();
            if (typeof result === "number" && !Number.isInteger(result)) {
                result = Number(result.toFixed(4));
            }
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
        backspace();
        event.preventDefault();
    } else if (key === 'Enter') {
        operate();
        event.preventDefault();   
    } else if (key === 'Escape') { } else if (key === 'Escape') {
        clear();        clear();
        event.preventDefault();        
    }
});





