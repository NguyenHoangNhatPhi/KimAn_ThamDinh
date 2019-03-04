import React from 'react';
import {
    DatePickerIOS,
    DatePickerAndroid,
    Platform
} from 'react-native';

import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';


class RenionSuccessScreen extends Layout {
    constructor(props) {
        super(props);
    }


}

const mapStateToProps = state => ({
    isLoadingRequestReunion: state.app.isLoadingRequestReunion,
    messageRequestReunion: state.app.messageRequestReunion,
    requestSucces: state.app.requestSucces
})

export default connectRedux(mapStateToProps, RenionSuccessScreen);