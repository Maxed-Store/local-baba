import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import MyButton from '../components/MyButton'
const Location = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../images/location.png')} />
            <View style={{ width: '90%', alignItems: 'center', marginVertical: 15 }}>
                <Text style={styles.title}>Allow location access</Text>
                <Text style={styles.desc}>Local Baba will access your location</Text>
            </View>
            <MyButton title={'Access location'} onPress={()=>navigation.navigate('FindOrder')}/>
        </View>
    )
}
export default Location
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
        fontFamily: 'Poppins-Regular',
        color: '#98A0A0'
    },
}) 