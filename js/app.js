// CACHE ELEMENT REFRENCES
const inputElement = document.querySelector("#task")
const addBtnElement = document.getElementById("submit-button")
const ulElement = document.querySelector("#todo-list")
const resetBtnElement = document.getElementById("reset-button")



addBtnElement.addEventListener('click',function(evt){
    const li = document.createElement("li")
    li.textContent = inputElement.value
    inputElement.value = ''
    ulElement.appendChild(li)
})

resetBtnElement.addEventListener('click', function(evt){
    ulElement.textContent = ''
})


ulElement.addEventListener('click', function(evt){
   ulElement.textContent = ""
})
