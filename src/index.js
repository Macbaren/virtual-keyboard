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

const FOURTH_ROW = document.createElement('div');
FOURTH_ROW.className = 'buttons-row';

const FIFTH_ROW = document.createElement('div');
FIFTH_ROW.className = 'buttons-row';

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

const FOURTH_ROW_ARR = [
  'Shift',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  '&#129093',
  'Shift`',
];

const FIFTH_ROW_ARR = [
  'Ctrl',
  'Win',
  'Alt',
  '&#160',
  'Alt',
  '&#129092',
  '&#129095',
  '&#129094',
  'Ctrl',
];

const ALL_ROWS = [
  { row: FIRST_ROW, array: FIRST_ROW_ARR },
  { row: SECOND_ROW, array: SECOND_ROW_ARR },
  { row: THIRD_ROW, array: THIRD_ROW_ARR },
  { row: FOURTH_ROW, array: FOURTH_ROW_ARR },
  { row: FIFTH_ROW, array: FIFTH_ROW_ARR },
];

// ======FILL FIRST ROW=====
const fillRow = (row, rowArr) => {
  rowArr.forEach((el) => {
    const BUTTON = document.createElement('button');
    BUTTON.className = 'button-main-text';
    BUTTON.id = `button${el}`;
    switch (el) {
      case '&#160':
        BUTTON.classList.add('button-space');
        break;
      case 'Backspase':
      case 'CapsLock':
      case 'Shift':
        BUTTON.classList.add('button-big');
        break;
      case 'Enter':
      case 'Shift`':
        BUTTON.classList.add('button-middle');
        break;
      case 'Tab':
        BUTTON.classList.add('button-small');
        break;
      case 'Del':
      case 'Ctrl':
      case 'Win':
      case 'Alt':
      case '&#129092':
      case '&#129093':
      case '&#129094':
      case '&#129095':
        BUTTON.classList.add('button-dark');
        break;
      default:
        break;
    }

    BUTTON.innerHTML = el;
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
      } else if (event.target.innerHTML === 'Enter') {
        textareaContent.value = textareaContent.value + '\r\n';
      } else textareaContent.value += event.target.innerHTML;
    },
    false
  );
  button.removeEventListener;
});

document.addEventListener(
  'keydown',
  (event) => {
    const buttonId = `button${event.key}`;
    const pressedButton = document.querySelector(`#${buttonId}`);
    pressedButton.classList.add('active', 'after');
    console.log(pressedButton);
  },
  false
);
