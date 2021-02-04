// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterRef = document.querySelector("#counter");
const valueRef = counterRef.querySelector("#value");
const incrementButtonRef = counterRef.querySelector(
  '[data-action="increment"]'
);
const decrementButtonRef = counterRef.querySelector(
  '[data-action="decrement"]'
);

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

incrementButtonRef.addEventListener("click", increment);
decrementButtonRef.addEventListener("click", decrement);
