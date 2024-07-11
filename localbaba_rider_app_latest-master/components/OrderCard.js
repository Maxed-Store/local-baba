import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
const OrderCard = () => {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ width: '42%' }}>
                   <Text style={styles.txt}>Order Id: <Text style={[styles.txt, { color: '#000000', fontSize: 14 }]}> 1234579785</Text></Text>
                </View>
                <View style={styles.btn}><Text style={[styles.btnText, { color: '#FE4101' }]}>Delivered</Text></View>
            </View>
            <View style={{marginTop:5}}>
                <View style={{ flexDirection: 'row'}}>
                    <Image style={styles.map} source={require('../images/spoon.png')} />
                    <View>
                    <Text style={styles.title}>Pickup</Text>
                    <Text style={[styles.title,{fontFamily:'Poppins-Medium'}]}>Pizza Hut</Text>
                    <Text style={styles.txt}>street # 141 Delhi</Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                <View style={{ flexDirection: 'row'}}>
                    <Image style={styles.map} source={require('../images/spoon.png')} />
                    <View>
                    <Text style={styles.title}>Pickup</Text>
                    <Text style={[styles.title,{fontFamily:'Poppins-Medium'}]}>Pizza Hut</Text>
                    <Text style={styles.txt}>street # 141 Delhi</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default OrderCard
const styles = StyleSheet.create({
    card: {
        width: '90%',
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
        elevation: 2,
    },
    line:{
        width:2,
        height:20,
        marginLeft:10,
        backgroundColor:'#CBCBCB'
    },
    btn: {
        width: 80,
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
        color: '#949494',
        fontFamily: 'Poppins-Regular'
    },
    title: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Poppins-SemiBold'
    },
    map: {
        width: 21,
        height: 21,
        resizeMode: 'contain',
        marginRight: 10
    }
})