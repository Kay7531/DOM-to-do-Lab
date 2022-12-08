// CACHE ELEMENT REFRENCES
const inputElement = document.querySelector("#task")
const btnElement = document.querySelector("#submit-button")
const ulElement = document.querySelector("#todo-list")

btnElement.addEventListener('click',function(evt){
    const li = document.createElement("li")
    li.textContent = inputElement.value
    inputElement.value = ''
    ulElement.appendChild(li)
})