import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome";

import UserInfo from '../user_info';
import Settings from '../settings';
import UserManage from '../user_manage';


const HomeScreen = () => {
 const Tab = createBottomTabNavigator();
 return (
  <Tab.Navigator screenOptions={{tabBarActiveTintColor: 'blue', headerShown: false}}>
    <Tab.Screen options={{ headerShown: false,tabBarIcon: ({color, size})=><Icon name="user" color={color} size={size} />}} name="users" component={UserInfo} />
    <Tab.Screen options={{ headerShown: false,tabBarIcon: ({color, size})=><Icon name="user-circle" color={color} size={size} />}} name="userManage" component={UserManage} />
    <Tab.Screen options={{ headerShown: false,tabBarIcon: ({color, size})=><Icon name="cog" color={color} size={size} />}} name="settings" component={Settings} />

  </Tab.Navigator>
 )
  
}
export default HomeScreen;