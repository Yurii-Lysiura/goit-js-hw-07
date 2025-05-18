const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  if (inputEl.value.trim() !== "") {
    outputEl.textContent = inputEl.value.trim();
  } else {
    outputEl.textContent = "Anonymous";
  }
});
