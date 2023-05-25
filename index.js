const crossButton = document.querySelector('nav > img');
const menuContainer = document.querySelector('.burger-menu');
const nav = document.querySelector('.burger-menu > nav');
const navLinks = document.querySelectorAll('.nav-link');
const burgerIcon = document.querySelector('.burger-icon');

const body = document.querySelector('body');

const loginButton = document.querySelector('header>button');
const popupWrapper = document.querySelector('.pop-up-wrapper');
const loginPopUp = document.querySelector('.login-popup');

const accountLink = document.querySelector('.account');

burgerIcon.addEventListener('click', () => showMenu());

function showMenu() {
  menuContainer.classList.toggle('active');
  body.style.overflow = 'hidden';
}

function hideMenu() {
  menuContainer.classList.toggle('active');
  body.style.overflow = 'initial';
}

crossButton.addEventListener('click', () => hideMenu());

for (const link of navLinks) {
  if (link === accountLink) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      popupWrapper.classList.toggle('active');
      return hideMenu();
    });
  } else {
    link.addEventListener('click', () => hideMenu());
  }
}

document.addEventListener('click', (e) => {
  const withinNav = e.composedPath().includes(nav);
  const withinContaier = e.composedPath().includes(menuContainer);

  if (!withinNav && withinContaier) {
    hideMenu();
  }
});

loginButton.addEventListener('click', () => {
  loginPopUp.showModal();
  loginPopUp.classList.toggle('show');
});

loginPopUp.addEventListener('close', () => {
  loginPopUp.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  const withinPopUp = e.composedPath().includes(popupWrapper);
  const withinLoginPopUp = e.composedPath().includes(loginPopUp);

  if (!withinLoginPopUp && withinPopUp) {
    popupWrapper.classList.toggle('active');
  }
});

const regLink = document.querySelector('.register-link');
const popUpHeader = document.querySelector('.login-popup>h3');
const fbButton = document.querySelector('.facebook-button');
const gButton = document.querySelector('.google-button');
const orLine = document.querySelector('.or-line');
const restore = document.querySelector('.restore-password');
const signInButton = document.querySelector('.sign-in-button');
const register = document.querySelector('.reg>span');

function switchToReg() {
  popUpHeader.textContent = 'Create account';
  fbButton.style.display = 'none';
  gButton.style.display = 'none';
  orLine.style.display = 'none';
  restore.style.display = 'none';
  signInButton.textContent = 'Sign Up';
  register.innerHTML = 'Already have an account?&nbsp;';
  regLink.innerHTML = 'Log In';
}

function switchToLogIn() {
  popUpHeader.textContent = 'Log in to your account';
  fbButton.style.display = 'flex';
  gButton.style.display = 'flex';
  orLine.style.display = 'flex';
  restore.style.display = 'initial';
  signInButton.textContent = 'Sign In';
  register.innerHTML = 'Don’t have an account?&nbsp;';
  regLink.innerHTML = 'Register';
}

regLink.addEventListener('click', (event) => {
  event.preventDefault();
  if (popUpHeader.textContent === 'Log in to your account') {
    switchToReg();
  } else {
    switchToLogIn();
  }
});
