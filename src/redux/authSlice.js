import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const loginUserAsync=createAsyncThunk('auth/loginUserAsync',async(payload)=>{
    console.log(payload);
    const response=await fetch("https://reqres.in/api/login",{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if(response.ok){
        const tokenObject=await response.json();
        if(payload.email==="emma.wong@reqres.in")
        return {...tokenObject,isAdmin:true};
        else 
        return {...tokenObject,isAdmin:false};
    }

    else{
        alert("Invalid Credentials");
        return {token:""}
    }

});



export const authSlice=createSlice(
    {
   
    name:"auth",
    initialState:{isLoggedIn:false,token:""},
    reducers:{
        logout:(state,action)=>{
            
            return {isLoggedIn: action.payload.isLoggedIn,token:""};
        }
    },
    extraReducers:{
    [loginUserAsync.fulfilled]:(state,action)=>{
        if(action.payload.token){
        const setLoggedIn={isLoggedIn:true,token:action.payload.token,isAdmin:action.payload.isAdmin    }
        return setLoggedIn;}
        else{
            return state;
        }
    }
    }
    }
);


export const {logout}=authSlice.actions;

export default authSlice.reducer;