import React from 'react';
import Header from '../header/header.component';
import CardWrapper from '../card-wrapper/card-wrapper.component';
import Sidebar from '../sidebar/sidebar.component';
import { useDispatch } from 'react-redux';
import { getusersAsync } from "../../redux/usersSlice"
import { useEffect } from 'react';

function GetUsers() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getusersAsync());
    }, [dispatch])

    return (
        <div className="getUsers" style={{ backgroundColor: " rgba(107, 185, 240, 1)", height: "100vh" }}>
            <Header />
            <CardWrapper />
            <Sidebar />
        </div>
    )
}

export default GetUsers;
