const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', event => {
  event.preventDefault();

  const email = formElement.elements.email.value;
  const password = formElement.elements.password.value;

  if (!email || !password) {
    alert('Nie wszystkie pola zostaly wypełnione!');
    return;
  }

  const loginData = { email, password };
  console.log(loginData);
  formElement.reset();
});
