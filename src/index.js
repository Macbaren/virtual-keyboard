const MAIN = document.createElement('main');

const TITLE = document.createElement('h1');
TITLE.innerText = 'RS VIRTUAL KEYBOARD';

const TEXTAREA = document.createElement('textarea');
// div1.innerHTML = `<span style="background-color: lime;">Last element</span>`;

const KEYBOARD = document.createElement('div');
KEYBOARD.className = 'keyboard';

const FIRST_ROW = document.createElement('div');
FIRST_ROW.className = 'first-row';

// const BUTTON = document.createElement('button');
// BUTTON.className = 'button-main-text';
// BUTTON.textContent = 'M';

document.body.appendChild(MAIN);
MAIN.appendChild(TITLE);
MAIN.appendChild(TEXTAREA);
MAIN.appendChild(KEYBOARD);
KEYBOARD.insertAdjacentElement('beforeend', FIRST_ROW);

// KEYBOARD.insertAdjacentElement('beforeend', BUTTON);
// KEYBOARD.appendChild(BUTTON);
const letters = ['A', 'B', 'C'];
letters.forEach((el) => {
  const BUTTON = document.createElement('button');
  BUTTON.className = 'button-main-text';
  BUTTON.textContent = el;
  FIRST_ROW.insertAdjacentElement('beforeend', BUTTON);
});
