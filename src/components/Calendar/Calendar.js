import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import Color from '../../../Global/style/Color';
import { Header } from 'native-base';
import IconAnt from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

export class Calendar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            seletedDate: null
        }
        this.goBack = this.goBack.bind(this);
        this.CalendarOnPress = this.CalendarOnPress.bind(this);
    }

    CalendarOnPress(day) {
        const dt = moment(day.dateString, "YYYY-MM-DD")
        const days = dt.format("dddd")
        const month = dt.format("MMMM")
        const year = dt.format("YYYY")
        const date = days + month
        console.log(date)
    }

    goBack() {

        const { goBack } = this.props.navigation;
        goBack();
    }

    render() {
        LocaleConfig.locales['fr'] = {
            monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
            monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
            dayNames: ['Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu', 'Minggu'],
            dayNamesShort: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
            today: 'Aujourd\'hui'
        };
        LocaleConfig.defaultLocale = 'fr';
        return (
            <>
                <Header
                    androidStatusBarColor={Color.status_second}
                    style={style.Header}>
                    <IconAnt name="arrowleft" size={24} color="#FFE0D5" onPress={this.goBack} style={style.Icon} />
                    <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>
                        Titel Pesanan Here
                    </Text>
                </Header>
                <CalendarList
                    onDayPress={(month) => this.CalendarOnPress(month)}
                    scrollEnabled={true}
                    pastScrollRange={12}
                    theme={{
                        todayTextColor: Color.primary,
                        selectedDayBackgroundColor: '#E86407',
                        'stylesheet.calendar.header': {
                            header: {
                                justifyContent: 'flex-start'
                            }
                        }
                    }}
                />
            </>
        )
    }
}

const style = StyleSheet.create({
    Header: {
        backgroundColor: Color.header_second,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Icon: {
        position: 'absolute',
        left: 0,
        marginLeft: 10,
    },
})

export default Calendar
