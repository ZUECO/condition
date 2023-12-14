// Elementos del DOM

// Variables

// Funciones
function statement(){
    const one = parseInt(document.getElementById("one").value)  
    const two = parseInt(document.getElementById("two").value)
    const three = parseInt(document.getElementById("three").value)
    const message = document.getElementById("result")
    sum = one + two + three
    if (sum <= 10) {
        message.innerHTML = "Llevas " + sum + " cars"
    } else {
        message.innerHTML = "Llevas demasiados cars"
    }
}
// Eventos
