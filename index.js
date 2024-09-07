console.log("hello World!");
// const btn7 = document.getElementById("value-7");
var val;
const op = document.getElementById("input-ele");


document.querySelectorAll(".btn-style").forEach(button =>{
    button.addEventListener('click', () =>{
        val = button.value;
        console.log(val);
        if(val !== "C" && val !== "="){
            op.innerText = val;
        }
        if(val === "C"){
            input1.value = 0;
            input2.value = 0;
        }
        if(val === "="){
            let input1Val = input1.value;
            let input2Val = input2.value;
            let result;
            const ans = document.getElementById("ans");
            if(op === "+"){
                result = input1Val + input2Val;
                ans.innerText =  result;
            }
        }
    });
});

const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");


