import { generateSpanColor } from './utils/color';

import store from './store';

import './styles/index.scss';
import { 
  CHANGE_ALL_COLORS, 
  CHANGE_FIRST_COLOR, 
  CHANGE_LAST_COLOR,
  CHANGE_DIRECTION,
} from './store/reducers/gradientReducer';

console.log(store.getState());

function renderNbColors() {
  const { nbColors } = store.getState().gradient;

  document.querySelector('.nbColors').innerHTML = 
  `${nbColors} couleur(s) générée(s)`;
}

function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState().gradient;

  document.querySelector('.gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}

function renderColors() {
  const { firstColor, lastColor } = store.getState().gradient;

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.querySelector('.colors').innerHTML = result;
}

renderNbColors();
renderGradient();
renderColors();

store.subscribe(() => {
  renderNbColors();
  renderGradient();
  renderColors();
});


document.getElementById('randAll').addEventListener('click', () => {
  
  console.log('Random all colors');

  store.dispatch(CHANGE_ALL_COLORS());
});

document.getElementById('randFirst').addEventListener('click', () => {

  store.dispatch(CHANGE_FIRST_COLOR());
});

document.getElementById('randLast').addEventListener('click', () => {

  store.dispatch(CHANGE_LAST_COLOR());
});

document.getElementById('toLeft').addEventListener('click', () => {

  store.dispatch(CHANGE_DIRECTION('270deg'));
});

document.getElementById('toRight').addEventListener('click', () => {

  store.dispatch(CHANGE_DIRECTION('90deg'));
});

document.getElementById('to45').addEventListener('click', () => {

  store.dispatch(CHANGE_DIRECTION('45deg'));
});

document.getElementById('to135').addEventListener('click', () => {

  store.dispatch(CHANGE_DIRECTION('135deg'));
});

document.getElementById('to225').addEventListener('click', () => {

  store.dispatch(CHANGE_DIRECTION('225deg'));
});

document.getElementById('to315').addEventListener('click', () => {

  store.dispatch(CHANGE_DIRECTION('315deg'));
});
