import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const FoodCard = ({ title, image, desc, rating }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('FoodDetails')}>
            <Image style={styles.img} source={image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
                <Image style={styles.star} source={require('../images/star.png')} />
                <Text style={[styles.desc, { color: '#000000', fontFamily: 'Poppins-Medium', marginLeft: 5 }]}>{rating}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default FoodCard
const styles = StyleSheet.create({
    container: {
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        margin: 10,
        shadowColor: "#000",
        paddingBottom: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        marginTop: 10,
        marginLeft: 10
    },
    desc: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#434343',
        marginLeft: 10
    },
    img: {
        width: '100%',
        height: 177,
        resizeMode: 'stretch'
    },
    star: {
        height: 18,
        width: 18,
        resizeMode: 'contain'
    }
})