import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
const SellCard = ({ title, image }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.img} source={image} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.qr}>
                <Text style={styles.desc}>10QR</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Cart +</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}
export default SellCard
const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        backgroundColor: '#F8F8F8',
        marginVertical: 8,
        margin: 8,
    },
    title: {
        fontSize: 13,
        fontFamily: 'Poppins-Medium',
        color: '#1D1617',
        alignSelf: 'center',
    },
    desc: {
        fontSize: 11,
        fontFamily: 'Poppins-Regular',
        color: '#7B6F72',
        alignSelf: 'center',
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    qr: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 5,
        paddingVertical: 7
    },
    btn: {
        width: 50,
        padding: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FE41011A'
    },
    btnText: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: '#FE4101',
        alignSelf: 'center',

    }
})