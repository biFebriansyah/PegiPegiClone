import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import TiketPlan from './TiketPlan/TiketPlan';
import AppNavigator from '../components/Navigator/AppNavigator';
import Login from '../components/Login/Login';
import Splash from '../components/Splash/Splash';
import Pesawat from './Pesawat/Pesawat';

const SplashNavigator = createStackNavigator({
    splash: { screen: Splash }
}, {
    headerMode: 'none'
})

const stackApp = createStackNavigator({

    tiket: {
        screen: TiketPlan,
    },
    login: {
        screen: Login
    },
    pesawat: {
        screen: Pesawat
    },
    navi: {
        screen: AppNavigator,
        navigationOptions: {
            header: null
        }
    }

}, {
    initialRouteName: 'navi',
    headerMode: 'none'
})

const Routes = createAppContainer(createSwitchNavigator({
    App: {
        screen: stackApp
    },
    Splash: {
        screen: SplashNavigator,
        navigationOptions: {

        }
    }
}, {
    initialRouteName: 'Splash'
}))

export default Routes