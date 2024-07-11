import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../components/MyButton'
import SimpleInput from '../components/SimpleInput'
import ImagePicker from 'react-native-image-crop-picker';
import CustomProgress from '../components/CustomProgress';
import Toast from 'react-native-simple-toast';
import firestore from '@react-native-firebase/firestore';
const VehicleDetails = ({ navigation, route }) => {
    const [vtype, setvtype] = useState('')
    const [vmodel, setvmodel] = useState('')
    const [vnumber, setvnumber] = useState('')
    const [vmake, setvmake] = useState('')
    const [vphoto, setvphoto] = useState('')
    const [loading, setloading] = useState(false)
    const choosePhoto = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setvphoto(image.path)
        });
    }
    const handleNext = () => {
        if (!vtype || !vmodel || !vnumber || !vmake || !vphoto) {
            Toast.show('Please fill out all the required fields.', Toast.SHORT);
        } else {
            const personalData = route.params?.data;
            navigation.navigate('Observe')
        }
    }
    const saveUser = async () => {
        try {
            if (!vtype || !vmodel || !vnumber || !vmake || !vphoto) {
                Toast.show('Please fill out all the required fields.', Toast.SHORT);
            } else {
                setloading(true)
                const personalData = route.params?.data;
                const vehicleData = { vtype, vmodel, vnumber, vmake, vphoto };
                const finalData = { ...personalData, ...vehicleData };
                const response = await firestore().collection('users').add(finalData);
                if (response) {
                    Toast.show('Data added successfully', Toast.SHORT);
                    setloading(false);
                } else {
                    Toast.show('Error: Failed to add data', Toast.SHORT);
                    console.error('Error: Failed to add data. Response:', response);
                    setloading(false);
                }
            }
        } catch (error) {
            Toast.show('Error: ' + error.message, Toast.SHORT);
            setloading(false);
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
            <CustomProgress per={1} title={'3/3'} />
            <View style={{ marginLeft: 20, alignSelf: 'flex-start' }}>
                <Text style={styles.title}>Personal Details</Text>
                <Text style={styles.desc}>Please enter Details to get started</Text>
            </View>
            <SimpleInput value={vtype} setValue={setvtype} hint={'Type of vehicle'} />
            <SimpleInput value={vmake} setValue={setvmake} hint={'Vehicle make'} />
            <SimpleInput value={vmodel} setValue={setvmodel} hint={'Vehicle Model'} />
            <SimpleInput value={vnumber} setValue={setvnumber} hint={'Vehicle No'} />
            <TouchableOpacity style={styles.btn} onPress={choosePhoto}>
                <Image style={styles.img} source={require('../images/upload.png')} />
                <Text style={styles.btnText}>{vphoto ? 'Photo uploaded' : 'Upload photo of vehicle id'}</Text>
            </TouchableOpacity>
            <MyButton title={loading ? 'Saving...' : 'Submit Request'} onPress={saveUser} />
        </View>
    )
}
export default VehicleDetails
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    btn: {
        width: '90%',
        padding: 18,
        borderRadius: 16,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: '#FE4101',
        alignItems: 'center',
        margin: 10,
        marginVertical: 15,
        backgroundColor: '#FFFFFF'
    },
    img: {
        width: 20,
        height: 20,
        marginHorizontal: 5,
        resizeMode: 'contain'
    },
    btnText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#FE4101',
        fontFamily: 'Poppins-Regular'
    },
    title: {
        fontSize: 16,
        fontWeight: '800',
        lineHeight: 30,
        alignSelf: 'flex-start',
        fontFamily: 'Poppins-Bold',
        color: '#FE4101'
    },
    desc: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
        fontFamily: 'Poppins-Regular',
        color: '#808080'
    },
})