import React from 'react';
import {
    View,
   Dimensions,
   ActivityIndicator
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { GiftedChat } from '../../components/react-native-gifted-chat';
// import EmojiPicker from '../../components/Emoji';

import { HeaderScreen, BackgroundView, Loading } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';

const USER_GRADUATION = require('../../resources/graduation.png');
const CHAT = require('../../resources/chat.png');

const {width,height} = Dimensions.get('window');

export default class Layout extends React.Component {

    renderLoadMoreMessage = () => {
        if(this.props.isLoadingEarlier){
            return(
                <View style={{width,alignItems:'center'}} >
                    <ActivityIndicator 
                        size={"large"}
                        color="#fff"
                    />
                </View>
            );
        }
       return <View />
    }

    render() {
        const { value, visibleEmoji } = this.state;
        return (
            <BackgroundView>
                <View style={styles.container}>
                    <HeaderScreen
                        navigation={this.props.navigation}
                    />
                    <View style={styles.containerContent} >
                        <GiftedChat
                            messages={this.props.messages}
                            onSend={this.onSend}
                            user={{
                                _id: 1,
                            }}
                            onInputTextChanged={this.onChangeMessage}
                            text={value}
                            showEmotion={this.showshowEmotion}
                            hideEmoji={this.hideEmoji}
                            // onLoadEarlier={() => this.loadmoreMessage()}
                            // loadEarlier={true}
                            // isLoadingEarlier={this.props.isLoadingEarlier}
                            listViewProps={
                                {
                                    onEndReached: this.loadmoreMessage,
                                    onEndReachedThreshold: 100,
                                    ListFooterComponent:this.renderLoadMoreMessage
                                }
                            }
                        />
                        {/* <EmojiPicker
                            ref={this.emojiRef}
                            onPick={this.addEmoji}
                        /> */}
                    </View>
                </View>
                <Loading visible={this.props.loadingGetHistory} />
            </BackgroundView>
        );
    }
}