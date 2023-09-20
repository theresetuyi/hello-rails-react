import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchGreetings = createAsyncThunk('greetings/fetchGreetings',
  async() => {
    const response = await fetch('http://localhost:3000/api/greeting')
    const data = await response.json();
    return data.name;
  }
)

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
  },
  extraReducers: builder => {
    builder 
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.greeting = action.payload;
      })
  }
})

export default greetingSlice;
export { fetchGreetings };