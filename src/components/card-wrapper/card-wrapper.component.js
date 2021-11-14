import React from "react";
import Card from "../card/card.component";
import './card-wrapper.styles.css';
import { useSelector } from 'react-redux';
const CardWrapper = () => {
   
    const users =useSelector(state=>state.user);
  
    return <div className="CardWrapper">
        {
         
            users.map((user) => {
                return <Card user={user} key={user.id}  />
            })

        }
    </div>;
}

export default CardWrapper;