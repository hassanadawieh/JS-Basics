var image = document.querySelectorAll("img");

image.forEach(function (e) {
  e.addEventListener("mouseover", function (e) {
    e.target.src = `images/${e.target.id}_2.jpg`;
  });
});
image.forEach(function (e) {
  e.addEventListener("mouseout", function (e) {
    e.target.src = `images/${e.target.id}.jpg`;
  });
});