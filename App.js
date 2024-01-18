import { useState, useEffect, useRef } from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import ScannerScreen from './src/screens/ScannerScreen';
import ResultScanScreen from './src/screens/ResultScanScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { View, Text, TouchableOpacity, Image, Keyboard } from 'react-native';
import { globalStyles } from './src/styles/global';
import ExitIco from './assets/exit.svg';

const Stack = createNativeStackNavigator();

export default function App() {
  const globalNavigatorRef = createNavigationContainerRef();
  const [initialRouteName, setInitialRouteName] = useState('LoginScreen');

  const exitSystemBtn = () => (
    <TouchableOpacity style={{ padding: 5 }} onPress={() => globalNavigatorRef.navigate('LoginScreen')}>
      <ExitIco fill='white' style={{
        padding: 10,
        height: 25,
        width: 25,
      }} />
    </TouchableOpacity>
  );

  return (
    <NavigationContainer ref={globalNavigatorRef}>
      <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: true, headerTitleAlign: 'center', headerTintColor: 'white', headerTitleStyle: globalStyles.headerTitle, headerStyle: globalStyles.header }} >
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false, headerBackVisible: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "HOME", headerBackVisible: false, headerRight: exitSystemBtn }} />
        <Stack.Screen name="MessagesScreen" component={MessagesScreen} options={{ title: "MESSAGES" }} />
        <Stack.Screen name="ScannerScreen" component={ScannerScreen} options={{ title: "SCANNER" }} />
        <Stack.Screen name="ResultScanScreen" component={ResultScanScreen} options={{ title: "SCAN RESULT" }} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: "SETTINGS" }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};