var colors = document.querySelectorAll(".color")



colors.forEach(function (e) {
  e.addEventListener("click", function (e) {
    console.log(e.target.className)
    if (e.target.className == "color green") {
      document.querySelector("p").style.color ="green"

    } else if (e.target.className == "color red") {
      document.querySelector("p").style.color ="red"
    }else{
        document.querySelector("p").style.color = "blue";
    }
    });
});

//    let color = e.getAttribute("class").split(" ")[1];
//    p.style = `color: ${color}`;