import React from 'react';
import {
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';


import {
    ContactUsScreen,
    ClassReunionScreen,
    OtherLamuniScreen,
    HomePageScreen,
    ChatScreen,
    ProfileScreen,
    SettingScreen,
    ChangePasswordScreen,
    EventsScreen,
    NewsScreen,
    GivingScreen,
    MessagingScreen,
    ListChatScreen,
    UseFulInfoScreen,
    RenionSuccessScreen
} from '../screens';

import Configs from '../configs';
import SideMenu from '../screens/SideMenu';

const SettingStack = createStackNavigator({
    ChangePassword: ChangePasswordScreen,
    Profile: ProfileScreen,
    Setting: SettingScreen,
}, {
        initialRouteName: "Setting",
        headerMode: 'none',
        transitionConfig: getSlideFromRightTransition,
    });
const MessagingStack = createStackNavigator({
    Messaging: MessagingScreen,
    OtherLamuni: OtherLamuniScreen,
    Chat: ChatScreen,
    ListChat: ListChatScreen
}, {
        initialRouteName: "Messaging",
        headerMode: 'none',
        transitionConfig: getSlideFromRightTransition,
    });

const ReunionStack = createStackNavigator({
    ClassReunion: ClassReunionScreen,
    RenionSuccess: RenionSuccessScreen
}, {
        initialRouteName: "ClassReunion",
        headerMode: 'none',
        transitionConfig: getSlideFromRightTransition,
    });

const MainStack = createDrawerNavigator({
    ContactUs: ContactUsScreen,
    HomePage: HomePageScreen,
    Events: EventsScreen,
    Settings: SettingStack,
    News: NewsScreen,
    Giving: GivingScreen,
    Messaging: MessagingStack,
    UseFul: UseFulInfoScreen,
    ClassReunion: ReunionStack
}, {
        initialRouteName: "HomePage",
        contentComponent: SideMenu,
    }
);


export default MainStack;
