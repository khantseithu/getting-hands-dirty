function createStore(reducer, initialState) {
  let state = initialState;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);

    return function unsubscribe() {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  dispatch({ type: "@@redux/INIT" });

  return { getState, dispatch, subscribe };
}

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer, initialState);

function logState() {
  console.log("Current state:", store.getState());
}

const action = { type: "INCREMENT" };

store.dispatch(action);
store.dispatch(action);
store.dispatch(action);

logState();

const deAction = { type: "DECREMENT" };
store.dispatch(deAction);

logState();
