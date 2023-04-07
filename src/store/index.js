import { createSlice, createStore } from '@reduxjs/toolkit';
// import { configureStore  } from '@reduxjs/toolkit';

const initState = { value: 0 };

//
const counterSlice = createSlice({
  name: 'counter',
  initState: initState,
  reducers:{
    increase: (state , action) =>{
      state.value +=  action.payload;
    },
    decrease: (state , action) =>{
      state.value -=  action.payload;
    },
  }
})
//
// export default configureStore({
//   name: 'counter',
//     initState: initState,
//     reducers:{
//       increase: (state , action) =>{
//         state.value +=  action.payload;
//       },
//       decrease: (state , action) =>{
//         state.value -=  action.payload;
//       },
//     }
//   })



//
const store = createStore(counterSlice.reducer);
export const {increase , decrease } = counterSlice.actions
export default store;
//