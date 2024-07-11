import { StyleSheet, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
const PromoCard = ({ title, image}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.img} source={image} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
export default PromoCard
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
        textTransform:'capitalize',
        alignSelf: 'center',
        marginTop: 5
    },
    img: {
        width: 69,
        height: 69,
        resizeMode: 'contain'
    }
})