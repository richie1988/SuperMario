import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://www.amiiboapi.com/api/amiibo/?name=';

export const fetchSuperheroByName = createAsyncThunk(
  'superhero/fetchByName',
  async (superheroName) => {
    try {
      const response = await axios.get(`${API_BASE_URL}${superheroName}`);
      return response.data.amiibo; // Access the "amiibo" array within the response
    } catch (error) {
      throw new Error('Failed to fetch superhero details');
    }
  }
);

const superheroSlice = createSlice({
  name: 'superhero',
  initialState: {
    superhero: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuperheroByName.fulfilled, (state, action) => {
        state.superhero = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchSuperheroByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSuperheroByName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default superheroSlice.reducer;
