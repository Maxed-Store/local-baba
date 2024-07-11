import { StyleSheet, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const RestaurantCard = ({ title, image, desc }) => {
    const navigation=useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('MealDetails')}>
            <Image style={styles.img} source={image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </TouchableOpacity>
    )
}
export default RestaurantCard
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
        fontFamily: 'Poppins-Bold',
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
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }
})