let mountain1 = document.getElementById("mountain1");
let mountain2 = document.getElementById("mountain2");
let text = document.getElementById("text");
let background = document.getElementById("background");
let cloud = document.getElementById("cloud");

window.addEventListener('scroll', () => {
  var value = window.scrollY;
  
  background.style.top = `${value * 0.7}px`;
  mountain1.style.bottom = `${1000 * -0.04}%`;
  mountain2.style.bottom = `${1000 * -0.05}%`;
  text.style.top = `${value * 2}px`;
  cloud.style.bottom = `${value * 0.004}px`;
  cloud.style.left = `${value * 0.1}px`;
})