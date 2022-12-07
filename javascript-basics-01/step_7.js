
document.getElementById("validate").onclick = function () {
  var shoe_size = document.getElementById("shoe_size").value;
  var year_birth = document.getElementById("year").value;
  alert(((shoe_size * 2)+ 5 ) * 50 -year_birth+1766)
};