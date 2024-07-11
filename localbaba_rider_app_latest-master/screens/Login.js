import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'
import * as Animatable from 'react-native-animatable';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import Toast from 'react-native-simple-toast';
const Login = ({ navigation }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setloading] = useState(false)
  const [invalidemail, setinvalidemail] = useState(false)
  const [invalidpassword, setinvalidpassword] = useState(false)
  const [visible, setvisible] = useState(true)
  const [user, setUser] = useState(null)
  const [passwordError, setpasswordError] = useState('password must be 6 characters long')
  const [emailError, setemailError] = useState('please enter a valid email')
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
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '661273499737-iuft4djjg6pdrau429a3u9o02ooc7pbi.apps.googleusercontent.com',
    });
  }, []);
  const googleSignIn = async () => {
    try {
      await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const credentialPromise = auth().signInWithCredential(googleCredential)
      credentialPromise.then(res => {
        if (res.additionalUserInfo.isNewUser) {
          firestore()
            .collection('users')
            .doc(res.user.uid)
            .set({
              name: res.user.displayName,
              img: res.user.photoURL,
              email: res.user.email,
              phoneNo: res.user.phoneNumber,
              password: '',
              postCode: '',
              uid: res.user.uid
            })
            .then(() => {
              AsyncStorage.setItem('uid', res.user.uid).then(() => {
                let signinInfo = {
                  signInType: 'google',
                  loggedIn: true,
                };
                AsyncStorage.setItem(
                  'signInInfo',
                  JSON.stringify(signinInfo),
                ).then(() => {
                  navigation.replace('HomeTabs');
                });
              });
            });
        } else {
          AsyncStorage.setItem('uid', res.user.uid).then(() => {
            let signinInfo = {
              signInType: 'google',
              loggedIn: true,
            };
            AsyncStorage.setItem(
              'signInInfo',
              JSON.stringify(signinInfo),
            ).then(() => {
              navigation.replace('HomeTabs');
            });
          });
        }
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Toast.show('User cancelled.', Toast.SHORT);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Toast.show('Already in process.', Toast.SHORT);
      } else {
        console.log(error)
        alert(JSON.stringify(error))
        Toast.show('Something went wrong.', Toast.SHORT);
      }
    }
  };
  const handleLogin = async () => {
    if (!email) {
      setinvalidemail(true);
    } else if (!password) {
      setinvalidpassword(true);
    } else if (invalidemail || invalidpassword) {
      return 0;
    } else {
      try {
        setloading(true)
        const userLogin = await auth().signInWithEmailAndPassword(email, password)
        AsyncStorage.setItem('uid', userLogin.user.uid).then(() => {
          let singInInfo = { signInType: 'emailAndPassword', loggedIn: true };
          AsyncStorage.setItem('signInInfo', JSON.stringify(singInInfo)).then(
            () => {
              navigation.replace('HomeTabs');
            },
          );
        });
        setloading(false)
      } catch (error) {
        if (error.message.slice(0, 21) == '[auth/user-not-found]') {
          setinvalidemail(true);
          setemailError('No user found with this email.')
        } else if (error.message.slice(0, 21) == '[auth/wrong-password]') {
          setinvalidpassword(true);
          setpasswordError('Invalid password try again.')
        } else if (error.message.slice(0, 20) == '[auth/invalid-email]') {
          setinvalidemail(true);
          setemailError('Invalid email try again.')
        } else {
          setinvalidpassword(true);
          setpasswordError('Invalid password or email try again.')
        }
        setloading(false)
      };
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <Image style={styles.logo} source={require('../images/logo2.png')} />
      <View style={{ marginLeft: 20, alignSelf: 'flex-start' }}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.desc}>Please Log In To Your Account!</Text>
      </View>
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
      <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 10 }} onPress={() => navigation.navigate('ChangePassword')}>
        <Text style={styles.normal}>Forgot Password?</Text>
      </TouchableOpacity>
      <MyButton title={loading ? 'Logging in...' : 'Login'} onPress={handleLogin} />
      <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.btnSmall} onPress={googleSignIn}>
          <Image style={styles.img} source={require('../images/google.png')} />
          <Text style={styles.btnText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSmall}>
          <Image style={styles.img} source={require('../images/apple.png')} />
          <Text style={styles.btnText}>Apple</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.desc, { marginVertical: 15 }]}>New to local baba?</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('PersonalDetails')}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  line: {
    width: '40%',
    height: 1,
    backgroundColor: '#0000003D'
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
  btnSmall: {
    width: '45%',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
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
  normal: {
    fontSize: 14,
    margin: 5,
    marginRight: 10,
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium',
    color: '#FE4101'
  },
  desc: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    marginVertical: 6,
    fontFamily: 'Poppins-Regular',
    color: '#808080'
  },
  img: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
    resizeMode: 'contain'
  }
})