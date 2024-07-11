import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
const MealCard = ({ title, image }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Image style={styles.img} source={image} />
                <View style={{ marginLeft: 15 }}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ height: 10, width: 10, resizeMode: 'contain' }} source={require('../images/bike.png')} />
                        <Text style={styles.desc}>22-34 min</Text>
                    </View>
                </View>
            </View>
            <View>
                <Icon name='keyboard-arrow-right' color={'#949494'} size={20} />
            </View>
        </TouchableOpacity>
    )
}
export default MealCard
const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 8,
        padding: 10,
        paddingVertical: 15,
        backgroundColor: '#F8F8F8',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 8,
        elevation: 0.5,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
    },
    desc: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#434343',
        marginLeft: 8
    },
    img: {
        width: 57,
        height: 42,
        resizeMode: 'contain'
    },
})