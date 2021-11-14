import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { deleteUserAsync } from "../../redux/usersSlice";

import './card.styles.css';

Modal.setAppElement('#root');

const Card = (props) => {

    const { user } = props;

    const dispatch = useDispatch();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const removeUser = () => {
        dispatch(deleteUserAsync({ id: user.id }));
    };


    return (<div className="Card" >
        <Modal isOpen={modalIsOpen} className="Modal" overlayClassName="Overlay" onRequestClose={() => setModalIsOpen(false)}>
            <div className="Card-close" onClick={() => { setModalIsOpen(false) }}>X</div>
            <div className="Card-avatar">
                <img src={user.avatar} alt=" avatar" />
            </div>
            <h2 className="Card-name">{user.first_name + " " + user.last_name}</h2>
            <p className="Card-email">{user.email}</p>
        </Modal >

        <h2 className="Card-name" onClick={() => { setModalIsOpen(true) }}> {user.first_name + " " + user.last_name}</h2>
        <button className="Card-remove" onClick={removeUser}>Remove</button>
    </div >);

}

export default Card;