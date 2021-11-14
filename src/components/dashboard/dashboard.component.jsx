import React from 'react';
import Header from '../header/header.component';
import CardWrapper from '../card-wrapper/card-wrapper.component';
import Sidebar from '../sidebar/sidebar.component';
import { useDispatch } from 'react-redux';
import { getusersAsync } from "../../redux/usersSlice"
import { useEffect } from 'react';
import "./dashboard.styles.css";

function Dashboard() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getusersAsync());
    }, [dispatch])

    return (
        <div className="Dashboard" >
            <Header />
            <div className="Dashboard-content">
                <CardWrapper />
            </div>
            <Sidebar />
        </div>
    )
}

export default Dashboard;
