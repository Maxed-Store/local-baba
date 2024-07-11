import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const OrderCard2 = () => {
    const navigation =useNavigation();
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ width: '42%' }}>
                    <Text style={styles.txt}>Order Id: <Text style={[styles.txt, { color: '#000000', fontSize: 14, fontWeight: '800' }]}> #1234579785</Text></Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Orders')}>
                    <Text style={[styles.btnText, { color: '#FE4101' }]}>View Detail</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default OrderCard2
const styles = StyleSheet.create({
    card: {
        width: '92%',
        padding: 15,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        borderColor: '#F2F2F2',
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
    },
    btn: {
        padding: 10,
        borderWidth: 1.5,
        backgroundColor: '#FE41011A',
        borderRadius: 8,
        alignItems: 'center',
        borderColor: '#F2F2F2'

    },
    btnText: {
        fontSize: 12,
        color: '#FFFFFF',
        fontFamily: 'Poppins-Regualr'
    },
    txt: {
        fontSize: 12,
        color: '#434343',
        fontFamily: 'Poppins-Regular'
    },
})