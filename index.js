console.log("hello World!");
// const btn7 = document.getElementById("value-7");


document.querySelectorAll(".btn-style").forEach(button =>{
    button.addEventListener('click', () =>{
        var val = button.value;
    });
});

const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");

console.log(input1.value + val + input2.value);

