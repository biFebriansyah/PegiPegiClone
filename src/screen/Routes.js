import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import TiketPlan from './TiketPlan/TiketPlan';
import AppNavigator from '../components/Navigator/AppNavigator';
import Login from '../components/Login/Login';
<<<<<<< HEAD
import Pesawat from  '../screen/Pesawat/Pesawat'
import Splash from '../components/Splash/Splash';
=======
import SplashNavigator from '../components/Splash/Splash';
>>>>>>> 48847a7e1648fbe503560ec053f1ce5f1c4f531c
import Dtpemesan from '../components/Data Pemesan/Dtpemesan';

const stackApp = createStackNavigator({

    tiket: {
        screen: TiketPlan,
    },
    dtpemesan: {
        screen: Dtpemesan
    },
    login: {
        screen: Login
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
        screen: Splash,
        navigationOptions: {

        }
    }
}, {
    initialRouteName: 'Splash'
}))

export default Routes