import { createAppContainer } from 'react-navigation';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { Text } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


import Home from './Home/Home';
import Pesan from './Pesan/Pesan';
import Inbox from './Inbox/Inbox';
import Profile from './Profile/Profile';

const Navigator = createMaterialTopTabNavigator({

    home: {
        screen: Home,
        navigationOptions: () => ({
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <IconIon name='md-home' color={tintColor} size={24} />
            )
        })
    },
    pesan: {
        screen: Pesan,
        navigationOptions: {
            tabBarLabel: 'Pesan',
            tabBarIcon: ({ tintColor }) => (
                <IconAnt name='profile' color={tintColor} size={24} />
            )
        }
    },
    inbox: {
        screen: Inbox,
        navigationOptions: {
            tabBarLabel: 'Inbox',
            tabBarIcon: ({ tintColor }) => (
                <IconAnt name='mail' color={tintColor} size={24} />
            )
        }
    },
    profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <IconMaterial name='person' size={24} color={tintColor} />
            )
        }
    },
}, {
    initialRouteName: 'home',
    tabBarOptions: {
        pressColor: '#D8D8D8',
        labelStyle: {
            margin: 0,
            fontSize: 8,
            fontWeight: '500',
        },
        iconStyle: {
            margin: 0
        },
        tabStyle: {
            width: 100,
            margin: 0
        },

        activeTintColor: '#F97242',
        inactiveTintColor: '#D8D8D8',
        showIcon: true,
        style: { backgroundColor: '#fff', height: 55, },
        indicatorStyle: {
            backgroundColor: '#F97242',
        }
    },
    tabBarPosition: 'bottom'
})


const AppNavigator = createAppContainer(Navigator)

export default AppNavigator