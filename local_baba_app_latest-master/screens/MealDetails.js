import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';
import MealCard from '../components/MealCard';
const MealDetails = ({ navigation, route }) => {
    const [counter, setCounter] = useState(1);
    const handleIncrement = () => {
        setCounter(counter + 1);
    };
    const handleDecrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };
    return (
        <ImageBackground imageStyle={{ height: 300, width: 'auto', resizeMode: 'stretch' }} style={{ flex: 1 }
        } source={require('../images/mix.png')}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={[styles.img, { alignSelf: "flex-start" }]} source={require('../images/bc.png')} />
            </TouchableOpacity>
            <Animatable.View style={styles.bottomCard} animation={'fadeInUpBig'}>
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ width: '100%' }}>
                        <Text style={styles.title}>
                            grilled seasoned freshwater eel
                            for sushi 120g
                        </Text>
                        <MealCard image={require('../images/m1.png')} title={'Royal Tandoor'} />
                        <Text style={[styles.title, { fontSize: 16 }]}>Special Request</Text>
                        <TextInput style={styles.area} numberOfLines={8} multiline placeholder='Write Here' />
                        <View style={styles.qr}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={[styles.btn, { backgroundColor: '#CD201F1A' }]} onPress={handleDecrement}>
                                    <Image style={{ height: 10, width: 10, resizeMode: 'contain' }} source={require('../images/minus.png')} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16, color: '#181818', fontFamily: 'Poppins-Medium',marginHorizontal:5}}>{counter}</Text>
                                <TouchableOpacity style={styles.btn} onPress={handleIncrement}>
                                    <Image style={{ height: 10, width: 10, resizeMode: 'contain' }} source={require('../images/plus.png')} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.btnCart}>
                                <Text style={[styles.btnText,{color:'#FFFFFF'}]}>add to cart</Text>
                                <Text style={[styles.btnText,{color:'#FFFFFF'}]}>40 QR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Animatable.View >
        </ImageBackground >
    )
}
export default MealDetails
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: '#141414',
        textTransform: 'capitalize',
        fontFamily: 'Inter-Bold'
    },
    img: {
        width: 40,
        height: 40,
        marginVertical: 10,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    bottomCard: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: '62%',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    area: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        textAlignVertical: 'top',
        backgroundColor: '#F8F8F8',
        borderRadius: 12,
        fontSize: 14,
        color: '#949494',
        fontFamily: 'Poppins-Regular'
    },
    qr: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        borderRadius: 16,
        marginVertical:10,
        padding: 10,
        elevation: 1,
    },
    btn: {
        width: 30,
        padding: 10,
        borderRadius: 8,
        marginHorizontal:10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FE4101'
    },
    btnCart: {
        width:'50%',
        padding: 12,
        borderRadius:99,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row',
        backgroundColor: '#FE4101'
    },
    btnText: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#FE4101',
        textTransform:'capitalize',
        alignSelf: 'center',

    }
})