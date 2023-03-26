let main = document.getElementById("main");
let imgURL = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";

let img = document.createElement("img");
img.src = imgURL;
img.style = "width: 50%";
main.appendChild(img)
console.log(img);