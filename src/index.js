import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]')
};

let intervalId = null;
let isActive = false;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);
    
function onStartBtnClick() {
    if (isActive) {
        return;
    }
    intervalId = setInterval(changeColor, 1000);
    isActive = true;
};

function onStopBtnClick() {
    clearInterval(intervalId);
    isActive = false;
};

function changeColor() {
    const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const index = randomIntegerFromInterval(0, colors.length - 1);
    
    refs.body.style.backgroundColor = colors[index];
};
