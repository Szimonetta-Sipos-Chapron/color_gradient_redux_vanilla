// == Imports
import { generateSpanColor } from './utils/color';

// juste en précisant le nom du dossier, il va aller chercher l'import dans index.js
import store from './store';

import './styles/index.scss';
import { 
  CHANGE_ALL_COLORS, 
  CHANGE_FIRST_COLOR, 
  CHANGE_LAST_COLOR,
  CHANGE_DIRECTION,
} from './store/reducers/gradientReducer';

// == State
console.log(store.getState());

// DISPATCH = demander au store de faire une action
// store.dispatch({ type: 'CHANGE_FIRST_COLOR' });
// console.log(store.getState());

// == Rendu dans le DOM
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

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

store.subscribe(() => {
  renderNbColors();
  renderGradient();
  renderColors();
});

// == Controls
document.getElementById('randAll').addEventListener('click', () => {
  // debug
  console.log('Random all colors');
  // data
  store.dispatch(CHANGE_ALL_COLORS());
});

document.getElementById('randFirst').addEventListener('click', () => {
  // data

  // on veut que le click du bouton déclenche une action de notre store
  store.dispatch(CHANGE_FIRST_COLOR());
});

document.getElementById('randLast').addEventListener('click', () => {
  // data
  store.dispatch(CHANGE_LAST_COLOR());
});

document.getElementById('toLeft').addEventListener('click', () => {
  // data
  store.dispatch(CHANGE_DIRECTION('270deg'));
});

document.getElementById('toRight').addEventListener('click', () => {
  // data
  store.dispatch(CHANGE_DIRECTION('90deg'));
});

document.getElementById('to45').addEventListener('click', () => {
  // data
  store.dispatch(CHANGE_DIRECTION('45deg'));
});

document.getElementById('to135').addEventListener('click', () => {
  // data
  store.dispatch(CHANGE_DIRECTION('135deg'));
});

document.getElementById('to225').addEventListener('click', () => {
  // data
  store.dispatch(CHANGE_DIRECTION('225deg'));
});

document.getElementById('to315').addEventListener('click', () => {
  // data
  store.dispatch(CHANGE_DIRECTION('315deg'));
});
