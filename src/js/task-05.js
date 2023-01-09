const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

inputElement.addEventListener('input', () => {
  const inputValue = inputElement.value;

  if (inputValue === '') {
    outputElement.textContent = 'Anonymous';
    return;
  }

  outputElement.textContent = inputValue;
});