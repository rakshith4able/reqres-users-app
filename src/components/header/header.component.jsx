import React, { useState } from "react";
import useInputState from "../../hooks/useInputState";

import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

import Modal from "react-modal";
import './header.styles.css';


const Header = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useInputState('');
    const [first_name, setFirstName] = useInputState('');
    const [last_name, setLastName] = useInputState('');
    const [avatar, setAvatar] = useInputState('');


    const handleLogout = () => {
        dispatch(logout({ isLoggedIn: false }));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    }



    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (<div className="Header">
        <Modal isOpen={modalIsOpen} className="Modal" overlayClassName="Overlay" onRequestClose={() => setModalIsOpen(false)}>
            <div className="Card-close" onClick={() => { setModalIsOpen(false) }}>X</div>
            <form className="Modal-form" onSubmit={handleSubmit}>
                <input type="text" value={first_name} placeholder="Enter First Name..." onChange={setFirstName} />
                <input type="text" value={last_name} placeholder="Enter Last Name..." onChange={setLastName} />
                <input type="text" value={avatar} placeholder="Enter Avatar URL" onChange={setAvatar} />
                <input type="email" value={email} placeholder="Enter E-mail" onChange={setEmail} />
                <input type="submit" value="Add" />
            </form>
        </Modal >

        <h1 className="Header-heading">Users</h1>

        <div className="Header-buttons">
            <button className="Header-button" onClick={() => { setModalIsOpen(true) }}>Add User</button>
            <button className="Header-logout" onClick={handleLogout}>Log Out</button>
        </div>
    </div>);
}

export default Header;