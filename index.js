const input = document.querySelector('#input');
const output = document.querySelector('#output');


input.addEventListener('input', ()=>{
    let val = input.value; 
    let out = val*2.205;
    output.innerHTML = out;
})
 



 