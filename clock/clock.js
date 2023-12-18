const WEEK = ["SUN", "MON", "TUES", "WED", "THRU", "FRI", "SAT"];

function updateTime() {
  var now = new Date();

  document.getElementById("time").innerText =
    zeroPadding(now.getHours(), 2) +
    ":" +
    zeroPadding(now.getMinutes(), 2) +
    ":" +
    zeroPadding(now.getSeconds(), 2);

  document.getElementById("date").innerText =
    zeroPadding(now.getDate(), 2) +
    "-" +
    zeroPadding(now.getMonth() + 1, 2) +
    "-" +
    now.getFullYear() +
    "  " +
    WEEK[now.getDay()];
}

updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit) {
  return String(num).padStart(digit, "0");
}
