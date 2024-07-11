import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import CartCard from '../components/CartCard'
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal'
const Cart = () => {
    const [data, setdata] = useState([
        { id: 1, image: require('../images/dal.png'), title: 'Spacy fresh crab' },
        { id: 2, image: require('../images/dal.png'), title: 'Spacy fresh crab' },
        { id: 3, image: require('../images/dal.png'), title: 'Spacy fresh crab' },
    ]);
    const [id, setid] = useState(null)
    const deleteItem = () => {
        if (id !== null) {
            const updatedData = data.filter(item => item.id !== id);
            setdata(updatedData)
        }
        setid(null);
        setModalVisible(false);
    };
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = (id) => {
        setModalVisible(!modalVisible)
        setid(id);
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Header title={'Cart'} />
                <Image style={{ height: 40, width: 40, resizeMode: 'contain', marginRight: 20 }} source={require('../images/delete.png')} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '98%' }}>
                <Text style={styles.title}>Chicken Chase</Text>
                <TouchableOpacity style={styles.btn2}>
                    <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins-Regular', fontSize: 12 }}>Add More</Text>
                </TouchableOpacity>
            </View>
            <SwipeListView
                data={data}
                renderItem={(data, rowMap) => (
                    <CartCard key={data.item.id} image={data.item.image} title={data.item.title} />
                )}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}
                renderHiddenItem={(data, rowMap) => (
                    <View style={styles.rowBack}>
                        <Text>Left</Text>
                        <TouchableOpacity style={styles.delete} onPress={() => toggleModal(data.item.id)}>
                            <Icon name="trash-can-outline" size={25} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )}
                leftOpenValue={70}
                rightOpenValue={-70}
                disableRightSwipe
            />
            <Modal animationType="slide" transparent={true} isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image style={{ height: 105, width: 105, resizeMode: 'contain' }} source={require('../images/danger.png')} />
                        <Text style={styles.mtitle}>Are You Sure?</Text>
                        <Text style={styles.mdesc}>you won’t be able to revert this?</Text>
                        <View style={styles.buttonView}>
                            <TouchableOpacity style={[styles.mbtn, { backgroundColor: '#FFFFFF', borderColor: '#FE4101', borderWidth: 1 }]} onPress={() => setModalVisible(false)}>
                                <Text style={[styles.modalViewbtnText, { color: '#FE4101' }]}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.mbtn} onPress={deleteItem}>
                                <Text style={styles.mbtnText}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.footer} >
                <View style={styles.rowCard}>
                    <Text style={styles.txt}>Sub-Total</Text>
                    <Text style={styles.txt}>120$</Text>
                </View>
                <View style={styles.rowCard}>
                    <Text style={styles.txt}>Delivery Charge</Text>
                    <Text style={styles.txt}>10$</Text>
                </View>
                <View style={styles.rowCard}>
                    <Text style={styles.txt}>Discount</Text>
                    <Text style={styles.txt}>20$</Text>
                </View>
                <View style={[styles.rowCard, { marginTop: 10 }]}>
                    <Text style={[styles.txt, { fontFamily: 'Poppins-Bold' }]}>Total</Text>
                    <Text style={[styles.txt, { fontFamily: 'Poppins-Bold' }]}>150$</Text>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Place My Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Cart
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    delete: {
        borderTopRightRadius: 22,
        borderBottomRightRadius: 22,
        height: '87%',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FE4101',
        width: '22%',
        elevation: 2
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'flex-start',
        marginLeft: 20,
        color: '#141414',
    },
    rowCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '92%',
        alignSelf: 'center'
    },
    txt: {
        fontSize: 16,
        marginHorizontal: 10,
        fontFamily: 'Poppins-Medium',
        color: '#FFFFFF'
    },
    footer: {
        width: '92%',
        position: 'absolute',
        bottom: 10,
        padding: 10,
        borderRadius: 20,
        paddingTop: 30,
        elevation: 2,
        backgroundColor: '#FE4101'
    },
    btn: {
        width: '95%',
        backgroundColor: '#FFFFFF',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
    },
    btn2: {
        width: '22%',
        backgroundColor: '#FE4101',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginRight: 15,
        padding: 6
    },
    btnText: {
        fontSize: 14,
        marginHorizontal: 10,
        textTransform: 'capitalize',
        fontFamily: 'Poppins-SemiBold',
        color: '#FE4101'
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
    mbtn: {
        width: 100,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#FE4101'
    },
    mbtnText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FFFFFF',
        fontFamily: 'Poppins-Regular'
    },
    buttonView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})