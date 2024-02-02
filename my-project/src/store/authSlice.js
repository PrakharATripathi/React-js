import { createSlice} from '@reduxjs/toolkit';


const instialState = {
    status:false,
    userData:null
}

const authSlice = createSlice({
    name:"auth",
    instialState,
    reducers: {
        login : (state,action)=>{
            state.status =true;
            state.useData = action.payload.userData
        },
        logout:(state)=>{
            state.status = false;
            state.useData=null;
        }
    }
})
export const {login,logout} = authSlice.actions;
export default authSlice.reducer;