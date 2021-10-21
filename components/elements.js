import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

const Card = (props) => {
    const { colors } = useTheme();
    return (
        <View style={{ backgroundColor: colors.surface }}>
            {props.children}
        </View>
    );
}
 
export { Card };