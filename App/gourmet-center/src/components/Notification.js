import React, { Component } from 'react';
import { ToastNotification } from 'carbon-components-react';

import './Notification.scss';

class Notification extends Component {
    render() {
        return (
            <ToastNotification 
                className="toast" 
                {...this.props}
            />
        );
    }
}

export default Notification;