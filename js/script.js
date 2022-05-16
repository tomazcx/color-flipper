const btn = document.querySelector("button");
const body = document.querySelector("body");
const colorText = document.querySelector(".color");

const state1Element = document.querySelector(".state1");
const state2Element = document.querySelector(".state2");

let hexArray = "0123456789ABCDEF";

hexArray = Array.from(hexArray);
const colorArray = ["green", "red", "purple", "brown", "yellow", "orange", "blue", "wheat", "silver", "gray", "maroon", "fuchsia", "lime", "olive", "navy", "teal", "aqua", "aquamarine", "azure", "beige", "bisque", "blueviolet", "chartreuse", "chocolate", "coral", "crimson", "gold", "goldenrod", "hotpink", "indigo", "ivory", "peru", "plum", "tan", "teal", "violet", "whitesmoke", "turquoise", "tomato", "thistle", "steelblue", "springgreen", "slateblue", "sienna", "salmon"];

let pageState = 0;

const randomColor = () => {
    if (pageState == 1) {
        let hexColor = "";

        for (let i = 0; i < 6; i++) {
            console.log(Math.floor(Math.random() * hexArray.length));
            hexColor = hexColor + hexArray[Math.floor(Math.random() * hexArray.length)];
        }

        return "#" + hexColor;
    }
    if (pageState == 0) {
        return colorArray[Math.floor(Math.random() * colorArray.length)];
    }

}

state1Element.addEventListener("click", () => {
    pageState = 0;
})


state2Element.addEventListener("click", () => {
    pageState = 1;
})

btn.addEventListener("click", () => {
    const color = randomColor();
    colorText.textContent = color;
    body.style.backgroundColor = color;
})