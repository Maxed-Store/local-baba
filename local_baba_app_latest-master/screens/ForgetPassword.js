import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'
import Modal from 'react-native-modal'
import * as Animatable from 'react-native-animatable';
const ForgetPassword = ({ navigation }) => {
    const [email, setemail] = useState('');
    const [invalidemail, setinvalidemail] = useState(false)
    const [emailError, setemailError] = useState('please enter a valid email')
    const validateEmail = (text) => {
        setemail(text)
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            setinvalidemail(true)
        }
    }
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }
    const handleConfirm = () => {
        setModalVisible(!modalVisible)
        navigation.navigate('OpenInbox', { email })
    }
    return (
        <View style={styles.container}>
            <View style={{ width: '95%' }}>
                <Text style={styles.title}>Forgot Password?</Text>
                <Text style={styles.desc}>Enter your registered email to get verification email</Text>
            </View>
            <MyInput value={email} setValue={setemail} validateValue={validateEmail} title={'Your Email'} hint={'Useremail66@email.com'}
                error={setinvalidemail} img={'mail'} />
            {invalidemail &&
                <Animatable.Text animation={'fadeInLeft'} style={styles.error}>{emailError}</Animatable.Text>
            }
            <Modal animationType="slide" transparent={true} isVisible={modalVisible} onBackdropPress={toggleModal}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image style={{ height: 105, width: 105, resizeMode: 'contain' }} source={require('../images/mail.png')} />
                        <Text style={styles.mtitle}>Confirm Email!</Text>
                        <Text style={styles.mdesc}>A verification email will be sent to your email
                            <Text style={[styles.mdesc, { color: '#000000' }]}> {email}</Text></Text>
                        <View style={styles.rowCard}>
                            <TouchableOpacity style={[styles.btn, { backgroundColor: '#FFFFFF', borderColor: '#FE4101', borderWidth: 1 }]}
                                onPress={toggleModal}>
                                <Text style={[styles.btnText, { color: '#FE4101' }]}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={handleConfirm}>
                                <Text style={styles.btnText}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <MyButton title={'Send Email'} onPress={toggleModal} />
        </View>
    )
}
export default ForgetPassword
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        color: '#949494',
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
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    mtitle: {
        marginTop: 10,
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        color: '#434343',
    },
    mdesc: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#949494',
        textAlign: 'center'
    },
    btn: {
        width: 100,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#FE4101'
    },
    btnText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FFFFFF',
        fontFamily: 'Poppins-Regular'
    },
    rowCard: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})