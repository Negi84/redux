import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      //state,action in parameters are provided by redux
      //we are not using the action here
      //here we are allowed to mutate the state
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const store = createStore(counterSlice.reducer);
//counterSlice.reducer is used to call the reducers of counterSlice

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const coutnerActions = counterSlice.actions;

export default store;
