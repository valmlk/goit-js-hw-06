const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const valueId = document.querySelector("#value")
let counterValue = 0;


const funcDecrement = event => {
    counterValue -= 1;
    valueId.textContent = counterValue;
};

const funcIncrement = event => {
    counterValue += 1;
    valueId.textContent = counterValue;
}

btnDecrement.addEventListener("click", funcDecrement);
btnIncrement.addEventListener("click", funcIncrement);