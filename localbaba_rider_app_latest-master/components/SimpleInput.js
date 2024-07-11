import { StyleSheet, View, TextInput } from 'react-native'
import React, { useState } from 'react'
const SimpleInput = ({ hint, value, setValue }) => {
    const [isFocused, setisFocused] = useState(false)
    const handleFocus = () => {
        setisFocused(true);
    }
    const handleBlur = () => {
        setisFocused(false);
    }
    return (
        <View style={{ width: '90%', marginVertical: 8, alignSelf: 'center' }}>
            <View style={[styles.inputView, {
                borderColor: isFocused ? '#FE4101' : '#F8F8F8',
                backgroundColor: isFocused ? '#FFFFFF' : '#F8F8F8',
            }]}>
                <TextInput
                    style={[styles.input, { backgroundColor: isFocused ? '#FFFFFF' : '#F8F8F8' }]}
                    onChangeText={(txt) => setValue(txt)}
                    value={value}
                    placeholder={hint}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholderTextColor={'#777777'} />
            </View>
        </View>
    )
}
export default SimpleInput
const styles = StyleSheet.create({
    input: {
        width: '80%',
        fontSize: 14,
        color: '#000000D9',
        padding: 18,
        backgroundColor: '#F8F8F8',
        fontFamily: 'Poppins-Regular',
        borderRadius: 12,
    },
    inputView: {
        width: '100%',
        marginTop: 5,
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 12,
    }
});