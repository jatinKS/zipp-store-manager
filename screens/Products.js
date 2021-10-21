import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Text } from 'react-native-paper';
const Products = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
            <Text>Hello world</Text>
        </View>
      );
}
 
export default Products;