
                                                        // First Way

// const op = document.getElementById("input3");
// const clacBtn = document.getElementById("calc");
// function opresult(){
//         if(op.value == '+' ){
//     alert("It's Working +");
//     document.querySelector("h3").textContent = parseInt(document.getElementById("input1").value) +  parseInt(document.getElementById("input2").value); 
// } else if (op.value == '-'){
//     alert("It's Working -");
//     document.querySelector("h3").textContent =  parseInt(document.getElementById("input1").value) -  parseInt(document.getElementById("input2").value);
// }else if (op.value == '*'){
//     alert("It's Working *");
//     document.querySelector("h3").textContent =  parseInt(document.getElementById("input1").value) *  parseInt(document.getElementById("input2").value);
// }else if (op.value == '/'){
//     alert("It's Working /");
//     document.querySelector("h3").textContent =  parseInt(document.getElementById("input1").value) /  parseInt(document.getElementById("input2").value);
// }else{
//     alert("Error");
// }};
//  clacBtn.addEventListener("click",opresult);


                                                    // Second Way


// Declaring Some Variables
let op = document.getElementById("input3");
const clacBtn = document.getElementById("calc");
const resetBTN = document.getElementById("reset");

// The Calculator Function
function opresult(){
        if(op.value == '+' ){
    document.getElementById("theres").value = parseInt(document.getElementById("input1").value) +  parseInt(document.getElementById("input2").value); 
} else if (op.value == '-'){
    document.getElementById("theres").value =  parseInt(document.getElementById("input1").value) -  parseInt(document.getElementById("input2").value);
}else if (op.value == '*'){
    document.getElementById("theres").value =  parseInt(document.getElementById("input1").value) *  parseInt(document.getElementById("input2").value);
}else if (op.value == '/'){
    document.getElementById("theres").value =  parseInt(document.getElementById("input1").value) /  parseInt(document.getElementById("input2").value);
}else{
    document.getElementById("theres").value = "Please Enter A Number";
}};

//  The RESET Function
function resetPage(){
     document.getElementById("input1").value = "";
     document.getElementById("input2").value = "";
     op.value = "";
     document.getElementById("theres").value = "";
}

// The Event Listeners
clacBtn.addEventListener("click",opresult);
resetBTN.addEventListener("click", resetPage);