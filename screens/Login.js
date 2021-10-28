import React,{ useState } from 'react';
import { StyleSheet, View, Button, Image, Text, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Card, InputEl, ButtonEl } from '../components/elements';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../app/features/users/UserSlice';

const Login = () => {

    const { colors } = useTheme();
    const [email, setEmail] = useState('zippgrocery');
    const [password, setPassword] = useState('Developer@999');
    const dispatch = useDispatch();
    const { isLoading, userInfo, error } = useSelector( state => state.user );

    const onPressHandler = () => {
        dispatch(loginUser({email,password}));
    }
    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background }}>
                <Card style={{ padding : 20 }}>
                    <View style={{width: '80%'}}>
                        <Image 
                            source={require('../assets/logo.png')} 
                            style={{
                                width: 300,
                                height: 75,
                                resizeMode: 'contain' 
                            }}
                        />     
                    </View>
                    
                    <InputEl label='Username / Email' icon='user' value={email} onChangeText={setEmail}/>
                    <InputEl label='Password' icon='lock' value={password} onChangeText={setPassword}/>
                    <ButtonEl label='Login' onPress={onPressHandler} />
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Login;