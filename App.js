import React from 'react';

import Scanner from './screens/Scanner';
import Home from './screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{title:"Inicio",headerTintColor:'#171717', headerStyle:{backgroundColor:'#e1f7a9'}}} component={Home} />
      <Stack.Screen name="Scanner" options={{title:"Lector QR/BARCODE",headerBackTitleVisible:false, headerTintColor:'#171717',headerStyle:{backgroundColor:'#e1f7a9'}}} component={Scanner} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}