let Input=document.getElementById('inputBox')
let buttons = document.querySelectorAll('button');

let string=" ";
let arr = Array.from(buttons);
arr.forEach(buttons=>{
    buttons.addEventListener('click',(e)=>{
        if(e.target.innerHTML== '='){
            string =eval(string);
        Input.value=string;
        }

        else if(e.target.innerHTML=='AC'){
            string=" ";
            Input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            Input.value=string;
        }

        else{
        string+=e.target.innerHTML;
        Input.value=string;
        }

    })
})