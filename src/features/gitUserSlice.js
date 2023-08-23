import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData =createAsyncThunk("gitUsers",async()=>{
    const response =await fetch ("https://api.github.com/users")
    const results = response.json();
    return results;
})

export const gitUser = createSlice({
    name: "gitUser",
    initialState:{
        users:[],
        loading : false,
        error : null,
        // email : "",
    },
    // reducers: {
    //     setEmail: (state, action) => {
    //       state.email = action.payload;
    //     },
    // },
    extraReducers : {
        [getAllData.pending]: (state)=>{
            state.loading = true;
        },
        [getAllData.fulfilled]: (state,action)=>{
            state.loading = false;
            state.users =action.payload;
        },
        [getAllData.rejected]: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
    },
});
// export const { setEmail } = gitUser.actions;
export default gitUser.reducer;











