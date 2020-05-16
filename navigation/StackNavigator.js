import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import BottomTabNavigator from '../navigation/BottomTabNavigator';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Welcome';

export default function StackNavigator({ navigation, route }){
  //navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME} >
        <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Root" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Welcome':
      return 'How to get started';
  }
}
