import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('http://localhost:3001/tasks');
  return response.json();
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [], loading: false },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;