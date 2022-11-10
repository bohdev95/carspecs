import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SpecsContextInterface } from "../../../interfaces/Specs";
import { RootState } from "../../store";

const sport_car = new SpecsContextInterface();
      sport_car.setName("Sport");

const prestige_car = new SpecsContextInterface();
      prestige_car.setName("Prestige");

const initialState: SpecsContextInterface[] = [
  sport_car,
  prestige_car,
];

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const specsSlice = createSlice({
  name: "specsList",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    save: (state, action: PayloadAction<SpecsContextInterface>) => {

      state.push(action.payload);
    },
  },
});

export const { save } = specsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getSpecs = (state: RootState) => state.specsList;

export default specsSlice.reducer;
