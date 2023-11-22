import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ColorState {
  value: string;
}

const initialState: ColorState = {
  value: "yellow",
};

const colorSlice = createSlice({
  name: "circle",
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;
