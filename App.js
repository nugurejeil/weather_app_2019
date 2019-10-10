import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { readDirectoryAsync } from 'expo-file-system';
import {Alert} from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "c40e3bb299d82217b3e7015d58fbfc40";

export default class extends React.Component {
  state = {
    isLoading : true
  }
  getWeather = async(latitude, longitude) => {
    const {
      data: {
      main: {temp},
      weather
    }
  } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    this.setState(
      { isLoading : false, 
        condition : weather[0].main, 
        temp
      });
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords:{latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("위치를 찾을 수 없습니다", "위치 찾기를 허용해주세요");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}
