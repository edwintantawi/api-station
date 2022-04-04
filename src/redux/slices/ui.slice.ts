import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  drawer: boolean;
  term: String;
}

const initialState: InitialState = {
  drawer: false,
  term: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.drawer = !state.drawer;
    },
    setTerm: (state, action: PayloadAction<String>) => {
      state.term = action.payload;
    },
  },
});

export const { toggleDrawer } = uiSlice.actions;
export default uiSlice.reducer;
