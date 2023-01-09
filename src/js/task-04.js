let counterValue = 0; 

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterElement = document.querySelector('#value');


decrementButton.addEventListener('click', () => {
  counterValue --;
  counterElement.innerHTML = counterValue; 
});


incrementButton.addEventListener('click', () => {
  counterValue ++; 
  counterElement.innerHTML = counterValue; });