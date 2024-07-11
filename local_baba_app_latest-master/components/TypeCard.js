import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { } from 'react-native-animatable'
const TypeCard = ({ title, image, color }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={[styles.card, { backgroundColor: color }]}>
                <Image style={styles.img} source={image} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
export default TypeCard
const styles = StyleSheet.create({
    container: {
        borderRadius: 22,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    title: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: '#949494',
        textTransform: 'capitalize',
        alignSelf: 'center',
        marginTop: 5
    },
    card: {
        width: 62,
        height: 62,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#E6F2EA',
        elevation:1
    },
    img: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }
})


