import React from 'react';
import {
    View,
    Text,

} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Button, HeaderScreen, AutoGrowingTextInput } from '../../components';
import { scaleSzie } from '../../utils/func';
import styles from './style';
import Configs from '../../configs';

export default class Layout extends React.Component {

    renderEditProfile() {
        const { disableEditProfile } = this.state;
        if (disableEditProfile) {
            return (
                <View style={{ width: Configs.FULL_WIDTH, flexDirection: 'row', height: scaleSzie(75) }} >
                    <Button onPress={this.editProfile} style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} >
                        <Feather name="edit" size={16} color={Configs.ORANGE} />
                        <Text style={[styles.textSetting, {
                            marginTop: 0, marginLeft: scaleSzie(8), color: Configs.ORANGE, fontWeight: '400',
                            textDecorationLine: "underline"
                        }]} >
                            Edit Profile
                        </Text>
                    </Button>
                    {/* ====== Line ======= */}
                    <View style={{ width: 1, paddingVertical: 25 }} >
                        <View style={{ flex: 1, backgroundColor: 'rgb(147,147,147)' }} />
                    </View>
                    <Button onPress={this.gotoChangePassword} style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} >
                        <Entypo name="key" size={16} color={Configs.ORANGE} />
                        <Text style={[styles.textSetting, {
                            marginTop: 0, marginLeft: scaleSzie(8), color: Configs.ORANGE,
                            fontWeight: '400', textDecorationLine: "underline"
                        }]} >
                            Change Password
                        </Text>
                    </Button>
                </View>
            );
        }
        return (
            <View style={{ width: Configs.FULL_WIDTH, flexDirection: 'row', height: scaleSzie(75) }} >
                <Button onPress={this.cancleEditProfile} style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} >
                    <Ionicons name="md-undo" size={16} color={Configs.ORANGE} />
                    <Text style={[styles.textSetting, {
                        marginTop: 0, marginLeft: scaleSzie(8), color: Configs.ORANGE, fontWeight: '400',
                        textDecorationLine: "underline"
                    }]} >
                        Cancel
                    </Text>
                </Button>
                {/* ====== Line ======= */}
                <View style={{ width: 1, paddingVertical: 25 }} >
                    <View style={{ flex: 1, backgroundColor: 'rgb(147,147,147)' }} />
                </View>
                <Button onPress={this.submitEditProfile} style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} >
                    <Feather name="save" size={16} color={Configs.ORANGE} />
                    <Text style={[styles.textSetting, {
                        marginTop: 0, marginLeft: scaleSzie(8), color: Configs.ORANGE,
                        fontWeight: '400', textDecorationLine: "underline"
                    }]} >
                        Save
                    </Text>
                </Button>
            </View>
        );
    }

    render() {
        const { disableEditProfile,
            // fullname, email, graduationYear 
        } = this.state;
        const { fullname, email, graduationYear } = this.props.profile;
        return (
            <View style={styles.container}>
                <HeaderScreen
                    navigation={this.props.navigation}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text style={styles.textSetting} >
                        My Profile
                    </Text>
                    {
                        !disableEditProfile ? <View /> :
                            <Button onPress={this.logOut} style={{ marginRight: scaleSzie(16), alignItems: 'flex-end', flexDirection: 'row' }} >
                                <Feather name="log-out" size={20} color={Configs.ORANGE} />
                                <Text style={styles.textLogout} >
                                    LogOut
                        </Text>
                            </Button>
                    }

                </View>

                <View style={{ height: scaleSzie(80) }} >
                    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: scaleSzie(16) }} >
                        <AutoGrowingTextInput
                            ref={this.fullnameRef}
                            placeholder={'Full Name'}
                            value={fullname}
                            disable={disableEditProfile}
                        />
                    </View>
                </View>
                <View style={styles.containerContent} >
                    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: scaleSzie(16) }} >
                        <AutoGrowingTextInput
                            placeholder={'Email'}
                            value={email}
                            disable={true}
                        />
                    </View>
                    <View style={styles.line} />
                    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: scaleSzie(16) }} >
                        <AutoGrowingTextInput
                            ref={this.graduationYearRef}
                            placeholder={'Graduation Year'}
                            value={`${graduationYear}`}
                            disable={disableEditProfile}
                            maxLength={4}
                            keyboardType="numeric"
                            disable={true}

                        />
                    </View>
                </View>
                {this.renderEditProfile()}
            </View>
        );
    }
}
