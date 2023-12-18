var a = document.getElementById("bulb");
var b = document.querySelector("button");

var flag = 0;

b.addEventListener("click", () => {
  if (flag == 0) {
    a.style.backgroundColor = "yellow";
    b.innerHTML = "OFF";
    console.log("clicked");
    flag = 1;
  } else {
    a.style.backgroundColor = "white";
    b.innerHTML = "ON";
    console.log("off");
    flag = 0;
  }
});
