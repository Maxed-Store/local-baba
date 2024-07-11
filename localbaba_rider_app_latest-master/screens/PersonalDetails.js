import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState, useMemo, useRef } from 'react'
import MyButton from '../components/MyButton'
import SimpleInput from '../components/SimpleInput'
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from '@gorhom/bottom-sheet';
import CustomProgress from '../components/CustomProgress';
import Toast from 'react-native-simple-toast';
const PersonalDetails = ({ navigation }) => {
    const [name, setname] = useState('')
    const [address, setaddress] = useState('')
    const [phonenumber, setphonenumber] = useState('')
    const [nationality, setnationality] = useState('')
    const [availability, setavailability] = useState('')
    const [profilephoto, setprofilephoto] = useState('')
    const [sheetIndex, setsheetIndex] = useState(-1)
    const choosePhoto = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setprofilephoto(image.path)
            bottomSheetRef.current.close();
        });
    }
    const takePhoto = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setprofilephoto(image.path)
            bottomSheetRef.current.close();
        });
    }
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['25%', '42%'], []);
    const openBottomSheet = (index) => {
        setsheetIndex(index);
        bottomSheetRef.current.expand();
    };
    const closeBottomSheet = () => {
        setsheetIndex(-1);
        bottomSheetRef.current.close();
    };
    const handleNext = () => {
        if (!name || !phonenumber || !nationality || !address || !availability) {
            Toast.show('Please fill out all the required fields.', Toast.SHORT);
        } else {
            const data = { name, phonenumber, address, nationality, availability }
            navigation.navigate('IdentityDetails', { data })
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
            <CustomProgress per={0.3} title={'1/3'} />
            <View style={{ marginLeft: 20, alignSelf: 'flex-start' }}>
                <Text style={styles.title}>Personal Details</Text>
                <Text style={styles.desc}>Please enter Details to get started</Text>
            </View>
            <TouchableOpacity style={{ alignSelf: 'flex-start', }} onPress={() => openBottomSheet(1)}>
                <Image style={styles.img} source={profilephoto ? { uri: profilephoto } : require('../images/uploadimage.png')} />
            </TouchableOpacity>
            <SimpleInput value={name} setValue={setname} hint={'Enter Name'} />
            <SimpleInput value={phonenumber} setValue={setphonenumber} hint={'Phone number'} />
            <SimpleInput value={nationality} setValue={setnationality} hint={'Address'} />
            <SimpleInput value={address} setValue={setaddress} hint={'Nationality'} />
            <SimpleInput value={availability} setValue={setavailability} hint={'Select Availability'} />
            <MyButton title={'Next'} onPress={handleNext} />
            <BottomSheet
                ref={bottomSheetRef}
                index={sheetIndex}
                snapPoints={snapPoints}
                enablePanDownToClose
            >
                <View style={styles.panel}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.panelTitle}>Upload Photo</Text>
                        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
                    </View>
                    <TouchableOpacity style={styles.panelButton} onPress={takePhoto}>
                        <Text style={styles.panelButtonTitle}>Take Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.panelButton} onPress={choosePhoto}>
                        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.panelButton} onPress={() => closeBottomSheet()}>
                        <Text style={styles.panelButtonTitle}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
        </View>
    )
}
export default PersonalDetails
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
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
    img: {
        width: 105,
        height: 105,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20,
        resizeMode: 'contain'
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
        width: '100%',
        height: '100%'
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelTitle: {
        fontSize: 20,
        color: '#000000',
        fontFamily: 'Poppins-SemiBold'
    },
    panelSubtitle: {
        fontSize: 14,
        color: '#777777',
        marginBottom: 8,
        fontFamily: 'Poppins-Regular'
    },
    panelButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FE4101',
        alignItems: 'center',
        marginVertical: 8,
    },
    panelButtonTitle: {
        fontSize: 14,
        color: '#FFFFFF',
        fontFamily: 'Poppins-Regular'
    },
})