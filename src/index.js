const MAIN = document.createElement('main');

const TITLE = document.createElement('h1');
TITLE.innerText = 'RS VIRTUAL KEYBOARD';

const FOOTER = document.createElement('h3');
FOOTER.innerText =
  'Keyboard was created for Windows. To switch the language press Win + Space';

let textareaContent = document.createElement('textarea');

let isUppercased = false;

let coldStart = true;

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

const FIRST_SHIFTED_ROW_ARR = [
  '~',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '+',
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

const SECOND_SHIFTED_ROW_ARR = [
  'Tab',
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  '{',
  '}',
  '|',
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

const THIRD_SHIFTED_ROW_ARR = [
  'CapsLock',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  ':',
  '"',
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

const FOURTH_SHIFTED_ROW_ARR = [
  'Shift',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
  '<',
  '>',
  '?',
  '&#129093',
  'Shift`',
];

const FIFTH_ROW_ARR = [
  'Ctrl',
  'Win',
  'Alt',
  'Space',
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

const ALL_SHIFTED_ROWS = [
  { row: FIRST_ROW, array: FIRST_SHIFTED_ROW_ARR },
  { row: SECOND_ROW, array: SECOND_SHIFTED_ROW_ARR },
  { row: THIRD_ROW, array: THIRD_SHIFTED_ROW_ARR },
  { row: FOURTH_ROW, array: FOURTH_SHIFTED_ROW_ARR },
  { row: FIFTH_ROW, array: FIFTH_ROW_ARR },
];

// ======FILL ROWS=====
const fillRow = (row, rowArr) => {
  rowArr.forEach((el) => {
    const BUTTON = document.createElement('button');
    BUTTON.className = 'button-main-text';
    BUTTON.id = `button${el}`;

    switch (el) {
      case 'Space':
        BUTTON.classList.add('button-space');
        BUTTON.style.color = 'var(--main-transparent-text)';
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
const fillKeyboard = (allRowsObj) => {
  document.querySelector('.keyboard').innerHTML = '';
  console.log('fill', allRowsObj);
  allRowsObj.forEach((rowObj) => {
    KEYBOARD.insertAdjacentElement('beforeend', rowObj.row);
    fillRow(rowObj.row, rowObj.array);
  });
};

if (coldStart) {
  console.log('start');
  fillKeyboard(ALL_ROWS);
  coldStart = false;
}

// =====START FILLING=====
// if (!isUppercased) {
//   fillKeyboard(ALL_ROWS);
// } else {
//   fillKeyboard(ALL_SHIFTED_ROWS);
// }

// =====LISTENER BUTTONS ADD TO TEXTAREA=====
const BUTTONS = document.querySelectorAll('.button-main-text');

BUTTONS.forEach((button) => {
  button.addEventListener(
    'click',
    (event) => {
      const caretPosition = textareaContent.selectionStart;

      function getLineNumberAndColumnIndex(textarea) {
        const textLines = textarea.value
          .substr(0, textarea.selectionStart)
          .split('\n');
        const currentLineNumber = textLines.length;
        const currentColumnIndex = textLines[textLines.length - 1].length;
        return [currentLineNumber, currentColumnIndex];
      }

      const [lineCursorPosition, coloumnCursorPosition] =
        getLineNumberAndColumnIndex(textareaContent);

      switch (event.target.id) {
        case 'buttonBackspase':
          textareaContent.value =
            textareaContent.value.slice(0, textareaContent.selectionStart - 1) +
            textareaContent.value.slice(textareaContent.selectionStart);

          textareaContent.focus();
          textareaContent.selectionEnd = caretPosition - 1;
          break;

        case 'buttonEnter':
          textareaContent.value =
            textareaContent.value.slice(0, textareaContent.selectionStart) +
            '\r\n' +
            textareaContent.value.slice(textareaContent.selectionStart);

          textareaContent.focus();
          textareaContent.selectionEnd = caretPosition + 1;
          break;

        case 'buttonDel':
          textareaContent.value =
            textareaContent.value.slice(0, textareaContent.selectionStart) +
            textareaContent.value.slice(textareaContent.selectionStart + 1);

          textareaContent.focus();
          textareaContent.selectionEnd = caretPosition;
          break;

        case 'buttonSpace':
          textareaContent.value =
            textareaContent.value.slice(0, textareaContent.selectionStart) +
            ' ' +
            textareaContent.value.slice(textareaContent.selectionStart);

          textareaContent.focus();
          textareaContent.selectionEnd = caretPosition + 1;
          break;

        case 'buttonShift':
        case 'buttonShift`':
        case 'buttonCtrl':
        case 'buttonWin':
        case 'buttonAlt':
          return;
          break;

        case 'button&#129092': // cursor back
          textareaContent.focus();
          textareaContent.selectionEnd = caretPosition - 1;
          break;

        case 'button&#129093': // cursor up
          if (lineCursorPosition === 1) {
            textareaContent.focus();
            textareaContent.selectionStart = coloumnCursorPosition;
          } else {
            const previousLine = lineCursorPosition - 1;
            const beforePreveousLineLength = textareaContent.value
              .split('\n')
              .slice(0, previousLine - 1)
              .reduce((acc, rec) => acc + rec.length, 0);
            textareaContent.focus();
            textareaContent.selectionEnd =
              beforePreveousLineLength + coloumnCursorPosition + 1;
          }
          break;

        case 'button&#129094': // cursor ahead
          textareaContent.focus();
          textareaContent.selectionStart = caretPosition + 1;
          break;

        case 'button&#129095':
          const currentLineLength = textareaContent.value
            .split('\n')
            .slice(0, lineCursorPosition)
            .pop().length;
          textareaContent.focus();
          textareaContent.selectionStart =
            caretPosition + currentLineLength + 1;

          break;

        default:
          textareaContent.value =
            textareaContent.value.slice(0, textareaContent.selectionStart) +
            event.target.innerHTML +
            textareaContent.value.slice(textareaContent.selectionStart);

          textareaContent.focus();
          textareaContent.selectionEnd = caretPosition + 1;
          break;
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

    // if (buttonId === 'buttonShift' || buttonId === 'buttonShift`') {
    //   isUppercased = true;
    //   document.querySelector('.keyboard').innerHTML = '';
    //   console.log('down');
    //   fillKeyboard(ALL_SHIFTED_ROWS);
    // }
    if (
      buttonId === 'buttonBackspace' ||
      buttonId === 'buttonDelete' ||
      buttonId === 'buttonControl' ||
      buttonId === 'buttonWin' ||
      buttonId === 'buttonAlt' ||
      buttonId === 'buttonArrowLeft' ||
      buttonId === 'buttonArrowUp' ||
      buttonId === 'buttonArrowRight' ||
      buttonId === 'buttonArrowDown' ||
      buttonId === 'buttonEscape' ||
      buttonId === 'buttonShift'
    ) {
      return false;
    }

    const pressedButton = document.querySelector(`#${buttonId}`);
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

    // if (buttonId === 'buttonShift' || buttonId === 'buttonShift`') {
    //   isUppercased = false;
    //   document.querySelector('.keyboard').innerHTML = '';
    //   console.log('up');

    //   fillKeyboard(ALL_ROWS);
    // }

    if (
      buttonId === 'buttonBackspace' ||
      buttonId === 'buttonDelete' ||
      buttonId === 'buttonControl' ||
      buttonId === 'buttonWin' ||
      buttonId === 'buttonAlt' ||
      buttonId === 'buttonArrowLeft' ||
      buttonId === 'buttonArrowUp' ||
      buttonId === 'buttonArrowRight' ||
      buttonId === 'buttonArrowDown' ||
      buttonId === 'buttonEscape' ||
      buttonId === 'buttonShift'
    ) {
      return false;
    }

    const pressedButton = document.querySelector(`#${buttonId}`);

    if (pressedButton.classList)
      pressedButton.classList.remove('button-main-text-before');
  },
  false
);

document.removeEventListener;

// ======SHIFT LOGIC=====
// const SHIFT_BUTTONS = [
//   ...document.querySelectorAll('.button-main-text'),
// ].filter((el) => el.innerText.includes('Shift'));
// console.log('shift', SHIFT_BUTTONS);

// SHIFT_BUTTONS.forEach((butt) => {
//   butt.addEventListener('keydown', () => {
//     console.log('down');
//     document.querySelector('.keyboard').innerHTML = '';
//     isUppercased = true;
//     fillKeyboard(ALL_SHIFTED_ROWS);
//   });
// });
