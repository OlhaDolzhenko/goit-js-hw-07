// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector("#name-input");
const nameLabelRef = document.querySelector("#name-output");

function handleInputChange(event) {
  if (!event.target.value) {
    inputRef.addEventListener("input", handleInputChange);
    nameLabelRef.textContent = "незнакомец";
  } else {
    nameLabelRef.textContent = event.target.value;
  }
}

inputRef.addEventListener("input", handleInputChange);
