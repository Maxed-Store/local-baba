import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
const CartCard = ({ title, image }) => {
    const [counter, setCounter] = useState(1);
    const handleIncrement = () => {
        setCounter(counter + 1);
    };
    const handleDecrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.img} source={image} />
            <View style={{ marginHorizontal: 10 }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>Waroenk kita</Text>
                <Text style={{ fontSize: 16, color: '#7B6F72', fontFamily: 'Poppins-SemiBold' }}>67QR</Text>
            </View>
            <View style={styles.qr}>
                <TouchableOpacity style={[styles.btn, { backgroundColor: '#CD201F1A' }]} onPress={handleDecrement}>
                    <Image style={{ height: 10, width: 10, resizeMode: 'contain' }} source={require('../images/minus.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: '#181818', fontFamily: 'Poppins-Medium' }}>{counter}</Text>
                <TouchableOpacity style={styles.btn} onPress={handleIncrement}>
                    <Image style={{ height: 10, width: 10, resizeMode: 'contain' }} source={require('../images/plus.png')} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}
export default CartCard
const styles = StyleSheet.create({
    container: {
        width: '97%',
        borderRadius: 16,
        padding: 10,
        paddingVertical: 15,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf:'center',
        marginVertical: 8,
        elevation: 1.5,
    },
    title: {
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
        color: '#09051C',
    },
    desc: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#3B3B3B',
    },
    img: {
        width: 85,
        height: 85,
        resizeMode: 'contain'
    },
    qr: {
        width: '28%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 5,
        marginHorizontal: 10,
        paddingVertical: 7
    },
    btn: {
        width: 30,
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FE4101'
    },
    btnText: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: '#FE4101',
        alignSelf: 'center',

    }
})