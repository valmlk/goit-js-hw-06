const textInput = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const inputHandler = event => {
    event.currentTarget.value.trim() === "".trim()
  ? spanEl.textContent = "Anonymous"
  : spanEl.textContent = event.currentTarget.value.trim();
};

textInput.addEventListener("input", inputHandler);