import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Orders from '../screens/Orders';
import Products from '../screens/Products';

const Drawer = createDrawerNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Orders">
                <Drawer.Screen name="Orders" component={Orders} />
                <Drawer.Screen name="Products" component={Products} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;