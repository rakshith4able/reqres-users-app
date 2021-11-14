import React from 'react';
import { useSelector } from 'react-redux';
import './sidebar.styles.css';

function Sidebar() {
    const isAdmin = useSelector(state => state.auth.isAdmin);
    return (
        <div className="Sidebar">
            <h2>Sidebar</h2>
            <h2>{isAdmin ? "Admin" : "User"}</h2>
        </div>
    )
}

export default Sidebar
