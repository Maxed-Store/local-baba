import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
const NotificationCard = () => {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ width: '40%' }}>
                    <Text style={[styles.txt, { color: '#000000', fontSize: 14 }]}>Elisa Smith <Text style={styles.txt}>Placed a new order</Text></Text>
                </View>
                <View style={styles.btn}><Text style={[styles.btnText, { color: '#FE4101' }]}>Delivered</Text></View>
                <View style={[styles.btn, { backgroundColor: '#FE4101' }]}><Text style={styles.btnText}>Delivered</Text></View>
            </View>
            <View style={{marginTop:5}}>
                <View style={{ flexDirection: 'row'}}>
                    <Image style={styles.map} source={require('../images/marker2.png')} />
                    <Text style={styles.txt}>street # 141 Delhi</Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ flexDirection: 'row'}}>
                    <Image style={styles.map} source={require('../images/marker2.png')} />
                    <Text style={styles.txt}>street # 141 Delhi</Text>
                </View>
            </View>
        </View>
    )
}
export default NotificationCard
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
        width: 63,
        padding: 6,
        borderWidth: 1.5,
        backgroundColor: '#FE41011A',
        borderRadius: 8,
        alignItems: 'center',
        borderColor: '#F2F2F2'

    },
    btnText: {
        fontSize: 10,
        color: '#FFFFFF',
        fontFamily: 'Poppins-Regualr'
    },
    txt: {
        fontSize: 12,
        color: '#949494',
        fontFamily: 'Poppins-Regular'
    },
    map: {
        width: 21,
        height: 21,
        resizeMode: 'contain',
        marginRight: 10
    }
})