import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { Searchbar } from 'react-native-paper';
import FoodCard from '../components/FoodCard';
import PromoCard from '../components/PromoCard';
const Grocery = () => {
  const [active, setactive] = useState('1')
  const [query, setQuery] = useState('');
  const onChangeSearch = (query) => {
    setQuery(query);
  };
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center', }}>
      <Header title={'Grocery'} />
      <Searchbar placeholder="Search here..."
        placeholderTextColor={'#949494'}
        iconColor="#949494"
        inputStyle={styles.searchTxt}
        cursorColor={'#FE4101'}
        style={styles.search}
        onChangeText={onChangeSearch}
        value={query}
      />
      <Image style={styles.banner} source={require('../images/banner.png')} />
      <Text style={styles.title}>Food</Text>
      <View style={styles.buttonView}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.btn, { backgroundColor: active == '1' ? '#FE4101' : '#F8F8F8' }]} onPress={() => setactive('1')}>
            <Text style={[styles.btnText, { color: active == '1' ? '#FFFFFF' : '#434343' }]}>under 30 min</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, { backgroundColor: active == '2' ? '#FE4101' : '#F8F8F8' }]} onPress={() => setactive('2')}>
            <Text style={[styles.btnText, { color: active == '2' ? '#FFFFFF' : '#434343' }]}>$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, { backgroundColor: active == '3' ? '#FE4101' : '#F8F8F8' }]} onPress={() => setactive('3')}>
            <Text style={[styles.btnText, { color: active == '3' ? '#FFFFFF' : '#434343' }]}>$$$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, { backgroundColor: active == '4' ? '#FE4101' : '#F8F8F8' }]} onPress={() => setactive('4')}>
            <Text style={[styles.btnText, { color: active == '4' ? '#FFFFFF' : '#434343' }]}>pick ups</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, { backgroundColor: active == '5' ? '#FE4101' : '#F8F8F8' }]} onPress={() => setactive('5')}>
            <Text style={[styles.btnText, { color: active == '5' ? '#FFFFFF' : '#434343' }]}>345</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.buttonView}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <PromoCard image={require('../images/f1.png')} title={'promos'}/>
          <PromoCard image={require('../images/f2.png')} title={'healty'}/>
          <PromoCard image={require('../images/f3.png')} title={'burgers'}/>
          <PromoCard image={require('../images/f4.png')} title={'desserts'}/>
          <PromoCard image={require('../images/f5.png')} title={'all services'}/>
        </ScrollView>
      </View>
      <FoodCard image={require('../images/c1.png')} title={'Royal Tandoor'} desc={'Mediterranean, Indian, Grills'} rating={'4.5'} />
      <FoodCard image={require('../images/c2.png')} title={'Royal Tandoor'} desc={'Mediterranean, Indian, Grills'} rating={'4.5'} />
      <FoodCard image={require('../images/c3.png')} title={'Royal Tandoor'} desc={'Mediterranean, Indian, Grills'} rating={'4.5'} />
    </ScrollView>
  )
}
export default Grocery
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  search: {
    width: '92%',
    borderRadius: 12,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    alignSelf: 'flex-start',
    marginLeft: 20,
    color: '#292929',
  },
  searchTxt: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#949494',
  },
  banner: {
    width: '92%',
    height: 200,
    margin: 10,
    resizeMode: 'stretch'
  },
  btn: {
    // width:95,
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    borderColor: '#F2F2F2',
  },
  btnText: {
    fontSize: 12,
    color: '#434343',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regualr'
  },
  buttonView: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
})