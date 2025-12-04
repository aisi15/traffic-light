let userColor = prompt("Введите цвет фона (например: red, blue, pink):");
document.body.style.backgroundColor = userColor;

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
    alert("не тупите! у светофора только 3 цвета")
}
