import React from 'react';
import Header from '../header/header.component';
import CardWrapper from '../card-wrapper/card-wrapper.component';
import Sidebar from '../sidebar/sidebar.component';

function GetUsers() {
    return (
        <div className="getUsers">
            <Header />
            <CardWrapper />
            <Sidebar />
        </div>
    )
}

export default GetUsers;
