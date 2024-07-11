import { StyleSheet, View, Image, Text, TextInput } from 'react-native';
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { check, PERMISSIONS, request } from 'react-native-permissions';
import MyButton from '../components/MyButton';
import { Searchbar } from 'react-native-paper';
import SmallButton from '../components/SmallButton';
import Modal from 'react-native-modal'
import BottomSheet from '@gorhom/bottom-sheet';
const FindOrder = ({ navigation }) => {
    const initialState = {
        latitude: 37.7749,
        longitude: -122.4194,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    };
    const [currentPosition, setCurrentPosition] = useState(initialState);
    const [loading, setloading] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);
    const [sheetIndex, setsheetIndex] = useState(-1)
    const requestLocationPermission = async () => {
        try {
            const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            if (result === 'granted') {
                Geolocation.getCurrentPosition(
                    position => {
                        const { latitude, longitude } = position.coords;
                        setCurrentPosition({
                            ...currentPosition,
                            latitude,
                            longitude,
                        });
                        setloading(false);
                    },
                    error => alert(error.message),
                );
            } else {
                const permissionResult = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
                if (permissionResult === 'granted') {
                    Geolocation.getCurrentPosition(
                        position => {
                            const { latitude, longitude } = position.coords;
                            setCurrentPosition({
                                ...currentPosition,
                                latitude,
                                longitude,
                            });
                            setloading(false);
                        },
                        error => alert(error.message),
                    );
                } else {
                    alert('Location permission denied');
                }
            }
        } catch (error) {
            console.error('Error checking or requesting location permission:', error);
        }
    }
    useEffect(() => { requestLocationPermission(); }, []);
    const [query, setQuery] = useState('');
    const onChangeSearch = (query) => {
        setQuery(query);
    }
    const closeModal = () => {
        setModalVisible(false)
        closeBottomSheet();
        navigation.navigate('Home')
    }
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['25%', '45%'], []);
    const openBottomSheet = (index) => {
        setsheetIndex(index);
        bottomSheetRef.current.expand();
    };
    const closeBottomSheet = () => {
        setsheetIndex(-1);
        bottomSheetRef.current.close();
    };
    const handleSheetChanges = useCallback((index) => {
        setsheetIndex(index)
    }, []);
    return (
        <View style={styles.mapcontainer}>
            <Searchbar placeholder="Search here..."
                placeholderTextColor={'#777777'}
                iconColor="#777777"
                inputStyle={styles.searchTxt}
                cursorColor={'#777777'}
                style={styles.search}
                onChangeText={onChangeSearch}
                value={query}
            />
            {loading ?
                null
                :
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    showsUserLocation
                    initialRegion={currentPosition}
                    onPress={(event) => console.log(JSON.stringify(event.nativeEvent.coordinate))}
                >
                    <Marker coordinate={currentPosition}>
                        {/* <Entypo name={'pin'} size={40} color={'red'} /> */}
                        <Image style={{ height: 40, width: 40, resizeMode: 'contain' }} source={require('../images/pin.png')} />
                    </Marker>
                </MapView>
            }
            <Modal animationType="slide" transparent={true} isVisible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image style={{ height: 105, width: 105, resizeMode: 'contain' }} source={require('../images/okay.png')} />
                        <Text style={styles.title}>order completed</Text>
                        <Text style={styles.desc}>You’ve earned $23 in your Walletzzz</Text>
                        <SmallButton title={'Go To Home'} onPress={closeModal} />
                    </View>
                </View>
            </Modal>
            <BottomSheet
                ref={bottomSheetRef}
                index={sheetIndex}
                snapPoints={snapPoints}
                enablePanDownToClose
                onChange={handleSheetChanges}
                backgroundStyle={{ backgroundColor: '#F8F8F8' }}
            >
                <View style={styles.panel}>
                    <Text style={styles.desc}>Order ID</Text>
                    <View style={styles.inputView}>
                        <TextInput style={[styles.input, { paddingLeft: 10 }]} placeholder={'#2345'} placeholderTextColor={'#434343'} />
                    </View>
                    <Text style={styles.desc}>Pick Up Location</Text>
                    <View style={styles.inputView}>
                        <Image source={require('../images/location2.png')} style={{ height: 30, width: 30, resizeMode: 'contain', marginLeft: 5, marginBottom: 2 }} />
                        <TextInput style={styles.input} placeholder={'3235 Royal Ln. mesa, new jersy 34567'} placeholderTextColor={'#434343'} />
                    </View>
                    <MyButton title={'Pick Up'} onPress={() => setModalVisible(!modalVisible)} />
                </View>
            </BottomSheet>
            {sheetIndex === -1 && (
                <View style={styles.bottomButtonContainer}>
                    <MyButton title={'Find Near By Order'} onPress={() => openBottomSheet(1)} />
                </View>
            )}
        </View>
    );
};
export default FindOrder;
const styles = StyleSheet.create({
    mapcontainer: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    inputView: {
        flexDirection: 'row',
        borderWidth: 0.5,
        alignItems: 'center',
        width: '95%',
        borderColor: '#F8F8F8',
        borderRadius: 12,
        marginTop: 5,
        color: '#000000',
        backgroundColor: '#FFFFFF',
        elevation: 0.5
    },
    input: {
        width: '90%',
        fontSize: 14,
        color: '#434343',
        paddingVertical: 15,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Poppins-Regular',
    },
    search: {
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        zIndex: 1,
        position: 'absolute',
        top: 10
    },
    searchTxt: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#949494',
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        lineHeight: 30,
        textTransform: 'capitalize',
        fontFamily: 'Poppins-Bold',
        color: '#000000'
    },
    desc: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 24,
        marginVertical: 4,
        marginLeft: 10,
        textTransform: 'capitalize',
        fontFamily: 'Poppins-Regular',
        color: '#767676'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: '85%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    bottomButtonContainer: {
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        zIndex: 0,
    },
    panel: {
        padding: 20,
        backgroundColor: '#F8F8F8',
        paddingTop: 10,
        width: '100%',
        height: '100%',
        zIndex: 0.5
    },
});
