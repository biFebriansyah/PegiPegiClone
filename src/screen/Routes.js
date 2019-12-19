import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import TiketPlan from './TiketPlan/TiketPlan';
import AppNavigator from '../components/Navigator/AppNavigator';

const stack = createStackNavigator({
    tiket: {
        screen: TiketPlan,

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

const Routes = createAppContainer(stack)

export default Routes