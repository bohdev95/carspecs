import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface DynamicField {
  name: string;
  label: string;
}

const initialState: DynamicField[] = [];

export const dynamicFieldsSlice = createSlice({
  name: "dymaicFields",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    buildField: (state, action: PayloadAction<DynamicField>) => {
      // state = [...state, action.payload];

      let validateExistence = state.findIndex(
        (field) => action.payload.name === field.name
      );

      if (validateExistence === -1) {
        state.push(action.payload);
      }
    },
  },
});

export const { buildField } = dynamicFieldsSlice.actions;

export const getDynamicFields = (state: RootState) => state.dynamicFields;

export default dynamicFieldsSlice.reducer;
