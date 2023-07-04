// JavaScript (JS)

let input = document.getElementById('value');
let output = document.getElementById('result');
let buttons = document.querySelectorAll('button');
let str = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (ev) =>{
        // Result 
        if(ev.target.innerHTML == '='){
            str = eval(str);
            output.value = str;
        }
        // All Clear 
        else if(ev.target.innerHTML == 'AC'){
            str = "";
            input.value = str;
            output.value = str;

        }
        // Backspace
        else if(ev.target.innerHTML == 'Back'){
            str = str.substring(0, str.length-1);
            input.value = str;
        }
        else{
            str += ev.target.innerHTML;
            input.value = str;
        }
    })
})