import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


import TiketPlan from './TiketPlan/TiketPlan';
import AppNavigator from '../components/Navigator/AppNavigator';

import Login from '../components/Login/Login';
import Splash from '../components/Splash/Splash';
import Dtpemesan from '../components/DataPemesan/Dtpemesan';
import Pesawat from '../screen/Pesawat/Pesawat';
import Register from '../components/Register/Register';
import ListBandara from './BandaraPlan/BandaraPlan';
import Bandara2 from '../screen/BandaraPlan2/BandaraPlan';
import Test from './Plane/Plane';
import Pembayaran from '../components/Pembayaran/Pembayaran';
import DetailBayar from '../components/DetailTransfer/TransferMandiri';
import Calendar from '../components/Calendar/Calendar';
import FormData from '../screen/FormData/FormData';
import OrderData from '../components/DataPemesan/Dtpemesan';
import Datapassnger from './DataPenumpang/DataPenumpang';

const stackApp = createStackNavigator({

    tiket: {
        screen: TiketPlan,
    },
    calendar: {
        screen: Calendar,
    },
    formdata: {
        screen: FormData
    },
    orderData: {
        screen: OrderData
    },
    pessanger: {
        screen: Datapassnger
    },
    dtpemesan: {
        screen: Dtpemesan
    },
    bandara2: {
        screen: Bandara2
    },
    login: {
        screen: Login
    },
    pesawat: {
        screen: Pesawat,
        navigationOptions: {
            header: null
        }
    },
    listbandara: {
        screen: ListBandara
    },
    register: {
        screen: Register
    },
    pembayaran: {
        screen: Pembayaran
    },
    detailBayar: {
        screen: DetailBayar
    },
    test: {
        screen: Test
    },
    navi: {
        screen: AppNavigator,
        navigationOptions: {
            header: null
        }
    }

}, {
    initialRouteName: 'navi',
    headerMode: 'none',

})

const Routes = createAppContainer(createSwitchNavigator({
    App: {
        screen: stackApp
    },
    Splash: {
        screen: Splash,
    }
}, {
    initialRouteName: 'Splash'
}))



export default Routes