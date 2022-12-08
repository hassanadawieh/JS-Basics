
var pass = document.getElementById("password")
var conf = document.getElementById("confirmation");


document.querySelector("button").addEventListener("click" , function(){
    if(pass.value !== conf.value){
        pass.style.border ="3px solid red";
        conf.style.border = "3px solid red";
    }else{
        console.log("thank you fadi for your efforts")
    }
})