import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_key =
  process.env.REACT_APP_WEATHER_APP

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api_key}&units=metric`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  data: null,
  isLoading: null,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});
export const { setError } = dataSlice.actions;
export default dataSlice.reducer;
