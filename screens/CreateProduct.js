import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CreateProduct = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Create Products</Text>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default CreateProduct;

