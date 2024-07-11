import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Icon from 'react-native-vector-icons/MaterialIcons'
const AccountInfo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title={'Personal Details'} />
      <View style={styles.card}>
        <Text style={[styles.title, { fontSize: 16, fontFamily: 'Poppins-SemiBold', marginLeft: 10 }]}>account info</Text>
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
      <View style={styles.footer}>
        <Text style={[styles.title, { fontSize: 16, fontFamily: 'Poppins-SemiBold', marginLeft: 10 }]}>account management</Text>
        <View style={[styles.rowcard, { backgroundColor: '#FFFFFF' }]}>
          <Text style={styles.title}>reset password</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
            <Icon name='keyboard-arrow-right' color={'#949494'} size={20} />
          </TouchableOpacity>
        </View>
        <View style={[styles.rowcard, { backgroundColor: '#FFFFFF' }]}>
          <Text style={styles.title}>delete account</Text>
          <TouchableOpacity>
            <Icon name='keyboard-arrow-right' color={'#949494'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default AccountInfo
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
    marginVertical: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    elevation: 2,
  },
  footer: {
    width: '90%',
    borderWidth: 0.5,
    borderColor: '#0000000D',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginVertical: 15,
    borderRadius: 16,
    elevation: 2,
  },
  rowcard: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: '#0000000D',
    padding: 15,
    borderRadius: 8,
    margin: 8,
    backgroundColor: '#F8F8F8'
  },
  title: {
    fontSize: 14,
    color: '#434343',
    fontWeight: '500',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular'
  },
  desc: {
    fontSize: 12,
    color: '#98A0A0',
    fontWeight: '500',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular'
  }
})