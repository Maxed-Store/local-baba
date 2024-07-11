import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
const Observe = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../images/observe.png')} />
            <View style={{ width: '90%', alignItems: 'center', marginVertical: 15 }}>
                <Text style={styles.title}>Profile under observation</Text>
                <Text style={styles.desc}>“For a safe and enjoyable experience, we review new profiles to prevent spam and fakes.”</Text>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={()=>navigation.goBack()}>
                <Image style={styles.arrow} source={require('../images/backArrow.png')} />
                <Text style={[styles.desc, { fontSize: 15, color: '#FE4101' }]}>Go back</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Observe
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    img: {
        width: 242,
        height: 242,
        marginHorizontal: 5,
        resizeMode: 'contain'
    },
    arrow: {
        width: 16,
        height: 16,
        marginHorizontal: 5,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        lineHeight: 30,
        fontFamily: 'Poppins-Bold',
        color: '#434343'
    },
    desc: {
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: 24,
        marginVertical:10,
        fontFamily: 'Poppins-Regular',
        color: '#98A0A0'
    },
})