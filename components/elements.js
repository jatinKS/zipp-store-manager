import React from 'react';
import { 
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    Image
} from 'react-native';
import { useTheme } from 'react-native-paper';
import { FontAwesome, Octicons, Feather } from '@expo/vector-icons';
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
        <TouchableOpacity style={{...styles.buttonEl,backgroundColor: elColor}} onPress={onPress}>
            <Text style={styles.buttonElText}>{label}</Text>
        </TouchableOpacity>
    );
}

const ProductEl = ({ product, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Card style={styles.productWrap}>
                <View style={styles.productWrapIn}>
                    <View style={styles.productImgWrap}>
                        <Image resizeMode="stretch" source={{uri:product.image}} style={styles.productImg} />
                    </View>
                    <View style={{ justifyContent: 'space-evenly', paddingHorizontal: 15, flex: 1}}>
                        <View style={{flexDirection:'row' }}>
                            <Text style={{fontSize: 16, fontWeight: '700', color: '#494949', flexWrap: 'wrap' }}>{product.name}</Text>
                        </View>
                        <Text>
                            <Text style={{color: '#727272', fontWeight: '600'}}>Price: </Text>
                            <Text style={{color: '#9e9e9e', fontWeight: '600'}}>${product.price.toFixed(2)}</Text>
                        </Text>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
}

const OrderEl = ({order, onPress }) => {
    //order.items
    let orderItemDetails = order.items.map(item=>item.name+' X '+item.quantity);
    orderItemDetails = orderItemDetails.toString().substring(0,100);

    /* 
        processing
        completed
        pending
    */
    return (
        <TouchableOpacity onPress={onPress}>
            <Card style={styles.productWrap}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{fontWeight: '700', fontSize: 17, color: '#494949'}}>#{order.orderId}</Text>
                    <View style={{padding: 5, borderRadius: 10,backgroundColor: 'green'}}>
                        <Text style={{color: '#fff', fontSize: 12}}>{order.status}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', padding: 5, marginVertical: 5, borderBottomWidth: 0.5, borderColor: '#e2e2e2'}}>
                    <Octicons name="package" size={20} color="black" />
                    <View style={{flex: 1, flexDirection: 'row', paddingLeft: 10 }}>
                        <Text style={{ color: '#9e9e9e', flexWrap: 'wrap', fontSize: 15}}>{orderItemDetails}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', padding: 5}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Feather name="clock" size={20} color="black" />
                        <Text style={{ color: '#9e9e9e', fontSize: 15, paddingLeft: 10}}>{order.time}</Text>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
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
    },
    productWrap: {
        marginHorizontal: 15,
        marginVertical: 10,
        padding: 7,
        borderRadius: 7
    },
    productWrapIn: {
        flexDirection: 'row'
    },
    productImgWrap: {
        elevation: 5,
        
        width:75,
        height:75,
        borderRadius: 100,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 1.84,
        
    },
    productImg: {
        alignSelf: 'center',
        width:75,
        height:75,
        borderRadius: 100,
    }
});
export { Card, InputEl, ButtonEl, ProductEl, OrderEl };