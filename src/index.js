const MAIN = document.createElement('main');

const TITLE = document.createElement('h1');
TITLE.innerText = 'RS VIRTUAL KEYBOARD';

let textareaContent = document.createElement('textarea');

const KEYBOARD = document.createElement('div');
KEYBOARD.className = 'keyboard';

const FIRST_ROW = document.createElement('div');
FIRST_ROW.className = 'buttons-row';

const SECOND_ROW = document.createElement('div');
SECOND_ROW.className = 'buttons-row';

const THIRD_ROW = document.createElement('div');
THIRD_ROW.className = 'buttons-row';

document.body.appendChild(MAIN);
MAIN.appendChild(TITLE);
MAIN.appendChild(textareaContent);
MAIN.appendChild(KEYBOARD);
// KEYBOARD.insertAdjacentElement('beforeend', FIRST_ROW);

const FIRST_ROW_ARR = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspase',
];

const SECOND_ROW_ARR = [
  'Tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  '\\',
  'Del',
];

const THIRD_ROW_ARR = [
  'CapsLock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  "'",
  'Enter',
];

const ALL_ROWS = [
  { row: FIRST_ROW, array: FIRST_ROW_ARR },
  { row: SECOND_ROW, array: SECOND_ROW_ARR },
  { row: THIRD_ROW, array: THIRD_ROW_ARR },
];

// ======FILL FIRST ROW=====
const fillRow = (row, rowArr) => {
  rowArr.forEach((el) => {
    const BUTTON = document.createElement('button');
    BUTTON.className = 'button-main-text';
    switch (el) {
      case 'Backspase':
      case 'CapsLock':
      case 'Shift':
        BUTTON.classList.add('button-big');
        break;
      case 'Enter':
        BUTTON.classList.add('button-middle');
        break;
      case 'Tab':
        BUTTON.classList.add('button-small');
        break;
      case 'Del':
      case 'Ctrl':
      case 'Win':
      case 'Alt':
        BUTTON.classList.add('button-dark');
        break;
      default:
        break;
    }

    BUTTON.textContent = el;
    row.insertAdjacentElement('beforeend', BUTTON);
  });
};

ALL_ROWS.forEach((rowObj) => {
  KEYBOARD.insertAdjacentElement('beforeend', rowObj.row);
  fillRow(rowObj.row, rowObj.array);
});

const BUTTONS = document.querySelectorAll('.button-main-text');

// =====LISTENER BUTTONS ADD TO TEXTAREA=====
BUTTONS.forEach((button) => {
  button.addEventListener(
    'click',
    (event) => {
      console.log('EVENT', event.target.innerHTML);
      if (event.target.innerHTML === 'Backspase') {
        textareaContent.value = textareaContent.value.slice(0, -1);
      } else textareaContent.value += event.target.innerHTML;
    },
    false
  );
});

document.addEventListener(
  'keyup',
  (event) => {
    const name = event.key;
    const code = event.code;
    // Alert the key name and key code on keydown
    console.log(`event.key ${name} \r\n event.code ${code}`);
  },
  false
);
