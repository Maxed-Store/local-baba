import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
const MyButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}
export default MyButton
const styles = StyleSheet.create({
    btn: {
        width: '90%',
        padding: 18,
        borderRadius: 99,
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#FE4101'
    },
    btnText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FFFFFF',
        textTransform:'capitalize',
        fontFamily: 'Poppins-Regular'
    }
})