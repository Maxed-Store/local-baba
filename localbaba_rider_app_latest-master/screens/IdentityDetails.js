import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../components/MyButton'
import SimpleInput from '../components/SimpleInput'
import ImagePicker from 'react-native-image-crop-picker';
import CustomProgress from '../components/CustomProgress';
import Toast from 'react-native-simple-toast';
import DatePicker from 'react-native-date-picker'
const IdentityDetails = ({ navigation, route }) => {
    const [idcard, setidcard] = useState('')
    const [expiry, setexpiry] = useState(new Date())
    const [dob, setdob] = useState(new Date())
    const [dlicense, setdlicense] = useState('')
    const [idphoto, setidphoto] = useState('')
    const [licensephoto, setlicensephoto] = useState('')
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const isDefaultExpiry = expiry.getTime() === new Date().getTime();
    const isDefaultDob = dob.getTime() === new Date().getTime()
    const formattedExpiry = isDefaultExpiry ? 'Date of expiry' : expiry.toLocaleDateString();
    const formattedDob = isDefaultDob ? 'Date of birth' : dob.toLocaleDateString();
    const choosePhoto = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setidphoto(image.path)
        });
    }
    const chooseLicensePhoto = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setlicensephoto(image.path)
        });
    }
    const handleNext = () => {
        if (!idcard || !expiry || !dob || !dlicense || !idphoto || !licensephoto) {
            Toast.show('Please fill out all the required fields.', Toast.SHORT);
        } else {
            const personalData = route.params?.data;
            const idData = { idcard, expiry, dob, dlicense, idphoto, licensephoto }
            navigation.navigate('VehicleDetails', { data: { ...personalData, ...idData } })
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
            <CustomProgress per={0.7} title={'2/3'} />
            <View style={{ marginLeft: 20, alignSelf: 'flex-start' }}>
                <Text style={styles.title}>Personal Details</Text>
                <Text style={styles.desc}>Please enter Details to get started</Text>
            </View>
            <SimpleInput value={idcard} setValue={setidcard} hint={'Enter National ID No|'} />
            <TouchableOpacity style={styles.dateView} onPress={() => setOpen2(!open2)}>
                <Text style={styles.date}>{formattedExpiry}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateView} onPress={() => setOpen(!open)}>
                <Text style={styles.date}>{formattedDob}</Text>
            </TouchableOpacity>
            <SimpleInput value={dlicense} setValue={setdlicense} hint={'Enter Driving License No'} />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.btn} onPress={choosePhoto}>
                    <Image style={styles.img} source={require('../images/upload.png')} />
                    <Text style={styles.btnText}>{idphoto ? 'Uploaded' : 'Upload Photo of  ID '}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={chooseLicensePhoto}>
                    <Image style={styles.img} source={require('../images/upload.png')} />
                    <Text style={styles.btnText}>{licensephoto ? 'Uploaded' : 'Upload photo of  Driving License '}</Text>
                </TouchableOpacity>
            </View>
            <DatePicker
                modal
                textColor='#FE4101'
                mode='date'
                open={open}
                date={dob}
                onConfirm={(date) => {
                    setOpen(false)
                    setdob(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            <DatePicker
                modal
                textColor='#FE4101'
                mode='date'
                open={open2}
                date={expiry}
                onConfirm={(date) => {
                    setOpen2(false)
                    setexpiry(date)
                }}
                onCancel={() => {
                    setOpen2(false)
                }}
            />
            <MyButton title={'Next'} onPress={() => setOpen(true)} />
        </View>
    )
}
export default IdentityDetails
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    btn: {
        width: '42%',
        padding: 10,
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
    dateView: {
        width: '90%',
        marginVertical: 8,
        padding: 20,
        backgroundColor: '#F8F8F8',
        borderRadius: 12,
    },
    date: {
        fontSize: 14,
        color: '#777777',
        fontFamily: 'Poppins-Regular',
    }
})