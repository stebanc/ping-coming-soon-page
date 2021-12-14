const form = document.getElementById('form');
const email = document.getElementById('email');

const emailIsValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const emailValidator = (e) => {
  if (!emailIsValid.test(e.firstElementChild.value.trim())) {
    e.classList.add('form__group--error');
    e.firstElementChild.value = '';
    e.firstElementChild.placeholder = 'email@example/com';
    return false;
  }
  return true;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailValidator(email)) {
    // envio de datos
    form.reset();
  }
});

email.firstElementChild.addEventListener('focus', () => {
  email.classList.remove('form__group--error');
  email.firstElementChild.placeholder = 'Your email address...';
});