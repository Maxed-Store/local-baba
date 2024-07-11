import { StyleSheet, Text, View, Image,Linking} from 'react-native'
import React from 'react'
import MyButton from '../components/MyButton'
const OpenInbox = ({ route }) => {
    return (
        <View style={styles.container}>
            <View style={{ width: '95%' }}>
                <Image style={{ height: 169, width: 169, resizeMode: 'contain',alignSelf:'center' }} source={require('../images/okay.png')} />
                <Text style={styles.title}>Check Inbox!</Text>
                <Text style={styles.desc}>
                    We have sent you a verification email to your email address,
                    <Text style={[styles.desc, { color: '#000000' }]}> {route.params?.email}</Text>
                </Text>
            </View>
            <MyButton title={'Open Inbox'} onPress={() =>Linking.openURL('https://gmail.app.goo.gl')}/>
        </View>
    )
}
export default OpenInbox
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        color: '#434343',
        marginTop: 30,
        alignSelf: 'flex-start',
        marginLeft: 20
    },
    desc: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#949494',
        alignSelf: 'flex-start',
        marginLeft: 20
    },
})