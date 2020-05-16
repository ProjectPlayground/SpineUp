import * as React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
  SimpleLineIcons,
} from '@expo/vector-icons';

import Firebase from '../config/Firebase';

import TabBarIcon from '../components/TabBarIcon';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPassWord from '../screens/ForgotPassword';
import SignUpScreen from '../screens/SignUpScreen';
import TermsScreen from '../screens/TermsScreen';
import LogoutScreen from '../screens/LogoutScreen';
import HomeScreen from '../screens/HomeScreen';
import DoctorsScreen from '../screens/DoctorsScreen';
import DoctorsDetailsScreen from '../screens/DoctorsDetailsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MessageDetails from '../screens/MessageDetails';
import HealthScreen from '../screens/HealthScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MedicalImages from '../screens/MedicalImages';
import MedicalBackground from '../screens/MedicalBackground';
import BookingScreen from '../screens/BookingScreen';
import PaymentScreen from '../screens/PaymentScreen';
import BookingSuccessfulScreen from '../screens/BookingSuccessfulScreen';
import About from '../screens/About';

import LinksScreen from '../screens/LinksScreen';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="WelcomeScreen"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Forgot" component={ForgotPassWord} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    <AuthStack.Screen name="Terms" component={TermsScreen} />
  </AuthStack.Navigator>
);

function LogoTitle({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <SimpleLineIcons
        name="menu"
        size={20}
        color="#007AFF"
        style={{ marginRight: 20 }}
      />
    </TouchableOpacity>
  );
}

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={({ navigation }) => ({
      headerRight: () => <LogoTitle navigation={navigation} />,
    })}
  >
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Doctors" component={DoctorsScreen} />
    <HomeStack.Screen name="DoctorsDetails" component={DoctorsDetailsScreen} />
    <HomeStack.Screen name="Booking" component={BookingScreen} />
    <HomeStack.Screen name="Payment" component={PaymentScreen} />
    <HomeStack.Screen
      name="BookingSuccessful"
      component={BookingSuccessfulScreen}
    />
  </HomeStack.Navigator>
);

const DoctorsStack = createStackNavigator();

const DoctorsScreenStack = () => (
  <DoctorsStack.Navigator
    screenOptions={({ navigation }) => ({
      headerRight: () => <LogoTitle navigation={navigation} />,
    })}
  >
    <DoctorsStack.Screen name="Doctors" component={DoctorsScreen} />
    <DoctorsStack.Screen
      name="DoctorsDetails"
      component={DoctorsDetailsScreen}
    />
    <DoctorsStack.Screen name="Booking" component={BookingScreen} />
    <DoctorsStack.Screen name="Payment" component={PaymentScreen} />
    <DoctorsStack.Screen
      name="BookingSuccessful"
      component={BookingSuccessfulScreen}
    />
  </DoctorsStack.Navigator>
);

const MessageStack = createStackNavigator();

const MessageStackScreen = () => (
  <MessageStack.Navigator
    screenOptions={({ navigation }) => ({
      headerRight: () => <LogoTitle navigation={navigation} />,
    })}
  >
    <MessageStack.Screen name="Messages" component={MessagesScreen} />
    <MessageStack.Screen
    name="MessageDetails"
    component={MessageDetails}
    //options={({ route }) => ({ title: route.params.receiverName })}
    />
  </MessageStack.Navigator>
);

const HealthStack = createStackNavigator();

const HealthStackScreen = () => (
  <HealthStack.Navigator
    screenOptions={({ navigation }) => ({
      headerRight: () => <LogoTitle navigation={navigation} />,
    })}
  >
    <HealthStack.Screen name="Health" component={HealthScreen} />
    <HealthStack.Screen name="Profile" component={ProfileScreen} />
    <HealthStack.Screen name="MedicalImages" component={MedicalImages} />
    <HealthStack.Screen
      name="MedicalBackground"
      component={MedicalBackground}
    />
  </HealthStack.Navigator>
);

const TabStack = createBottomTabNavigator();

const TabStackScreen = () => (
  <TabStack.Navigator>
    <TabStack.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarIcon: (props) => (
          <FontAwesome name="home" size={props.size} color={props.color} />
        ),
      }}
    />

    <TabStack.Screen
      name="Doctors"
      component={DoctorsScreenStack}
      options={{
        tabBarIcon: (props) => (
          <MaterialCommunityIcons
            name="doctor"
            size={props.size}
            color={props.color}
          />
        ),
      }}
    />

    <TabStack.Screen
      name="Messages"
      component={MessageStackScreen}
      options={{
        tabBarIcon: (props) => (
          <AntDesign name="message1" size={props.size} color={props.color} />
        ),
      }}
    />

    <TabStack.Screen
      name="Health"
      component={HealthStackScreen}
      options={{
        tabBarIcon: (props) => (
          <FontAwesome name="heartbeat" size={props.size} color={props.color} />
        ),
      }}
    />
    {/*  <TabStack.Screen name="Link" component={LinksScreen} /> */}
  </TabStack.Navigator>
);

const AppDrawer = createDrawerNavigator();

const AppDrawerScreen = () => (
  <AppDrawer.Navigator>
    <AppDrawer.Screen name="Home" component={TabStackScreen} />
    <AppDrawer.Screen name="Profile" component={ProfileScreen} />
    <AppDrawer.Screen name="About" component={About} />
    <AppDrawer.Screen name="Terms" component={TermsScreen} />
    <AppDrawer.Screen name="Logout" component={LogoutScreen} />
  </AppDrawer.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  function onAuthStateChanged(user) {
    setUser(user);
    //console.log(user);
    if (isLoading) {
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    const subscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (isLoading) {
    return null;
  }

  {
    /* React.useEffect(() => {
     setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
    setTimeout(() => {
      setUser({});
    }, 1000);
  }, []); */
  }

  return (
    <NavigationContainer>
      {user ? <AppDrawerScreen /> : <AuthStackScreen />}

      {/*isLoading ? null : user ? <SignUpScreen /> : <AuthStackScreen />*/}
    </NavigationContainer>
  );
};
