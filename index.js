var box = document.querySelector(".box");

var tries = _.range(1,9);

console.log(tries);

const colors = ["red", "blue", "green", "pink"];

var item = document.createElement("div");
item.className = "item";
box.appendChild(item);

for (let i=0; i<=3; i++){
    let color = document.createElement("div");
    color.classList = `color  color${i}`;
    item.appendChild(color); 
}

let primercolor = document.querySelector(".color1");
console.log(primercolor);

primercolor.onclick = () => primercolor.style.backgroundColor = "red";

