import React, { useState, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import SmallButton from '../components/SmallButton';
const data = [
    {
        id: '1',
        title: 'Find your  Comfort Food here',
        desc: 'Here You Can find a chef or dish for every taste and color. Enjoy!',
        image: require('../images/1.png'),
    },
    {
        id: '2',
        title: 'local baba is Where Your Comfort Food Lives',
        desc: 'Enjoy a fast and smooth food delivery at your doorstep',
        image: require('../images/2.png'),
    },
];
const CustomSlider = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);
    const renderItem = ({ item, index }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={{ width: Dimensions.get('window').width / 1.4 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
            </View>
        </View>
    );
    const renderPaginationDot = (index) => (
        <TouchableOpacity
            key={index}
            style={[styles.paginationDot, {
                backgroundColor: index === currentIndex ? '#FE4101' : '#D9D9D9',
                width: index === currentIndex ? 8 : 8
            }]}
            onPress={() => scrollToIndex(index)}
        />
    );
    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        flatListRef.current.scrollToIndex({ index, animated: true });
    };
    const handleNext = () => {
        if (currentIndex <= 0) {
            scrollToIndex(currentIndex + 1)
        } else {
            navigation.navigate('Login')
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
            <FlatList
                ref={flatListRef}
                data={data}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                onMomentumScrollEnd={(event) => {
                    const index = Math.floor(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
                    setCurrentIndex(index);
                }}
            />
            <View style={styles.paginationContainer}>{data.map((_, index) => renderPaginationDot(index))}</View>
            <SmallButton title={'Next'} onPress={() => handleNext()} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    itemContainer: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 280,
        height: 280,
        resizeMode: 'contain',
        marginBottom: 40,
    },
    paginationContainer: {
        flexDirection: 'row',
    },
    paginationDot: {
        width: 8,
        height: 8,
        color: '#FE4101',
        borderRadius: 5,
        margin: 5,
    },
    title: {
        fontSize: 20,
        marginVertical: 5,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
    },
    desc: {
        fontSize: 14,
        marginVertical: 10,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        color: '#363E44',
    },
});
export default CustomSlider;
