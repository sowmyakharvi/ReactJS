import React from "react";

const ContactCard = (props) =>{
    const { id, name, email} = props.contact;
return(
    <div className="item">
                <div className="header">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                <i className="trash alterate outline icon"></i>
                
            </div>
);
};

export default ContactCard;