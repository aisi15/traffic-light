let bgColor = prompt("Введите цвет фона (например: red, blue, pink)");
let title = document.getElementById("title");

document.body.style.backgroundColor = bgColor;

if (document.body.style.backgroundColor !== "") {
  title.innerText = "Фон изменён на " + bgColor;
} else {
  title.innerText = "Ошибка! Введите корректный цвет";
}


let color = prompt("Введите цвет светофора на англ (red, yellow, green)");

let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

if (color === "red") {
    red.style.background = "red";
    red.innerText = "STOP";
}
else if (color === "yellow") {
    yellow.style.background = "yellow";
    yellow.style.color = "black"
    yellow.innerText = "WAIT";
}
else if (color === "green") {
    green.style.background = "green";
    green.innerText = "GO";
}
else {
    alert("Ошибка! У светофора только 3 цвета")
}
