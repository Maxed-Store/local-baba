import { StyleSheet, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
const ServiceCard = ({ title, image, desc }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.img} source={image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </TouchableOpacity>
    )
}
export default ServiceCard
const styles = StyleSheet.create({
    container: {
        width: '45%',
        padding: 8,
        borderRadius: 22,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
    },
    title: {
        fontSize: 13,
        fontFamily: 'Poppins-SemiBold',
        color: '#37474F',
        alignSelf: 'center',
        marginTop: 15
    },
    desc: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#585858',
        alignSelf: 'center',
    },
    img: {
        width: 143,
        height: 111,
        resizeMode: 'contain'
    }
})