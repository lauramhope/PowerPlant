// This function stores our state.
export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateControl = storeState();
// export const newPlant = storeState();

// This is a function factory. 
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

// We create four functions using our function factory. 
export const feed = changeState("soil")(1);
export const superFood = changeState("soil")(5);

export const water = changeState("water")(1);
export const superWater = changeState("water")(5);

export const giveLight = changeState("light")(1);
export const superLight = changeState("light")(5);

if (typeof window !== 'undefined'){
  window.onload = function() {
    document.getElementById('feed').onclick = function() {
      const newState = stateControl(superFood);
      document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
    };

    document.getElementById('water').onclick = function() {
      const newState2 = stateControl(superWater);
      document.getElementById('water-value').innerText = `Water: ${newState2.water}`;
    };

    document.getElementById('give-sunlight').onclick = function() {
      const newState3 = stateControl(superLight);
      document.getElementById('light-value').innerText = `Light: ${newState3.light}`;
    };
  };
}

// document.getElementById('show-state').onclick = function() {
//   const currentState = stateControl();
//   document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
// };

// CURRIED FUNCTION - is pure function that takes one argument at a time, returning a new function with the next argument, until all arguments have been passed in and the application is complete.
// also uses closures - a function that returns another function, and the inner function can access the outer function's variables.
// const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop]: (state[prop] || 0) + value
//     })
//   }
// };

// const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// };
//outer function is storeState, inner function is changeState
//storeState does not take an argument, only job is to store the currentState of an object
//currentState of an object will be initialized as an empty object {} - using let because we will be reassigning the currentState variable
//outer function storeState returns an anonymous inner function that takes one parameter called stateChangeFunction - this inner function will take a function as an argument - specifies the exact change that should be made to currentState
//the line const newState = stateChangeFunction(currentState); -- takes the function passed in as an argument and calls it with currentState as an argument - saves the result in a variable called newState
// will then need to store our function in another constant like this:
//  const stateControl = storeState(); // invoking the storeState() function and creating a closure over the currentState variable
// stateControl holds the inner function 



// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// }; 

// const changeState = (state, property) => {
//   return {
//     ...state,
//     [property]: (state[property] || 0) + value
//   }
// };
