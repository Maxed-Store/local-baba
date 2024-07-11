import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash';
import CustomSlider from './CustomSlider';
import Login from './Login';
import PersonalDetails from './PersonalDetails';
import IdentityDetails from './IdentityDetails';
import VehicleDetails from './VehicleDetails';
import Observe from './Observe';
import Location from './Location';
import ChangePassword from './ChangePassword';
import Profile from './Profile';
import Home from './Home';
import Notification from './Notification';
import Orders from './Orders';
import AccountInfo from './AccountInfo';
import BottomTabNavigation from './BottomNavigation';
import FindOrder from './FindOrder';
const Stack = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="CustomSlider" component={CustomSlider} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="PersonalDetails" component={PersonalDetails} options={{ headerShown: false }} />
            <Stack.Screen name="IdentityDetails" component={IdentityDetails} options={{ headerShown: false }} />
            <Stack.Screen name="VehicleDetails" component={VehicleDetails} options={{ headerShown: false }} />
            <Stack.Screen name="Observe" component={Observe} options={{ headerShown: false }} />
            <Stack.Screen name="Location" component={Location} options={{ headerShown: false }} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
            <Stack.Screen name="Orders" component={Orders} options={{ headerShown: false }} />
            <Stack.Screen name="AccountInfo" component={AccountInfo} options={{ headerShown: false }} />
            <Stack.Screen name="HomeTabs" component={BottomTabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="FindOrder" component={FindOrder} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
export default MyStack;