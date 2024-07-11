import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import MyButton from '../components/MyButton'
const Account = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title={'Account'} />
      <View style={styles.card}>
        <Image style={styles.img} source={require('../images/pro2.png')} />
        <Text style={[styles.title, { fontSize: 16, fontFamily: 'Poppins-SemiBold', marginLeft: 10, color: '#000000' }]}>account info</Text>
        <View style={styles.rowcard}>
          <Text style={styles.title}>user name</Text>
          <Text style={styles.desc}>glis bunny</Text>
        </View>
        <View style={styles.rowcard}>
          <Text style={styles.title}>e-mail address</Text>
          <Text style={styles.desc}>uyns1343@gmail.com</Text>
        </View>
        <View style={styles.rowcard}>
          <Text style={styles.title}>phone number</Text>
          <Text style={styles.desc}>0325 6565432</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={[styles.title, { fontSize: 16, fontFamily: 'Poppins-SemiBold', marginLeft: 10, color: '#000000' }]}>Location</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: 45, height: 45, resizeMode: 'contain' }} source={require('../images/loc.png')} />
          <View style={{marginLeft:10}}>
            <Text style={styles.desc}>Location</Text>
            <Text style={[styles.title,{color:'#000000'}]}>32 Llanberis Close, Tonteg, CF</Text>
          </View>
        </View>
        <Image style={styles.map} source={require('../images/mp.png')} />
      </View>
      <MyButton title={'save changes'} />
    </View>
  )
}
export default Account
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  card: {
    width: '90%',
    borderWidth: 0.5,
    borderColor: '#0000000D',
    padding: 10,
    paddingVertical:5,
    marginVertical: 10,
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    elevation: 1,
  },
  rowcard: {
    width: '96%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: '#0000000D',
    padding: 18,
    borderRadius: 8,
    margin: 5,
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 12,
    color: '#98A0A0',
    fontWeight: '500',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular'
  },
  desc: {
    fontSize: 12,
    color: '#434343',
    fontWeight: '500',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular'
  },
  img: {
    width: 89,
    height: 89,
    resizeMode: 'contain',
    margin: 10
  },
  map: {
    width: 320,
    height: 120,
    resizeMode: 'stretch',
    margin: 10
  }
})