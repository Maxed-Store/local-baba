import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { alignSelf: 'flex-start', marginLeft: 20, fontSize: 20, fontFamily: 'Poppins-Bold', marginTop: 20 }]}>More</Text>
      <View style={styles.header}>
        <Image style={styles.profile} source={require('../images/pro.png')} />
        <View style={{ marginLeft: 10 }}>
          <Text style={[styles.txt, { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }]}>Itunuoluwa Abidoye</Text>
          <Text style={styles.txt}>Itunuoluw@gmail.com</Text>
        </View>
        <TouchableOpacity style={styles.circle}>
          <Icon name={'edit'} size={22} color={'#FFFFFF'}/>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.rowcard}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('Account')}>
            <Image style={styles.img} source={require('../images/ac.png')} />
            <View>
              <Text style={styles.title}>My Account</Text>
              <Text style={styles.desc}>Make changes to your account</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rowcard}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('ChangePassword')}>
            <Image style={styles.img} source={require('../images/lock.png')} />
            <View>
              <Text style={styles.title}>Change Password</Text>
              <Text style={styles.desc}>Manage your device security</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rowcard}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('Login')}>
            <Image style={styles.img} source={require('../images/logout2.png')} />
            <View>
              <Text style={styles.title}>Log Out</Text>
              <Text style={styles.desc}>log out your account</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rowcard}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('DeleteAccount')}>
            <Image style={styles.img} source={require('../images/del.png')} />
            <View>
              <Text style={styles.title}>Delete Account</Text>
              <Text style={styles.desc}>Delete  your account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.rowcard}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('PrivacyPolicy')}>
            <Image style={styles.img} source={require('../images/privacy.png')} />
            <Text style={styles.title}>Privacy Policy</Text>
          </TouchableOpacity>
          <View>
            <Icon name='keyboard-arrow-right' color={'#949494'} size={20} />
          </View>
        </View>
        <View style={styles.rowcard}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('AboutUs')}>
            <Image style={styles.img} source={require('../images/heart.png')} />
            <Text style={styles.title}>About Us</Text>
          </TouchableOpacity>
          <View>
            <Icon name='keyboard-arrow-right' color={'#949494'} size={20} />
          </View>
        </View>
      </View>
    </View>
  )
}
export default Profile
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: '92%',
    borderWidth: 0.5,
    padding: 15,
    paddingVertical: 25,
    borderColor: '#0000000D',
    backgroundColor: '#FE4101',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    elevation: 1,
  },
  card: {
    width: '92%',
    borderWidth: 0.5,
    borderColor: '#0000000D',
    backgroundColor: '#F8F8F8',
    marginVertical: 8,
    borderRadius: 12,
    elevation: 1,
    padding: 10,
  },
  rowcard: {
    width: '98%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 2,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
    marginLeft: 8,
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
  },
  desc: {
    fontSize: 12,
    color: '#ABABAB',
    fontWeight: '500',
    marginLeft: 8,
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
  },
  txt: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
    marginVertical: 1,
    fontFamily: 'Poppins-Regular',
  },
  img: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  profile: {
    width: 67,
    height: 67,
    resizeMode: 'contain',
  },
  circle:{
    width:45,
    height:45,
    backgroundColor:'#FFFFFF1F',
    borderRadius:40,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:40
  }
});
