import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'
import * as Animatable from 'react-native-animatable';
import Header from '../components/Header';
import SmallButton from '../components/SmallButton';
import Modal from 'react-native-modal'
const ChangePassword = ({ navigation }) => {
    const [current, setcurrent] = useState('')
    const [password, setpassword] = useState('')
    const [confirm, setconfirm] = useState('')
    const [invalidpassword, setinvalidpassword] = useState(false)
    const [invalidconfirm, setinvalidconfirm] = useState(false)
    const [invalidcurrent, setinvalidcurrent] = useState(false)
    const [passwordError, setpasswordError] = useState('password must be 6 characters long')
    const [confirmError, setconfirmError] = useState('password must be 6 characters long')
    const [currentError, setcurrentError] = useState('password must be 6 characters long')
    const [modalVisible, setModalVisible] = useState(false);
    const validatePassword = (val) => {
        setpassword(val)
        if (val.length < 6) {
            setpasswordError('password must be 6 characters long')
            setinvalidpassword(true)
        }
    }
    const validateConfirm = (val) => {
        setconfirm(val)
        if (val.length < 6) {
            setconfirmError('password must be 6 characters long')
            setinvalidconfirm(true)
        } else if (val !== password) {
            setconfirmError('password and confirm password must be same')
            setinvalidconfirm(true)
        }
    }
    const validateCurrent = (val) => {
        setcurrent(val)
        if (val.length < 6) {
            setcurrentError('password must be 6 characters long')
            setinvalidcurrent(true)
        }
    }
    const toggleModal = () => {
        setModalVisible(!modalVisible)
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <Header title={'Change Password'} />
            <Image style={{ height: 270, width: 264, resizeMode: 'contain' }} source={require('../images/reset.png')} />
            <MyInput value={current} setValue={setcurrent} validateValue={validateCurrent} hint={'Current Password'}
                error={setinvalidcurrent} img={'eye-off'} />
            {invalidcurrent &&
                <Animatable.Text animation={'fadeInLeft'} style={styles.error}>{currentError}</Animatable.Text>
            }
            <MyInput value={password} setValue={setpassword} validateValue={validatePassword} hint={'Type a New Password'}
                error={setinvalidpassword} img={'eye-off'} />
            {invalidpassword &&
                <Animatable.Text animation={'fadeInLeft'} style={styles.error}>{passwordError}</Animatable.Text>
            }
            <MyInput value={confirm} setValue={setconfirm} validateValue={validateConfirm} hint={'Confirm New Password'}
                error={setinvalidconfirm} img={'eye-off'} />
            {invalidconfirm &&
                <Animatable.Text animation={'fadeInLeft'} style={styles.error}>{confirmError}</Animatable.Text>
            }
            <Modal animationType="slide" transparent={true} isVisible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image style={{ height: 105, width: 105, resizeMode: 'contain' }} source={require('../images/okay.png')} />
                        <Text style={styles.title}>Password Changed</Text>
                        <Text style={styles.desc}>Your password has been changed successfully</Text>
                        <SmallButton title={'Done'} onPress={toggleModal} />
                    </View>
                </View>
            </Modal>
            <MyButton title={'Update Password'} onPress={() => setModalVisible(!modalVisible)} />
        </View>
    )
}
export default ChangePassword
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    error: {
        fontSize: 12,
        color: '#D51401',
        fontWeight: '400',
        alignSelf: 'flex-start',
        marginHorizontal: 25,
        fontFamily: 'Poppins-Regular',
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        lineHeight: 30,
        fontFamily: 'Poppins-Bold',
        color: '#000000'
    },
    desc: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
        marginVertical: 6,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        color: '#767676'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: '85%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
})