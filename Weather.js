import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clear:{
        iconName : "weather-sunny",
        gradient : ["#FF7300", "#FEF253"],
        title : "맑음",
        subTitle : "나가서 놀아요 빨리 당장 나우"
    },
    Thunderstorm:{
        iconName : "weather-lightning",
        gradient : ["#373B44", "#4286f4"]
    },
    Drizzle:{
        iconName : "weather-hail",
        gradient : ["#89F7FE", "#66A6FF"]
    },
    Rain:{
        iconName : "weather-rainy",
        gradient : ["#00C6FB", "#005BEA"]
    },
    Snow:{
        iconName : "weather-snowy",
        gradient : ["#7DE2FC", "#B9B6E5"]
    },
    Atmosphere:{
        iconName : "weather-hail",
        gradient : ["#89F7FE", "#66A6FF"]
    },
    Clouds:{
        iconName : "weather-cloudy",
        gradient : ["#D7D2CC", "#304352"]
    },
    Haze:{
        iconName : "weather-hail",
        gradient : ["#4DA0B0", "#D39D38"]
    },
    Mist:{
        iconName : "weather-hail",
        gradient : ["#4DA0B0", "#D39D38"]
    },
    Dust:{
        iconName : "weather-hail",
        gradient : ["#4DA0B0", "#D39D38"]
    }
}

export default function Weather({temp, condition}){
    return (
    <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"/>
            <Text style={styles.temp}>{temp}</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
        </View>
    </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    temp:{
        fontSize:42,
        color:'white'
    },
    halfContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'white',
        fontSize:44,
        fontWeight:"300",
        marginBottom:10
    },
    subTitle:{
        color:'white',
        fontWeight:"600",
        fontSize:24
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start"
    }
});