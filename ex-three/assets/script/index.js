// Elementos del DOM
const pone = document.getElementById("one").value
const ptwo = document.getElementById("two").value  
const pthree = document.getElementById("three").value 
console.log(pone, ptwo, pthree)
// Variables

// Funciones
function verify(){
    const pone = document.getElementById("one").value
    const ptwo = document.getElementById("two").value  
    const pthree = document.getElementById("three").value 
    const message = document.getElementById("text")
    const package = pone + ptwo + pthree
    if (package == 911) {
        message.innerHTML = "Password one correct"
    } else if (package == 714) {
        message.innerHTML = "Password two correct"
    } else {
        message.innerHTML = "Password incorrect"
    }  
}

// Eventos
