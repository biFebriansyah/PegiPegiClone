import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import TiketPlan from './TiketPlan/TiketPlan';
import AppNavigator from '../components/Navigator/AppNavigator';
import Login from '../components/Login/Login';
import Splash from '../components/Splash/Splash';

const stack = createStackNavigator({

    tiket: {
        screen: TiketPlan,
    },
    login: {
        screen: Login
    },
    splash: {
        screen: Splash
    },
    navi: {
        screen: AppNavigator,
        navigationOptions: {
            header: null
        }
    }

}, {
    initialRouteName: 'splash',
    headerMode: 'none'
})

const Routes = createAppContainer(stack)

export default Routes