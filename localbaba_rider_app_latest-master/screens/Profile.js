import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profile} source={require('../images/profile.png')} />
        <Text style={[styles.txt, { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }]}>Ali Khan Awan</Text>
        <Text style={styles.txt}>Aminjkan@gmail.com</Text>
        <View style={styles.wallet}>
          <Text style={styles.txt}>Wallet</Text>
          <Text style={[styles.txt, { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' }]}>2300 AED</Text>
          <TouchableOpacity style={{backgroundColor:'#FFFFFF',borderRadius:50,width:'55%',alignItems:'center',padding:5,margin:5}}>
            <Text style={[styles.txt,{color:'#FE4101'}]}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>
        <View style={styles.card}>
          <View style={styles.rowcard}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('AccountInfo')}>
              <Image style={styles.img} source={require('../images/user.png')} />
              <Text style={styles.title}>personal info</Text>
            </TouchableOpacity>
            <View>
              <Icon name='keyboard-arrow-right' color={'#949494'} size={20} />
            </View>
          </View>
          <View style={styles.rowcard}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={styles.img} source={require('../images/setting2.png')} />
              <Text style={styles.title}>Settings</Text>
            </TouchableOpacity>
            <View>
              <Icon name='keyboard-arrow-right' color={'#949494'} size={20} />
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.rowcard}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={styles.img} source={require('../images/money-change.png')} />
              <Text style={styles.title}>Withdrawal History</Text>
            </TouchableOpacity>
            <View>
              <Icon name='keyboard-arrow-right' color={'#949494'} size={20} />
            </View>
          </View>
          <View style={styles.rowcard}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={styles.img} source={require('../images/note.png')} />
              <Text style={styles.title}>Number of Orders</Text>
            </TouchableOpacity>
            <View>
              <Icon name='keyboard-arrow-right' color={'#949494'} size={20} />
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.rowcard}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={styles.img} source={require('../images/money-change.png')} />
              <Text style={styles.title}>user reviews</Text>
            </TouchableOpacity>
            <View>
              <Icon name='keyboard-arrow-right' color={'#949494'} size={20} />
            </View>
          </View>
          <View style={styles.rowcard}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={()=>navigation.navigate('Login')}>
              <Image style={styles.img} source={require('../images/Logout.png')} />
              <Text style={styles.title}>log out</Text>
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
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 1,
    width: '92%',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0000000D',
    marginVertical: 15,
    backgroundColor: '#FE4101',
    borderRadius:16,
    borderBottomLeftRadius:16,
    borderBottomRightRadius:16,
    elevation: 5,
    marginTop:2,
  },
  wallet: {
    width: '65%',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0000000D',
    padding: 5,
    marginVertical: 15,
    backgroundColor: '#FFFFFF33',
    borderRadius: 16,
  },
  card: {
    width: '92%',
    borderWidth: 0.5,
    borderColor: '#0000000D',
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    borderRadius: 12,
    elevation: 2,
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
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
    marginLeft:10,
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
  },
  txt: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
    marginVertical:1,
    fontFamily: 'Poppins-Regular',
  },
  img: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  profile: {
    width: 77,
    height: 77,
    resizeMode: 'contain',
  },
});
