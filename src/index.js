const MAIN = document.createElement('main');

const TITLE = document.createElement('h1');
TITLE.innerText = 'RS VIRTUAL KEYBOARD';

const FOOTER = document.createElement('h3');
FOOTER.innerText =
  'Keyboard was created for Windows. To switch the language press Win + Space';

let textareaContent = document.createElement('textarea');

// ====KEYBOARD=====
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

// =====APPENDING BLOCKS======
document.body.appendChild(MAIN);
MAIN.appendChild(TITLE);
MAIN.appendChild(textareaContent);
MAIN.appendChild(KEYBOARD);
MAIN.appendChild(FOOTER);

// =====KEYBOARD ROWS====
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

// ======FILL ROWS=====
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

// =====FILL KEYBOARD=====
ALL_ROWS.forEach((rowObj) => {
  KEYBOARD.insertAdjacentElement('beforeend', rowObj.row);
  fillRow(rowObj.row, rowObj.array);
});

// =====LISTENER BUTTONS ADD TO TEXTAREA=====
const BUTTONS = document.querySelectorAll('.button-main-text');

BUTTONS.forEach((button) => {
  button.addEventListener(
    'click',
    (event) => {
      const caretPosition = textareaContent.selectionStart;

      if (event.target.innerHTML === 'Backspase') {
        textareaContent.value =
          textareaContent.value.slice(0, textareaContent.selectionStart - 1) +
          textareaContent.value.slice(textareaContent.selectionStart);

        textareaContent.focus();
        textareaContent.selectionEnd = caretPosition - 1;
      } else if (event.target.innerHTML === 'Enter') {
        textareaContent.value =
          textareaContent.value.slice(0, textareaContent.selectionStart) +
          '\r\n' +
          textareaContent.value.slice(textareaContent.selectionStart);

        textareaContent.focus();
        textareaContent.selectionEnd = caretPosition + 1;
      } else if (event.target.innerHTML === 'Del') {
        // const caretPosition = textareaContent.selectionStart;

        textareaContent.value =
          textareaContent.value.slice(0, textareaContent.selectionStart) +
          textareaContent.value.slice(textareaContent.selectionStart + 1);

        textareaContent.focus();
        textareaContent.selectionEnd = caretPosition;
      } else {
        // const caretPosition = textareaContent.selectionStart;
        textareaContent.value =
          textareaContent.value.slice(0, textareaContent.selectionStart) +
          event.target.innerHTML +
          textareaContent.value.slice(textareaContent.selectionStart);

        textareaContent.focus();
        textareaContent.selectionEnd = caretPosition + 1;
      }
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
    // textareaContent.focus();
    pressedButton.click();
    pressedButton.classList.add('button-main-text-before');

    event.preventDefault();
  },
  false
);
document.removeEventListener;

document.addEventListener(
  'keyup',
  (event) => {
    const buttonId = `button${event.key}`;
    const pressedButton = document.querySelector(`#${buttonId}`);
    if (pressedButton.classList)
      pressedButton.classList.remove('button-main-text-before');
  },
  false
);
document.removeEventListener;
