import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const stack=createStackNavigator();
const Stacknav=()=>{
  return(
    <Stack.Navigator 
      screenOptions={{headerShown:false,
      gestureEnabled:false,

      }}>
        <Stack.Screen name='Login' component ={LoginScreen}/>
        <Stack.Screen name='Register' component = {LoginScreen}/>
        <Stack.screen name='Dashboard' component = {DashboardScreen}/>


      </Stack.Navigator>

  )
}

export default function App() {
  return (

    <NavigationContainer>
      <DrawerNavigator Stacknav/>
    </NavigationContainer>
  );
}
