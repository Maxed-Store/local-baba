import { StyleSheet, ScrollView, TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import OrderCard from '../components/OrderCard'
const Orders = () => {
  const [active, setactive] = useState('1')
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
      <Header title={'Orders'} />
      <View style={styles.buttonView}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: active == '1' ? '#FE4101' : '#F8F8F8' }]} onPress={() => setactive('1')}>
          <Text style={[styles.btnText, { color: active == '1' ? '#FFFFFF' : '#434343' }]}>Today’s</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: active == '2' ? '#FE4101' : '#F8F8F8' }]} onPress={() => setactive('2')}>
          <Text style={[styles.btnText, { color: active == '2' ? '#FFFFFF' : '#434343' }]}>Yesterday</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: active == '3' ? '#FE4101' : '#F8F8F8' }]} onPress={() => setactive('3')}>
          <Text style={[styles.btnText, { color: active == '3' ? '#FFFFFF' : '#434343' }]}>Oldest</Text>
        </TouchableOpacity>
      </View>
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </ScrollView>
  )
}
export default Orders
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  btn: {
    width: '30%',
    padding: 10,
    borderWidth: 1.5,
    backgroundColor: '#F8F8F8',
    borderRadius: 50,
    alignItems: 'center',
    borderColor: '#F2F2F2'

  },
  btnText: {
    fontSize: 14,
    color: '#434343',
    fontFamily: 'Poppins-Regualr'
  },
  buttonView: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10,
    justifyContent: 'space-between',
  }
}) 
