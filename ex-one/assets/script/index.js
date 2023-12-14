// Elementos del DOM
const car = document.querySelector("img")
console.log(car)
// Variables
let state = false
// Funciones

// Eventos
car.addEventListener("click", () => {
    !state
    ? ((car.style.border = "2px dashed red"),(state = true))
    : ((car.style.border = "none"),(state = false))
 })

