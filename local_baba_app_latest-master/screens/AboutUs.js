import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
const AboutUs = () => {
    return (
        <View style={styles.container}>
            <Header title={'About Us'} />
            <Image style={{width:200,height:100,resizeMode:'contain'}} source={require('../images/logo.png')}/>
            <View style={styles.card}>
                <Text style={styles.title}>Heading</Text>
                <Text style={styles.desc}>Mauris, vitae ut et eget aliquam arcu. Nec nibh sapien sollicitudin sed eu. Metus magna eget arcu rhoncus nam elementum, ut adipiscing. Egestas urna nec posuere bibendum proin ipsum, luctus. Diam quam cum in scelerisque auctor. Scelerisque </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>Heading</Text>
                <Text style={styles.desc}>Mauris, vitae ut et eget aliquam arcu. Nec nibh sapien sollicitudin sed eu. Metus magna eget arcu rhoncus nam elementum, ut adipiscing. Egestas urna nec posuere bibendum proin ipsum, luctus. Diam quam cum in scelerisque auctor. Scelerisque </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>Heading</Text>
                <Text style={styles.desc}>Mauris, vitae ut et eget aliquam arcu. Nec nibh sapien sollicitudin sed eu. Metus magna eget arcu rhoncus nam elementum, ut adipiscing. Egestas urna nec posuere bibendum proin ipsum, luctus. Diam quam cum in scelerisque auctor. Scelerisque </Text>
            </View>
        </View>
    )
}
export default AboutUs
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000000',
        marginHorizontal: 10,
        alignSelf: 'flex-start',
        fontFamily: 'Roboto-Bold',
    },
    desc: {
        fontSize: 14,
        fontWeight: '600',
        color: '#7C7C7C',
        marginHorizontal: 10,
        alignSelf: 'flex-start',
        textAlign: 'justify',
        fontFamily: 'Roboto-Regular',
    },
    card: {
        width: '95%',
        padding: 15
    }
})