import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import FoodCard from '../components/FoodCard';
import PromoCard from '../components/PromoCard';
import PopularCard from '../components/PopularCard';
import TypeCard from '../components/TypeCard';
const Food = () => {
  const [active, setactive] = useState('1')
  const [query, setQuery] = useState('');
  const onChangeSearch = (query) => {
    setQuery(query);
  };
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center', }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginLeft: 20, marginVertical: 10 }}>
        <Image style={{ height: 45, width: 45, resizeMode: 'contain' }} source={require('../images/l2.png')} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.btnText}>Location</Text>
          <Text style={[styles.btnText, { fontSize: 14, color: '#292929', fontFamily: 'Poppins-Medium' }]}>32 Llanberis Close, Tonteg, CF</Text>
        </View>
      </View>
      <Searchbar placeholder="Search here..."
        placeholderTextColor={'#949494'}
        iconColor="#949494"
        inputStyle={styles.searchTxt}
        cursorColor={'#FE4101'}
        style={styles.search}
        onChangeText={onChangeSearch}
        value={query}
      />
      <View style={styles.buttonView}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TypeCard image={require('../images/sabzi.png')} title={'Vegetables'} color={'#E6F2EA'}/>
          <TypeCard image={require('../images/apple2.png')} title={'Fruits'} color={'#FFE9E5'}/>
          <TypeCard image={require('../images/beverage.png')} title={'Beverages'} color={'#FFF6E3'}/>
          <TypeCard image={require('../images/g.png')} title={'Grocery'} color={'#F3EFFA'}/>
          <TypeCard image={require('../images/more.png')} title={'More'}color={'#DCF4F5'} />
        </ScrollView>
      </View>
      <Image style={styles.banner} source={require('../images/banner.png')} />
      <Text style={styles.title}>Popular Brands</Text>
      <View style={styles.buttonView}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <PopularCard image={require('../images/r1.png')} title={'Good Food'} desc={'25-46 min'} />
          <PopularCard image={require('../images/r2.png')} title={'Healthy Food'} desc={'35-87 min'} />
          <PopularCard image={require('../images/u.png')} title={'Uber Eat'} desc={'20-30 min'} />
        </ScrollView>
      </View>
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
          <PromoCard image={require('../images/f1.png')} title={'promos'} />
          <PromoCard image={require('../images/f2.png')} title={'healty'} />
          <PromoCard image={require('../images/f3.png')} title={'burgers'} />
          <PromoCard image={require('../images/f4.png')} title={'desserts'} />
          <PromoCard image={require('../images/f5.png')} title={'all services'} />
        </ScrollView>
      </View>
      <FoodCard image={require('../images/c1.png')} title={'Royal Tandoor'} desc={'Mediterranean, Indian, Grills'} rating={'4.5'} />
      <FoodCard image={require('../images/c2.png')} title={'Royal Tandoor'} desc={'Mediterranean, Indian, Grills'} rating={'4.5'} />
      <FoodCard image={require('../images/c3.png')} title={'Royal Tandoor'} desc={'Mediterranean, Indian, Grills'} rating={'4.5'} />
    </ScrollView>
  )
}
export default Food
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
    marginVertical: 5
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