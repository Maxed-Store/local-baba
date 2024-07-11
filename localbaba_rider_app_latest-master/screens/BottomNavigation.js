import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ant from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet } from 'react-native';
import Profile from './Profile';
import Home from './Home';
import FindOrder from './FindOrder';
const Tab = createBottomTabNavigator();
function BottomTabNavigation() {
    return (
        <Tab.Navigator initialRouteName="HomeTabs"
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    backgroundColor: '#FFF',
                    elevation: 5,
                    shadowColor: '#fafafa',
                    width: '100%',
                    alignSelf: 'center',
                    height: 65,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#777777',
                tabBarShowLabel: false,
                headerShown: true,
            }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.iconContainer}>
                                <Icon name="home" color={focused ? '#FE4101' : '#949494'} size={28} />
                                <Text style={[styles.textStyle, focused ? { color: '#FE4101' } : null,]}>Home</Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen name="Location" component={FindOrder}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.iconContainer}>
                                <Icon name="map-marker-outline" color={focused ? '#FE4101' : '#949494'} size={28} />
                                <Text style={[styles.textStyle, focused ? { color: '#FE4101' } : null]}>Location</Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.iconContainer}>
                                <Ant name="user" color={focused ? '#FE4101' : '#949494'} size={28} />
                                <Text style={[styles.textStyle, focused ? { color: '#FE4101' } : null]}>Profile</Text>
                            </View>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        fontStyle: 'normal',
        color: '#949494',
        textAlign: 'center',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default BottomTabNavigation;
