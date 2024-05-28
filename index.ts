import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// define the initial state
interface State {
  count: number;
}

const initialState: State = {
  count: 0
};

// create a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    }
  }
});

// extract the action creators object and the reducer
const { actions, reducer } = counterSlice;
const { increment } = actions;

// create a redux store
const store = configureStore({ reducer });

// observer function
const observer = () => {
  console.log('state changed:', store.getState());
};

// subscribe the observer to the store
const unsubscribe = store.subscribe(observer);

// dispatch an action
store.dispatch(increment());

// unsubscribe the observer
unsubscribe();
