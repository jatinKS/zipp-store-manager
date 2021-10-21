import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const Orders = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Products')}
                title="Go to Products"
            />
        </View>
    );
}
 
export default Orders;