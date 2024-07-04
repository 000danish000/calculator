const enteredNumber = document.getElementById('enterednumber');
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const equal = document.getElementById('equal');

let arr = [];
enteredNumber.setAttribute("disabled",true);

numbers.forEach(e => {
    e.addEventListener("click", () => {
        if (e.value == "clear") {
            enteredNumber.value = "";
            arr=[];
        }
        else {
            enteredNumber.value += e.value;
        }
    })
})
equal.addEventListener("click",()=>{ 
    enteredNumber.value = eval(enteredNumber.value.toString().replace(/,/g, "")) ;     
})