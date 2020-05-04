// document.getElementById("heading").style.color = "purple";
// document.getElementById("heading").style.backgroundColor = "pink";

const myFirstHeading = document.getElementById("heading");
const button = document.getElementById("button");
const input = document.getElementById|("input");
const paragraphs = document.getElementsByTagName("hahaha");


paragraphs[0].style.color = "red";

for (let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "red";
}

myFirstHeading.addEventListener("click", () =>{
    myFirstHeading.style.color = "green";
})

button.addEventListener("click", () =>{
    // myFirstHeading.style.color = "yellow";
    myFirstHeading.style.color = input.value;
    paragraphs.style.color = input.value;
})