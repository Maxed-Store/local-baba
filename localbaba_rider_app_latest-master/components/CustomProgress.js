import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ProgressBar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const CustomProgress = ({ per, title }) => {
    const navigation = useNavigation();
    return (
        <View style={{ alignItems: 'center', width: '100%',marginBottom:15}}>
            <View style={styles.main}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.img} source={require('../images/backbtn.png')} />
                </TouchableOpacity>
                <Text style={styles.label}>{title}</Text>
            </View>
            <ProgressBar style={styles.prog} progress={per} color={'#FE4101'} />
        </View>
    )
}
export default CustomProgress
const styles = StyleSheet.create({
    img: {
        height: 32,
        width: 32,
        marginHorizontal: 10,
        resizeMode: 'stretch'
    },
    main: {
        width: '95%',
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal:10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    prog: {
        width: 360,
        height: 8,
        borderRadius: 10,
        marginLeft: 5,
        backgroundColor: '#F2F2F2'
    },
    label: {
        fontSize: 14,
        fontWeight: '400',
        margin: 10,
        color: '#313866',
        fontFamily: 'Poppins-Medium',
    },
}) 