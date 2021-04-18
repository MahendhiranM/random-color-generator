const btn = document.querySelector(".btn");
const cards = document.querySelectorAll(".color__card");
const appBody = document.querySelector(".app__body");

// convetors
const RGBToHex = function (rgb) {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.substr(4).split(")")[0].split(sep);
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;
    return "#" + r + g + b;
};

const randomNum = function (max = 255, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomColorGenerator = function () {
    return `rgb(${randomNum()},${randomNum()},${randomNum()})`;
};

const UI = function () {
    cards.forEach((el) => {
        const color = RGBToHex(randomColorGenerator());
        el.children[0].style.backgroundColor = color;
        el.children[1].textContent = color;
        el.children[2].children[0].style.color = "black";
    });
};

UI();

btn.addEventListener("click", function () {
    UI();
});

appBody.addEventListener("click", function (e) {
    if (e.target.parentElement.className === "card__icon") {
        e.target.style.color = "green";
        e.target.parentElement.style.color = "green";
        let textArea = document.createElement("textarea");
        textArea.value =
            e.target.parentElement.previousSibling.previousSibling.textContent;
        this.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        this.removeChild(textArea);
    }
});
