

document.querySelector("button").onclick = function () {

    let name = document.getElementById("name");
  let surname = document.getElementById("surname");
  let city = document.getElementById("city");

  if (confirm("Are you sure you want to save this thing into the database?")) {
    name.value = "";
    surname.value = "";
    city.value = "";

    
  } else {
  console.log("try again");
  }
}
  