import React from 'react';
import {MyP} from './Notification.styled'
const Notification = ({notice}) => {
    return (
        <MyP>{notice}</MyP>
    );
}

export default Notification;