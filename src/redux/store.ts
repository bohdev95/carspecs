import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import specsListReducer from "./features/specsList/specsListSlice";
import dynamicFieldsReducer from "./features/dynamicFields/dynamicFieldsSlice";

export const store = configureStore({
  reducer: {
    specsList: specsListReducer,
    dynamicFields: dynamicFieldsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
