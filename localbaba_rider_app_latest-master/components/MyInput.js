import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
const MyInput = ({ hint, img, value, setValue, validateValue, error,onEyePress,visible }) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
        error(false);
    };
    const handleBlur = () => {
        setIsFocused(false);
        validateValue(value);
    };
    return (
        <View style={{ width: '90%', marginVertical: 10, alignSelf: 'center' }}>
            <View
                style={[
                    styles.inputView,
                    {
                        borderColor: isFocused ? '#FE4101' : '#F8F8F8',
                        backgroundColor: isFocused ? '#FFFFFF' : '#F8F8F8',
                    },
                ]}
            >
                <TextInput
                    style={[styles.input, { backgroundColor: isFocused ? '#FFFFFF' : '#F8F8F8' }]}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChangeText={(txt) => setValue(txt)}
                    value={value}
                    placeholder={hint}
                    secureTextEntry={visible}
                    placeholderTextColor={'#949494'}
                />
                <TouchableOpacity style={{ marginRight: 15 }} onPress={onEyePress}>
                    <Icon size={20} color={isFocused ? '#FE4101' : '#949494'} name={img} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MyInput;
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

