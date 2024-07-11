import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import ServiceCard from '../components/ServiceCard'
import RestaurantCard from '../components/RestaurantCard';
const Services = () => {
  const [active, setactive] = useState('1')
  const [query, setQuery] = useState('');
  const onChangeSearch = (query) => {
    setQuery(query);
  };
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center', }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5, width: '90%', marginVertical: 10 }}>
        <Searchbar placeholder="Search here..."
          placeholderTextColor={'#949494'}
          iconColor="#949494"
          inputStyle={styles.searchTxt}
          cursorColor={'#FE4101'}
          style={styles.search}
          onChangeText={onChangeSearch}
          value={query}
        />
        <TouchableOpacity style={styles.filter}>
          <Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={require('../images/filter.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.btn, { backgroundColor: active == '1' ? '#FE4101' : '#F8F8F8' }]} onPress={() => setactive('1')}>
            <Text style={[styles.btnText, { color: active == '1' ? '#FFFFFF' : '#434343' }]}>all categories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, { backgroundColor: active == '2' ? '#FE4101' : '#F8F8F8' }]} onPress={() => setactive('2')}>
            <Text style={[styles.btnText, { color: active == '2' ? '#FFFFFF' : '#434343' }]}>restaurants</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, { backgroundColor: active == '3' ? '#FE4101' : '#F8F8F8' }]} onPress={() => setactive('3')}>
            <Text style={[styles.btnText, { color: active == '3' ? '#FFFFFF' : '#434343' }]}>groceries</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, { backgroundColor: active == '4' ? '#FE4101' : '#F8F8F8' }]} onPress={() => setactive('4')}>
            <Text style={[styles.btnText, { color: active == '4' ? '#FFFFFF' : '#434343' }]}>rice</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {active === '1' &&
        <>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '92%' }}>
            <ServiceCard image={require('../images/i1.png')} title={'Fruits & Vegetables'} />
            <ServiceCard image={require('../images/i2.png')} title={'Breakfast'} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '92%' }}>
            <ServiceCard image={require('../images/i3.png')} title={'Beverages'} />
            <ServiceCard image={require('../images/i4.png')} title={'Meat & Fish'} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '92%' }}>
            <ServiceCard image={require('../images/i5.png')} title={'Snacks'} />
            <ServiceCard image={require('../images/i6.png')} title={'Dairy'} />
          </View>
        </>
      }
      {active === '2' &&
        <>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%' }}>
            <RestaurantCard image={require('../images/r1.png')} title={'Vegan Resto'} desc={'12 Mins'} />
            <RestaurantCard image={require('../images/r2.png')} title={'Healthy Food'} desc={'8 Mins'} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%' }}>
            <RestaurantCard image={require('../images/r3.png')} title={'Good Food'} desc={'12 Mins'} />
            <RestaurantCard image={require('../images/r4.png')} title={'Smart Resto'} desc={'8 Mins'} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%' }}>
            <RestaurantCard image={require('../images/r5.png')} title={'Vegan Resto'} desc={'12 Mins'} />
            <RestaurantCard image={require('../images/r6.png')} title={'Healthy Food'} desc={'8 Mins'} />
          </View>
        </>
      }
    </ScrollView>
  )
}
export default Services
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  btn: {
    width: 100,
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
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  filter: {
    borderRadius: 12,
    marginLeft: 10,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    height: 50,
    width: '15%',
    alignItems: 'center',
  },
  search: {
    width: '82%',
    borderRadius: 12,
    backgroundColor: '#F8F8F8',
  },
  searchTxt: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#949494',
  },
})