import React from 'react';

import Layout from './layout';

class OtherLamuniScreen extends Layout {
    constructor(props) {
        super(props);

        this.emailInputRef = React.createRef();

        this.resetPassword = this.resetPassword.bind(this);
        this.gotoContactScreen = this.gotoContactScreen.bind(this);
    }

    resetPassword() {
        alert('ddd')
    }

    gotoContactScreen() {
        this.props.navigation.navigate('ContactUs');
    }


}


export default OtherLamuniScreen;