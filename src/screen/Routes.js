import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import TiketPlan from './TiketPlan/TiketPlan';
import AppNavigator from '../components/Navigator/AppNavigator';
import Splash from '../screen/splash/Splash';

const stack = createStackNavigator({
    tiket: { screen: TiketPlan },
    navi: { screen: AppNavigator },
    splash: {screen: Splash}
}, {
    initialRouteName: 'splash',
    headerMode: "none"
})

const Routes = createAppContainer(stack)

export default Routes