
let div = document.createElement('div');

let input = document.querySelector("input");

div.innerHtml ="hassan"

input.addEventListener("blur", function () {
div.innerHTML= input.value;
console.log(input.value)
});

document.body.appendChild(div)