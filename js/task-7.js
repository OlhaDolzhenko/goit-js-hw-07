// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const sizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

function handleFontSizeChange(event) {
  const inputValue = event.target.value;
  const string = `font-size: ${inputValue}px;`;
  textRef.setAttribute("style", string);
}

sizeControlRef.addEventListener("input", handleFontSizeChange);
