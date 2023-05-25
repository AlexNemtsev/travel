function handleSignInButton(event) {
  event.preventDefault();
  serializeForm(signInForm);
}

function serializeForm(formNode) {
  const { elements } = formNode;
  const email = elements[0]['value'];
  const password = elements[1]['value'];

  alert(`Email: ${email}\nPassword: ${password}`);
}

const signInForm = document.querySelector('.sign-in-form');
signInForm.addEventListener('submit', handleSignInButton);
