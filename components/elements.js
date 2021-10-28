import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
const Card = (props) => {
    const { colors } = useTheme();
    return (
        <View style={{ ...props.style,backgroundColor: colors.surface }}>
            {props.children}
        </View>
    );
}
 
const InputEl = (props) => {
    const { label, icon, value, onChangeText } = props;
    const { colors } = useTheme();
    const elColor = colors.primary;
    return (
        <View style={{...styles.inputEl, borderBottomColor: elColor}}>
            
            <FontAwesome name={icon} size={24} color={elColor} />
            <TextInput
                placeholder={label}
                style={styles.inputElTi}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const ButtonEl = (props) => {
    const { label, onPress } = props;
    const { colors } = useTheme();
    const elColor = colors.primary;
    return (
        <TouchableOpacity style={{...styles.buttonEl,backgroundColor: elColor}}>
            <Text style={styles.buttonElText}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    elMarginVer: 5,
    elMarginHor: 10,
    inputEl: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        padding: 2,
        marginHorizontal: 5,
        marginVertical: 10
    },
    inputElTi: {
        paddingLeft: 5,
        fontSize: 16,
        flexGrow: 1
    },
    buttonElText: {
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 7
    },
    buttonEl: {
        borderRadius: 5,
        marginHorizontal: 5
    }
});
export { Card, InputEl, ButtonEl };