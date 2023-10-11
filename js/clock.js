let Name = prompt("Adınız");
let NowDate = new Date();

let NameDOM = document.querySelector("#myName");
NameDOM.innerHTML = Name;

let day;
switch (NowDate.getDay()) {
  case 0:
    day = "Pazar";
    break;
  case 1:
    day = "Pazartesi";
    break;
  case 2:
    day = "Salı";
    break;
  case 3:
    day = "Çarşamba";
    break;
  case 4:
    day = "Perşembe";
    break;
  case 5:
    day = "Cuma";
    break;
  case 6:
    day = "Cumartesi";
    break;
}

function DateNow() {
  let NowDate = new Date();
  let date;
  date = `${NowDate.getHours()}:${NowDate.getMinutes()}:${NowDate.getSeconds()} ${day}`;
  document.querySelector("#myClock").innerHTML = date;
}

setInterval(DateNow, 1000);

