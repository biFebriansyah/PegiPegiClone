import { createAppContainer } from 'react-navigation';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFond from 'react-native-vector-icons/Foundation';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import IconAntypo from 'react-native-vector-icons/Entypo';

import Home from '../../screen/Home/Home';
import Pesan from '../../screen/Pesan/Pesan';
import Inbox from '../../screen/Inbox/Inbox';
import Profile from '../../screen/Profile/Profile';
import Listbandara from '../ListBandara/Listbandara';

const Navigator = createMaterialTopTabNavigator({

    home: {
        screen: Home,
        navigationOptions: () => ({
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <IconFond name='home' color={tintColor} size={24} />
            )
        })
    },
    pesan: {
        screen: Pesan,
        navigationOptions: {
            tabBarLabel: 'Pesan',
            tabBarIcon: ({ tintColor }) => (
                // <IconAnt name='profile' color={tintColor} size={24} />
                <IconIon name='ios-list-box' color={tintColor} size={24} />
            )
        }
    },
    inbox: {
        screen:Inbox,
        navigationOptions: {
            tabBarLabel: 'Inbox',
            tabBarIcon: ({ tintColor }) => (
                <IconAntypo name='mail' color={tintColor} size={24} />
                // <IconAnt name='mail' color={tintColor} size={24} />
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
        },
        iconStyle: {
            margin: 0,
            alignItems: 'center'
        },
        tabStyle: {
            margin: 0,
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