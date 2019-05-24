import React from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import 'react-notifications/lib/notifications.css';

const Notification = props => {
    const message = props.message ? props.message : 'NA';
    const timeOut = props.timeOut ? props.timeOut : 3000;
    function createNotification(type) {
        switch (type) {
            case 'info':
                NotificationManager.info(props.message ? props.message : 'NA');
                break;
            case 'success':
                NotificationManager.success(message, 'Success');
                break;
            case 'warning':
                NotificationManager.warning(message, timeOut);
                break;
            case 'error':
                NotificationManager.error(message, 'Error!', timeOut);
                break;
            default: break;
        };
    };
    createNotification(props.type);
    return <NotificationContainer />
}

export default Notification;