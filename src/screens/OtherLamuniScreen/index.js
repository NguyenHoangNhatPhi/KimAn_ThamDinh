import React from 'react';

import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';


class OtherLamuniScreen extends Layout {
    constructor(props) {
        super(props);

        this.searchInputRef = React.createRef();

        this.searchUser = this.searchUser.bind(this);
    }

    searchUser() {
        const fullname = this.searchInputRef.current.state.value;
        const {dispatch} = this.props.navigation;

        if(fullname.length === 0){
           this.props.actions.app.setStateMessageSearch();
        }else{
            this.props.actions.app.searchUser(fullname,dispatch);
        }
       
    }

    componentDidUpdate(prevProps, prevState) {
        const { isLoadingSearchUser } = this.props;
        if (!isLoadingSearchUser && isLoadingSearchUser !== prevProps.isLoadingSearchUser && this.props.listSearch.length > 0) {
            this.props.navigation.navigate('ListChat', {
                titleList: 'ALUMNI SEARCH'
            });
        }
    }

    // componentWillUnmount(){
    //     this.props.actions.app.resetStateSearch();
    // }

}


const mapStateToProps = state => ({
    isLoadingSearchUser: state.app.isLoadingSearchUser,
    listSearch: state.app.listSearch,
    messageSearchUserChat: state.app.messageSearchUserChat
})

export default connectRedux(mapStateToProps, OtherLamuniScreen);
