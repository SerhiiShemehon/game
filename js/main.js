const start = document.getElementById('btn-start');
const stop = document.getElementById('btn-stop');
const minus = document.getElementById('btn-minus');
const plus = document.getElementById('btn-plus');
const field = document.getElementById('field');
const count = document.getElementById('count');

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) ) + min;

let figures = [];
const figuresStyle = ['figure-circle', 'figure-square', 'figure-triangle', 'figure-star'];
const figureColors = ['figure-red', 'figure-green', 'figure-blue', 'figure-yellow'];
const figureSize = ['figure-small', 'figure-normal', 'figure-big'];

const printFigure = () => {
  const currentFigures = field.querySelectorAll('.figure');
  currentFigures.forEach( elem => elem.remove());
  figures.forEach( elem => field.appendChild(elem));
  count.querySelector('span').innerText = figures.length;
}

const createFigure = () => {
  const figure = document.createElement('div');
  figure.classList.add('figure', figuresStyle[getRandom(0,4)], figureColors[getRandom(0,4)], figureSize[getRandom(0,3)]);
  figure.style.left = `${getRandom(74,1026)}px`;
  figure.style.top = `${getRandom(74,326)}px`;
  figures.push(figure);
  printFigure();
}

const removeFigure = () => {
  figures.pop();
  printFigure();
}

const startPlay = () => {
  plus.removeAttribute('disabled');
  minus.removeAttribute('disabled');
  count.classList.remove('disabled')
  plus.addEventListener('click', createFigure);
  minus.addEventListener('click', removeFigure);
}

const stopPlay = () => {
  figures = [];
  printFigure();
  plus.setAttribute('disabled', true);
  minus.setAttribute('disabled', true);
  count.classList.add('disabled');
  plus.removeEventListener('click', createFigure);
  minus.removeEventListener('click', removeFigure);
}

start.addEventListener('click', startPlay);
stop.addEventListener('click', stopPlay);