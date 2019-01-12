import React from 'react';
import {
    View,
    Image,
    TextInput
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { GiftedChat } from '../../components/react-native-gifted-chat';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import EmojiPicker from '../../components/Emoji';

import { HeaderScreen, Text, ButtonSubmit, TextInputCustom, Button } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';

const USER_GRADUATION = require('../../resources/graduation.png');
const CHAT = require('../../resources/chat.png');

export default class Layout extends React.Component {


    render() {
        const { value, visibleEmoji } = this.state;
        return (
            <View style={styles.container}>
                <HeaderScreen
                    navigation={this.props.navigation}
                />
                <View style={styles.containerContent} >
                    <GiftedChat
                        messages={this.state.messages}
                        onSend={this.onSend}
                        user={{
                            _id: 1,
                        }}
                        onInputTextChanged={this.onChangeMessage}
                        text={value}
                        showEmotion={this.showshowEmotion}
                        hideEmoji={this.hideEmoji}
                    />
                        <EmojiPicker
                            ref={this.emojiRef}
                            onPick={this.addEmoji}
                        />

                </View>
            </View>
        );
    }
}