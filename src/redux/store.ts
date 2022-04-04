import { configureStore } from '@reduxjs/toolkit';
import { publicApiService } from '../services/publicApiService';
import uiSliceReducer from './slices/ui.slice';

export const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    [publicApiService.reducerPath]: publicApiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(publicApiService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
