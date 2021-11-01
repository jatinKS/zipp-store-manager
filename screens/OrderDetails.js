import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const OrderDetails = ({ navigation, route }) => {
    const orderId = route.params.order.id;
    return (
        <View style={styles.container}>
            <Text>Order Details {orderId} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default OrderDetails;