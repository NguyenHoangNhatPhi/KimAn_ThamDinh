import React from 'react';
import {
    createStackNavigator,
    createSwitchNavigator,
    createNavigationContainer,
    createBottomTabNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Feather';

import {
    HomeScreen,
    SignInScreen,
    OtherScreen,
    LoadingScreen
} from '../screens';

import HomeStack from './HomeStack';

const AppStack = createBottomTabNavigator({
    Home: HomeStack,
    Other: OtherScreen
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `home`;
                } else if (routeName === 'Other') {
                    iconName = `settings`;
                }

                return <Ionicons name={iconName} size={!focused ? 20 : 25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            safeAreaInset: {
                bottom: 'always',
                top: 'never'
            },
            tabStyle: {
            },
            style: {
                height: 58
            },
            labelStyle: {
                fontSize: 12,
                marginTop: 0,
                marginBottom: 5
            },
        },
    }
);

const AuthStack = createStackNavigator({
    Sigin: SignInScreen
}, {
        navigationOptions: {
            title: 'Welcome'
        }
    }
);




export default createNavigationContainer(createSwitchNavigator({
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack,
},
    {
        initialRouteName: 'App'
    }

))
