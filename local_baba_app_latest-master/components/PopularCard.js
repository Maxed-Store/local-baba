import { StyleSheet, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
const PopularCard = ({ title, image,desc}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.img} source={image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </TouchableOpacity>
    )
}
export default PopularCard
const styles = StyleSheet.create({
    container: {
        borderRadius: 22,
        padding:10,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        elevation:2
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: '#434343',
        textTransform:'capitalize',
        alignSelf: 'center',
    },
    desc: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#949494',
        textTransform:'capitalize',
        alignSelf: 'center',
    },
    img: {
        width: 97,
        height: 102,
        resizeMode: 'contain'
    }
}) 