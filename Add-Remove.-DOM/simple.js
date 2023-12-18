var a = document.querySelector("h5");
var addbtn = document.querySelector("#btn");

var check = 0;

addbtn.addEventListener("click", () => {
  if (check == 0) {
    a.innerHTML = "Friend";
    a.style.color = "green";
    addbtn.innerHTML = "Remove Friend";
    check = 1;
  } else {
    a.innerHTML = "Strenger";
    a.style.color = "red";
    addbtn.innerHTML = "Add Friend";
    check = 0;
  }
});
