import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const HomeHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.rightView}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image style={styles.profileImage} source={require('../images/nouser.png')} />
                </TouchableOpacity>
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.title}>Welcome</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.txt}>hammad khan</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.navigate('Notification')}>
                <Image style={styles.bell} source={require('../images/bell.png')} />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    rightView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        fontStyle: 'normal',
        color: '#000000',
    },
    txt: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 12,
        marginLeft: 2,
        fontStyle: 'normal',
        textTransform:'capitalize',
        color: '#000000',
    },
    img: {
        height: 35,
        width: 35,
        resizeMode: 'contain'
    },
    bell: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    }
});
export default HomeHeader;
