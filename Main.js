import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './screens/Login';
import Navigation from './components/Navigation';
const Main = () => {
    return (
        <Login />
    );
}
 
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Main;