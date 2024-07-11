import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { } from 'react-native-gesture-handler'
const Home = () => {
  return (
    <View style={styles.container}>
      <Header title={'Delivery'} />
      <Text style={[styles.txt, { fontSize: 14, color: '#7C7C7C' }]}>Mauris, vitae ut et eget aliquam arcu. Nec nibh sapien sollicitudin sed</Text>
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', marginVertical: 15, alignItems: 'center' }}>
          <Image style={styles.map} source={require('../images/l.png')} />
          <Text style={styles.txt}>where to pick ?</Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 15, alignItems: 'center' }}>
          <Image style={styles.map} source={require('../images/l.png')} />
          <Text style={styles.txt}>where to pick ?</Text>
        </View>
      </View>
      <View style={styles.footer} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '92%', alignSelf: 'center' }}>
          <Text style={[styles.txt, { color: '#FEFEFF', fontFamily: 'Poppins-SemiBold' }]}>From</Text>
          <Text style={[styles.txt, { color: '#FEFEFF', fontFamily: 'Poppins-SemiBold' }]}>150$</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>add detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  card: {
    width: '90%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    marginVertical: 10,
    borderColor: '#0000001A',
    elevation: 1,
  },
  map: {
    width: 18,
    height: 18,
    resizeMode: 'contain'
  },
  txt: {
    fontSize: 16,
    marginHorizontal: 10,
    fontFamily: 'Poppins-Regular',
    color: '#949494'
  },
  footer: {
    width: '92%',
    position: 'absolute',
    bottom: 10,
    padding: 10,
    borderRadius: 20,
    paddingTop: 30,
    elevation: 2,
    backgroundColor: '#FE4101'
  },
  btn: {
    width: '95%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  btnText: {
    fontSize: 16,
    marginHorizontal: 10,
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
    color: '#FE4101'
  }
})