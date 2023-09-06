function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const hexColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

const changeColor = event => {
  const randomColor = getRandomHexColor();
  hexColor.textContent = `${randomColor}`;
  body.style.backgroundColor = `${randomColor}`;
};

btnChangeColor.addEventListener("click", changeColor);
