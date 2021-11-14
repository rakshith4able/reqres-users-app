import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const getusersAsync=createAsyncThunk('users/getUsersAsync',async ()=>{
    const response=await fetch("https://reqres.in/api/users?page=1");
    if(response.ok){
       const  users=await response.json();
       return users.data;
    }
});

export const addUserAsync=createAsyncThunk('users/addUserAsync',async(payload)=>{
    const response=await fetch("https://reqres.in/api/users",{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if(response.ok){
        const idObject=await response.json();
        const newUser={...payload,id:parseInt(idObject.id) };
        return newUser;
    }



}
);

export const deleteUserAsync=createAsyncThunk("users/deleteUserAsync",async (payload)=>{
    const response=await fetch(`https://reqres.in/api/users/${payload.id}`);
    if(response.ok){
        return payload;
    }

    if(response.status==404){
        return payload;
    }
});

export const usersSlice=createSlice(
    {
        name:"users",
        initialState:[],
        reducers:{
            addUser:(state,action)=>{
                const newUser={
                    id:action.payload.id,
                    email:action.payload.email,
                    first_name:action.payload.first_name,
                    last_name:action.payload.last_name,
                    avatar:action.payload.avatar};
                return state.push(newUser);
            },
            deleteUser:(state,action)=>{
                return state.filter((user)=>user.id!==action.payload.id);
            }
        },
        extraReducers:{
            [getusersAsync.fulfilled]:(state,action)=>{
                return action.payload;
            },
            [deleteUserAsync.fulfilled]:(state,action)=>{
                return  state.filter(user=>user.id!==action.payload.id);
            },
            [addUserAsync.fulfilled]:(state,action)=>{
                console.log(action.payload);
               state.push(action.payload);
            }
        },
    }
);    

export const {addUser}=usersSlice.actions;

export default usersSlice.reducer;