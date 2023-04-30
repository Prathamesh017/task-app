import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  data: {
    name: '',
    email: '',
    password: '',
  },
  status: 'idle',
  error: null,
}
export const registerUserSlice = createSlice({
  name: 'registerUser',
  initialState,
  reducers: {
    logoutReducer: (state) => ({
      ...state,
      status: 'idle',
      data: {
        name: '',
        email: '',
        password: '',
      },
    }),
    removeError: (state) => ({
      ...state,
      error: null,
    }),
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, action) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(registerUser.fulfilled, (state, action) => ({
        ...state,
        status: 'Success',
        data: {
          name: action.payload.data.name,
          email: action.payload.data.email,
          password: action.payload.data.password,
        },
      }))
      .addCase(registerUser.rejected, (state, action) => ({
        ...state,
        status: 'failed',
       error: action.payload,
      }))
      .addCase(loginUser.pending, (state, action) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(loginUser.fulfilled, (state, action) => ({
        ...state,
        status: 'Success',
        data: {
          name: action.payload.data.name,
          email: action.payload.data.email,
          password: action.payload.data.password,
        },
      }))
      .addCase(loginUser.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.payload,
      }))
  },
})

export const registerUser = createAsyncThunk('user/register', async (data,{rejectWithValue}) => {
  try{

  const { name, email, password } = data
  const response = await axios.post('/api/v1/user/register', {
    name,
    email,
    password,
  })
  return response.data
}
catch(error){
  return rejectWithValue(error.response.data.message)
}
})
export const loginUser = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    const { email, password } = data
  
    try {
      const response = await axios.post('/api/v1/user/login', {
        email,
        password,
      })

      localStorage.setItem('user', JSON.stringify(response.data))

      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data.message)
    }
  },
)
export const { logoutReducer, removeError } = registerUserSlice.actions

export default registerUserSlice.reducer
