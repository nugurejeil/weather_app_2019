import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { readDirectoryAsync } from 'expo-file-system';
import {Alert} from 'react-native';

export default class extends React.Component {
  state = {
    isLoading : true
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.setState({isLoading : false});
    } catch (error) {
      Alert.alert("위치를 찾을 수 없습니다", "위치 찾기를 허용해주세요");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading} = this.state;
    return isLoading ? <Loading/> : null;
  }
}
