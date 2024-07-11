import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
const ProductCard = ({ title, image }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Image style={styles.img} source={image} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.qr}>
                <Text style={styles.desc}>66QR</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Cart +</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}
export default ProductCard
const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 16,
        padding: 10,
        paddingVertical: 15,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 8,
        elevation: 0.5,
    },
    title: {
        fontSize: 13,
        marginLeft: 20,
        fontFamily: 'Poppins-Medium',
        color: '#1D1617',
        alignSelf: 'center',
    },
    desc: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#7B6F72',
        alignSelf: 'center',
    },
    img: {
        width: 85,
        height: 85,
        resizeMode: 'contain'
    },
    qr: {
        width: '33%',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 5,
        paddingVertical: 7
    },
    btn: {
        width: 60,
        padding: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FE41011A'
    },
    btnText: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: '#FE4101',
        alignSelf: 'center',

    }
})