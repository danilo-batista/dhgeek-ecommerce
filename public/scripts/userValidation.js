// GENERAL SETUP

const userForm = document.querySelector('.user__form');
const fields = document.querySelectorAll('[required]');

function userFormValidation(userEvent) {
  const userEmail = document.querySelector('.user__form__email--input');
  const userPassword = document.querySelector('.user__form__password--input');
  const validationFilter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  let validationKey = 0;

  // EMAIL VALIDATION
  let emailError = document.querySelector('.email--error');
  // if (userEmail.value = "") {
  //   emailError.innerHTML = "Por favor, informe o seu e-mail!";
  //   emailError.style.display = "flex";
  //   emailError.style.color = "red"
  //   validationKey += 1;
  // } else if (validationFilter.test(userEmail.value)) {
  //   emailError.style.display = "none";
  // } else {
  //   emailError.innerHTML = "Formato de e-mail inválido!";
  //   emailError.style.display = "flex";
  //   emailError.style.color = "red"
  //   validationKey += 1;
  // }

  // PASSWORD VALIDATION
  let passwordError = document.querySelector('.password--error');
  // if (userPassword.value = "") {
  //   passwordError.innerHTML = "Você precisa escolher uma senha!";
  //   passwordError.style.display = "flex";
  //   passwordError.style.color = "red"
  //   validationKey += 1;
  // } else if (userPassword.value.length < 6) {
  //   passwordError.innerHTML = "A sua senha precisa ter ao menos 06 (seis) caracteres!";
  //   passwordError.style.display = "flex";
  //   passwordError.style.color = "red"
  //   validationKey += 1;
  // } else {
  //   passwordError.style.display = "none";
  // }

  // VALIDATION KEY VERIFICATION
  if(validationKey > 0) {
		userEvent.preventDefault();
	}
}

// PREVENT SEND FORM
if (userForm.addEventListener) {
  userForm.addEventListener('submit', userFormValidation);
} else if (userForm.attachEvent) {                  
  form.attachEvent("onsubmit", userFormValidation);
}