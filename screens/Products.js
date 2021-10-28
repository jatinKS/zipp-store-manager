import React,{ useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../app/features/users/UserSlice';

const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userInfo')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
}
  
const Products = ({ navigation }) => {
    const dispatch = useDispatch();
    const logougHandler = () => {
        dispatch(logout());
    }
    useEffect(()=>{
        
    },[]);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
            <Text>.</Text>
            <Button onPress={logougHandler} title="Logout" />
            <Text>Hello world</Text>
        </View>
      );
}
 
export default Products;