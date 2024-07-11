import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Ant from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather'
import { View, Text, StyleSheet } from 'react-native';
import Profile from './Profile';
import Home from './Home';
import Services from './Services';
import Grocery from './Grocery';
import Food from './Food';
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
            <Tab.Screen name="Food" component={Food}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.iconContainer}>
                                <Icon2 name="food-bank" color={focused ? '#FE4101' : '#949494'} size={28} />
                                <Text style={[styles.textStyle, focused ? { color: '#FE4101' } : null,]}>Food</Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen name="Grocery" component={Grocery}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.iconContainer}>
                                <Icon2 name="local-grocery-store" color={focused ? '#FE4101' : '#949494'} size={28} />
                                <Text style={[styles.textStyle, focused ? { color: '#FE4101' } : null]}>Grocery</Text>
                            </View>
                        );
                    },
                }}
            />
              <Tab.Screen name="Services" component={Services}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.iconContainer}>
                                <Icon name="food" color={focused ? '#FE4101' : '#949494'} size={28} />
                                <Text style={[styles.textStyle, focused ? { color: '#FE4101' } : null]}>All Services</Text>
                            </View>
                        );
                    },
                }}
            />
             <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.iconContainer}>
                                <Feather name="box" color={focused ? '#FE4101' : '#949494'} size={28} />
                                <Text style={[styles.textStyle, focused ? { color: '#FE4101' } : null]}>Snoosend</Text>
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
        fontFamily: 'Poppins-Light',
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
