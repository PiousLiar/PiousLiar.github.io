// first task
const firstElement = document.getElementById("FirstElement")
const secondElement = document.querySelector("#SecondElement")
firstElement.addEventListener("click", function(){
    if(!firstElement.classList.contains('active'))
        firstElement.classList.add('active')
    else
        firstElement.classList.remove('active')
});

secondElement.addEventListener("click", function(){
    if(!secondElement.classList.contains('active'))
        secondElement.classList.add('active')
    else
        secondElement.classList.remove('active')
});

// second task
const addButton = document.getElementById("add")
const zoomInButton = document.getElementById("zoomIn")
const zoomOutButton = document.getElementById("zoomOut")
const deleteButton = document.getElementById("delete")
const img = document.querySelector("#img")
let size = 850

addButton.addEventListener("click", function(){
    const place = document.querySelector("#img-place")
    place.appendChild(img)
})

zoomInButton.addEventListener("click", function(){
    if(document.getElementsByClassName("img-size")[0]){
        size += 50
        document.getElementsByClassName("img-size")[0].style.width = size + "px"
    }
})

zoomOutButton.addEventListener("click", function(){
    if(document.getElementsByClassName("img-size")[0]){
        size -= 50
        document.getElementsByClassName("img-size")[0].style.width = size + "px"
    }
})

deleteButton.addEventListener("click", function(){
    const place = document.querySelector("#img-place")
    place.removeChild(img)
})
