import React from "react";
import Card from "../card/card.component";
import './card-wrapper.styles.css';

const CardWrapper = (props) => {
    const { users } = props;
    return <div className="CardWrapper">
        {
            // users.map((user) => {
            //     return <Card user={user} key={user.id} deleteUser={props.deleteUser} />
            // })

        }
    </div>;
}

export default CardWrapper;