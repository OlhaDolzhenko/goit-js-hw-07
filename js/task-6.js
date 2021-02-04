// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const validationInputRef = document.querySelector("#validation-input");
const validationParameter = Number(
  validationInputRef.getAttribute("data-length")
);

function handleInputValidation(event) {
  const inputValue = event.target.value;
  if (inputValue.length !== validationParameter) {
    validationInputRef.classList.add("invalid");
  } else {
    validationInputRef.classList.remove("invalid");
    validationInputRef.classList.add("valid");
  }
}

validationInputRef.addEventListener("blur", handleInputValidation);
