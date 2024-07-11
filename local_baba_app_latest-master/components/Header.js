import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Header = ({ title }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.img} source={require('../images/backbtn.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
export default Header
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginVertical: 15,
        marginLeft: 20
    },
    img: {
        height: 32,
        width: 32,
        marginTop:4,
        resizeMode: 'stretch'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#434343',
        marginHorizontal:10,
        fontFamily: 'Roboto-Bold',
    },
}) 
