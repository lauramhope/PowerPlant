import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { newPlant, storeState, stateControl, changeState, superFood, superWater, superLight } from './js/plant.js';
 

if (typeof window !== 'undefined') {
  window.onload = function() {

  document.getElementById('feed').onclick = function() {
    const newState = stateControl(superFood);
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById('water').onclick = function() {
    const newState = stateControl(superWater);
    document.getElementById('water-value').innerText = `Water: ${newState.water}`;
  };

  document.getElementById('light').onclick = function() {
    const newState = stateControl(superLight);
    document.getElementById('light-value').innerText = `Light: ${newState.light}`;
  };
};
};

  // document.getElementById('show-state').onclick = function() {
  //   const currentState = stateControl();
  //   document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
  // };

  // document.getElementById('new-plant').onclick = function() {
  //   const newPlant = storeState();
  //   document.getElementById('soil-value').innerText = `Soil: ${newPlant.soil}`;
  //   document.getElementById('water-value').innerText = `Water: ${newPlant.water}`;
  //   document.getElementById('light-value').innerText = `Light: ${newPlant.light}`;
  // };

storeState();
changeState();
