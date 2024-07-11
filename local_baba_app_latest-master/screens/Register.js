import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'
import * as Animatable from 'react-native-animatable';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import SimpleInput from '../components/SimpleInput';
const Register = ({ navigation }) => {
    const [name, setname] = useState('')
    const [invalidname, setinvalidname] = useState(false)
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [loading, setloading] = useState(false)
    const [invalidemail, setinvalidemail] = useState(false)
    const [invalidpassword, setinvalidpassword] = useState(false)
    const [visible, setvisible] = useState(true)
    const [user, setUser] = useState(null)
    const [passwordError, setpasswordError] = useState('password must be 6 characters long')
    const [emailError, setemailError] = useState('please enter a valid email')
    const [nameerror, setnameerror] = useState('Please enter your name')
    const validatePassword = (val) => {
        setpassword(val)
        if (val.length < 6) {
            setpasswordError('password must be 6 characters long')
            setinvalidpassword(true)
        }
    }
    const validateEmail = (text) => {
        setemail(text)
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            setinvalidemail(true)
        }
    }
    const handleRegister = async () => {
        if (!name) {
            setinvalidname(true);
        } else if (!email) {
            setinvalidemail(true);
        } else if (!password) {
            setinvalidpassword(true);
        } else if (invalidemail || invalidpassword || invalidname) {
            return 0;
        } else {
            setloading(true);
            try {
                const createdUser = await auth().createUserWithEmailAndPassword(
                    email,
                    password,
                );
                const user = createdUser.user;
                const values = {
                    name: name,
                    email: email,
                    password: password,
                    postCode: '',
                    uid: user.uid
                };
                await firestore().collection('users').doc(user.uid).set(values);
                AsyncStorage.setItem('uid', user.uid).then(() => {
                    let signInInfo = {
                        signInType: 'emailAndPassword',
                        loggedIn: true,
                    };
                    AsyncStorage.setItem('signInInfo', JSON.stringify(signInInfo)).then(
                        () => {
                            navigation.replace('HomeTabs');
                        },
                    );
                });
            } catch (err) {
                setloading(false)
                if (err.message.slice(0, 20) == '[auth/invalid-email]') {
                    setinvalidemail(true);
                } else if (err.message.slice(0, 20) == '[auth/weak-password]') {
                    setpasswordError('Password weak, must be at least 6 char.')
                    setinvalidpassword(true);
                } else if (err.message.slice(0, 27) == '[auth/email-already-in-use]') {
                    setemailError('Email already in use, try login.')
                    setinvalidemail(true);
                } else {
                    console.log(err)
                }
            }
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
            <Image style={styles.logo} source={require('../images/logo2.png')} />
            <View style={{ marginLeft: 20, alignSelf: 'flex-start' }}>
                <Text style={styles.title}>Welcome Back!</Text>
                <Text style={styles.desc}>Please Register A New Account!</Text>
            </View>
            <SimpleInput value={name} setValue={setname} hint={'Your Name'} error={setinvalidname} />
            {invalidname &&
                <Animatable.Text animation={'fadeInLeft'} style={styles.error}>{nameerror}</Animatable.Text>
            }
            <MyInput value={email} setValue={setemail} validateValue={validateEmail} title={'Your Email'} hint={'Useremail66@email.com'}
                error={setinvalidemail} img={'mail'} />
            {invalidemail &&
                <Animatable.Text animation={'fadeInLeft'} style={styles.error}>{emailError}</Animatable.Text>
            }
            <MyInput title={'Password'} value={password} setValue={setpassword} validateValue={validatePassword}
                error={setinvalidpassword} onEyePress={() => setvisible(!visible)} visible={visible} img={'eye-off'} hint={'Password'} />
            {invalidpassword &&
                <Animatable.Text animation={'fadeInLeft'} style={styles.error}>{passwordError}</Animatable.Text>
            }
            <MyButton title={loading ? 'Logging in...' : 'Register'} onPress={handleRegister} />
            <Text style={[styles.desc, { marginVertical: 15 }]}>Already register to local baba?</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Register
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
    logo: {
        width: 200,
        height: 120,
        marginLeft: 20,
        alignSelf: 'flex-start',
        resizeMode: 'contain'
    },
    btn: {
        width: '90%',
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
        margin: 10,
        marginVertical: 15,
        backgroundColor: '#F8F8F8'
    },
    btnText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#808080',
        fontFamily: 'Poppins-Medium'
    },
    title: {
        fontSize: 22,
        fontWeight: '800',
        lineHeight: 30,
        alignSelf: 'flex-start',
        fontFamily: 'Poppins-Bold',
        color: '#FE4101'
    },
    desc: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
        marginVertical: 6,
        fontFamily: 'Poppins-Regular',
        color: '#808080'
    }
})