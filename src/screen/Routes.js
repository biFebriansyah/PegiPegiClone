import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import TiketPlan from './TiketPlan/TiketPlan';
import AppNavigator from '../components/Navigator/AppNavigator';
import Login from '../components/Login/Login';
import Splash from '../components/Splash/Splash';
import Dtpemesan from '../components/Data Pemesan/Dtpemesan';
const stack = createStackNavigator({

    tiket: {
        screen: TiketPlan,
    },
    dtpemesan: {
        screen: Dtpemesan
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