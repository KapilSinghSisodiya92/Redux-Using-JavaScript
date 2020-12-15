// ****THREE CORE CONCEPT OF REDUX**
//A 'Store' that holds the state of your application
//An 'Action' that describe the changes in the state of the application
//A 'Reducer' which actually carries out the state transition depending on the action.

//****THREE PRINCIPLES***
//The state of your whole application is stored in an object tree within a single store.
//The only way to chnage the state is to emit an action, an object describing what happened.
//To specify how the state tree is transformed by actions, you write pure reducer.
//Reducer - (previousState,action) => newState

const redux = require("redux");
const reduxLogger = require("redux-logger");
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const logger = reduxLogger.createLogger();

//Create a store using redux
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

//Action
// {
//     type:BUY_CAKE,
//     info:'First Redux Action'
// }

//Action Creator (is a function that return a Action)
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "First Redux Action",
  };
}

//InitialState for the Reducer
const initialCakeState = {
  numOfCakes: 10,
};

const initalIceCreamsState = {
  numOfIceCreams: 20,
};

//Reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamsReducer = (state = initalIceCreamsState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

//Store
rootReducers = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamsReducer,
});
const store = createStore(rootReducers, applyMiddleware(logger));
console.log("initial state", store.getState());
const unSubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unSubscribe();
