import { StyleSheet, Text, View, TextInput, Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import MyButton from '../components/MyButton'
import Modal from 'react-native-modal'
const DeleteAccount = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }
    return (
        <View style={styles.container}>
            <Header title={''} />
            <View style={styles.card}>
                <Text style={styles.title}>Delete Account</Text>
                <Text style={styles.desc}>Can you please share to us what was not working? We are fixing bugs as soon as we spot them. If something slipped through our fingers, we'd be so grateful to be aware of it and fix it.
                    Your explanation is entirely optional..
                </Text>
            </View>
            <Modal animationType="slide" transparent={true} isVisible={modalVisible} onBackdropPress={toggleModal}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image style={{ height: 105, width: 105, resizeMode: 'contain' }} source={require('../images/danger.png')} />
                        <Text style={styles.mtitle}>Are You Sure?</Text>
                        <Text style={styles.mdesc}>you won’t be able to revert this?</Text>
                        <View style={styles.rowCard}>
                            <TouchableOpacity style={[styles.btn,{backgroundColor:'#FFFFFF',borderColor:'#FE4101',borderWidth:1}]}
                             onPress={toggleModal}>
                                <Text style={[styles.btnText,{color:'#FE4101'}]}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={toggleModal}>
                                <Text style={styles.btnText}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <TextInput multiline numberOfLines={10} style={styles.area} placeholder='Your explanation is entirely optional..' />
            <MyButton title={'confirm deletion'} onPress={toggleModal} />
        </View>
    )
}
export default DeleteAccount
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000000',
        marginHorizontal: 10,
        alignSelf: 'flex-start',
        fontFamily: 'Roboto-Bold',
    },
    desc: {
        fontSize: 14,
        fontWeight: '600',
        color: '#7C7C7C',
        marginHorizontal: 10,
        alignSelf: 'flex-start',
        textAlign: 'justify',
        fontFamily: 'Roboto-Regular',
    },
    card: {
        width: '99%',
        padding: 15
    },
    area: {
        width: '90%',
        padding: 10,
        alignSelf: 'center',
        textAlignVertical: 'top',
        backgroundColor: '#F8F8F8',
        elevation: 1,
        borderRadius:8
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
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    mtitle: {
        marginTop: 10,
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        color: '#434343',
    },
    mdesc: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#949494',
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    btn: {
        width: 100,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#FE4101'
    },
    btnText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FFFFFF',
        fontFamily: 'Poppins-Regular'
    },
    rowCard: {
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})