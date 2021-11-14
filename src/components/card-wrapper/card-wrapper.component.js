import React from "react";
import Card from "../card/card.component";
import './card-wrapper.styles.css';
import { useSelector } from 'react-redux';
const CardWrapper = () => {
   
    const users =useSelector(state=>state.user);
    
    const isAdmin=useSelector(state=>state.auth.isAdmin);

    return <div className="CardWrapper">
        {
         isAdmin?
            users.map((user) => {
                return <Card user={user} key={user.id}  />
            })
            :
          <h1>Welcome User!</h1>

        }
    </div>;
}

export default CardWrapper;