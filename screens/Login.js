import React from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Card } from '../components/elements';

const Login = () => {

    const { colors } = useTheme();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background }}>
            <Card>
                <View style={{backgroundColor: 'pink', width: '80%'}}>

                    <Image 
                        source={require('../assets/logo.png')} 
                        style={{
                            width: 200,
                            resizeMode: 'contain' 
                        }}/>     
                </View>
                <Text>Hello</Text>
                <Text style={{textAlign: 'center'}}>Hello</Text>
            </Card>
        </View>
    );
}
 
export default Login;