import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader'
import OrderCard2 from '../components/OrderCard2'
import { useNavigation } from '@react-navigation/native'
const Home = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <HomeHeader />
      <View style={styles.rowView}>
        <View style={styles.reqcard}>
          <Text style={styles.txt}>Today</Text>
          <Text style={[styles.txt, { fontSize: 32, color: '#FE4101', fontFamily: 'Poppins-Bold' }]}>07</Text>
          <Text style={styles.txt}>Completed Orders</Text>
        </View>
        <View style={styles.reqcard}>
          <Text style={styles.txt}>+2 new Requests</Text>
          <Text style={[styles.txt, { fontSize: 32, color: '#FE4101', fontFamily: 'Poppins-Bold' }]}>07</Text>
          <Text style={styles.txt}>Order Requests</Text>
        </View>
      </View>
      <Image style={{ width: '100%', height: 280, resizeMode: 'stretch' }} source={require('../images/graph.png')} />
      <View style={styles.rowView}>
        <Text style={[styles.txt, { fontWeight: '800' }]}>Recent Orders</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Orders')}>
          <Text style={[styles.txt, { color: '#FE4101',fontSize:12}]}>{'See All Orders >'}</Text>
        </TouchableOpacity>
      </View>
      <OrderCard2 />
      <OrderCard2 />
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
  rowView: {
    width: '92%',
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-between'
  },
  reqcard: {
    width: '45%',
    backgroundColor: '#FFFFFF',
    elevation: 2,
    padding: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16
  },
  txt: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#434343'
  }
})