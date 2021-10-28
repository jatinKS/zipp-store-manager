import React,{ useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './screens/Login';
import Navigation from './components/Navigation';
import { useSelector, useDispatch } from 'react-redux';

import { loginFromStorage } from './app/features/users/UserSlice';
const Main = () => {
    const dispatch = useDispatch();
    const { isLoading, userInfo, error } = useSelector( state => state.user );

    useEffect(()=>{
        dispatch(loginFromStorage());
    },[]);

    return (
        <View style={styles.container}>
            {!userInfo && <Login />}
            {userInfo && <Navigation />}
        </View>
    );
}
 
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Main;