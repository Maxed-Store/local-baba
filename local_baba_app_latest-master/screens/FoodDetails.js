import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';
import ProductCard from '../components/ProductCard';
import SellCard from '../components/SellCard';
const FoodDetails = ({ navigation, route }) => {
    const [active, setactive] = useState('1')
    return (
        <ImageBackground imageStyle={{ height: 300, width: 'auto', resizeMode: 'stretch' }} style={{ flex: 1 }
        } source={require('../images/mix.png')}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={[styles.img, { alignSelf: "flex-start" }]} source={require('../images/bc.png')} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                    <TouchableOpacity>
                        <Image style={[styles.img, { alignSelf: "flex-start" }]} source={require('../images/dil.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={[styles.img, { alignSelf: "flex-start" }]} source={require('../images/q.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <Animatable.View style={styles.bottomCard} animation={'fadeInUpBig'}>
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={[styles.title, { fontSize: 20 }]}>Chicken Chase</Text>
                        <TouchableOpacity style={styles.btnStar}>
                            <Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={require('../images/star2.png')} />
                            <Text>4.7 (104)</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line}></View>
                    <View style={{ width: '100%' }}>
                        <Text style={styles.title}>Descriptions</Text>
                        <Text style={styles.txt}>
                            Pancakes are some people's favorite breakfast, who doesn't like pancakes? Especially with the real honey splash on top of the pancakes, of course everyone loves that! besides being
                            <Text style={[styles.txt, { color: '#FE4101' }]}> Read More...</Text>
                        </Text>
                    </View>
                    <View style={styles.rowCard}>
                        <TouchableOpacity style={[styles.btn2, { backgroundColor: '#FFFFFF', borderColor: '#FE4101', borderWidth: 1 }]}>
                            <Text style={[styles.btnText2, { color: '#FE4101' }]}>Delivery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn2}>
                            <Text style={styles.btnText2}>Self Pickup</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F8F8F8' }}>
                        <Text style={[styles.title, { color: '#434343' }]}>Best Sellings</Text>
                        <Text style={[styles.txt, { color: '#7B6F72' }]}>6 items</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: '#F8F8F8' }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <SellCard image={require('../images/bg1.png')} title={'Wheat Flour'} />
                            <SellCard image={require('../images/bg5.png')} title={'Wheat Flour'} />
                            <SellCard image={require('../images/bg2.png')} title={'Wheat Flour'} />
                            <SellCard image={require('../images/bg3.png')} title={'Wheat Flour'} />
                        </ScrollView>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.title, { color: '#434343' }]}>Other Products</Text>
                        <Text style={[styles.txt, { color: '#7B6F72' }]}>6 items</Text>
                    </View>
                    <View style={styles.buttonView}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={[styles.btn, { backgroundColor: active == '1' ? '#FE4101' : '#F8F8F8' }]}
                                onPress={() => setactive('1')}>
                                <Text style={[styles.btnText, { color: active == '1' ? '#FFFFFF' : '#434343' }]}>All</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btn, { backgroundColor: active == '2' ? '#FE4101' : '#F8F8F8' }]}
                                onPress={() => setactive('2')}>
                                <Text style={[styles.btnText, { color: active == '2' ? '#FFFFFF' : '#434343' }]}>Pasta</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btn, { backgroundColor: active == '3' ? '#FE4101' : '#F8F8F8' }]}
                                onPress={() => setactive('3')}>
                                <Text style={[styles.btnText, { color: active == '3' ? '#FFFFFF' : '#434343' }]}>Chicken</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btn, { backgroundColor: active == '4' ? '#FE4101' : '#F8F8F8' }]}
                                onPress={() => setactive('4')}>
                                <Text style={[styles.btnText, { color: active == '4' ? '#FFFFFF' : '#434343' }]}>Rice</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <ProductCard image={require('../images/bg1.png')} title={'Wheat Flour'} />
                    <ProductCard image={require('../images/bg2.png')} title={'Wheat Flour'} />
                    <ProductCard image={require('../images/bg4.png')} title={'Wheat Flour'} />
                </ScrollView>
            </Animatable.View >
        </ImageBackground >
    )
}
export default FoodDetails
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1D1617',
        fontFamily: 'Inter-Bold'
    },
    line: {
        width: '100%',
        height: 2,
        backgroundColor: '#0000000D',
        marginVertical: 10
    },
    map: {
        width: 15,
        height: 15,
        resizeMode: 'contain'
    },
    txt: {
        fontSize: 12,
        marginVertical: 2,
        lineHeight: 23,
        fontWeight: '500',
        color: '#7B6F72',
        fontFamily: 'Inter-Regular'
    },
    img: {
        width: 40,
        height: 40,
        marginVertical: 10,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    cbtn: {
        flexDirection: 'row',
        backgroundColor: '#F26D5C',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
    },
    bottomCard: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: '70%',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    btn2: {
        width: '40%',
        padding: 10,
        borderRadius: 99,
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#FE4101'
    },
    btnText2: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FFFFFF',
        fontFamily: 'Poppins-Regular'
    },
    rowCard: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn: {
        width: 70,
        padding: 10,
        borderWidth: 1,
        backgroundColor: '#F8F8F8',
        borderRadius: 20,
        marginHorizontal: 5,
        alignItems: 'center',
        borderColor: '#F8F8F8',
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
    btnStar: {
        width: 100,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#F8F8F8'
    }
})