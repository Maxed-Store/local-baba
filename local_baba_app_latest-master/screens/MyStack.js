import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash';
import Login from './Login';
import Home from './Home';
import CustomSlider from './CustomSlider';
import ForgetPassword from './ForgetPassword';
import OpenInbox from './OpenInbox';
import PrivacyPolicy from './PrivacyPolicy';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';
import BottomTabNavigation from './BottomNavigation';
import Account from './Account';
import FoodDetails from './FoodDetails';
import AboutUs from './AboutUs';
import Cart from './Cart';
import MealDetails from './MealDetails';
import Register from './Register';
const Stack = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="CustomSlider" component={CustomSlider} options={{ headerShown: false }} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
            <Stack.Screen name="OpenInbox" component={OpenInbox} options={{ headerShown: false }} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ headerShown: false }} />
            <Stack.Screen name="AboutUs" component={AboutUs} options={{ headerShown: false }} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />
            <Stack.Screen name="DeleteAccount" component={DeleteAccount} options={{ headerShown: false }} />
            <Stack.Screen name="HomeTabs" component={BottomTabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
            <Stack.Screen name="FoodDetails" component={FoodDetails} options={{ headerShown: false }} />
            <Stack.Screen name="MealDetails" component={MealDetails} options={{ headerShown: false }} />
            <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
export default MyStack;