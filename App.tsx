// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font'; // <-- 1. IMPORT useFonts

import FirstPage from './src/screens/FirstPage';
import SecondPage from './src/screens/SecondPage';
import DaftarPage from './src/screens/DaftarPage';
import MasukPage from './src/screens/MasukPage';

const Stack = createStackNavigator();

const App = () => {
  // 2. Muat font di sini. Nama di kiri ('Poppins-Regular') adalah nama yang akan kita pakai di style.
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  // 3. Jangan tampilkan apapun sampai font selesai dimuat
  if (!fontsLoaded) {
    return null; // Atau kamu bisa tampilkan loading screen di sini
  }

  // 4. Setelah font siap, baru tampilkan aplikasi
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="FirstPage"
        screenOptions={{ headerShown: false }} 
      >
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="DaftarPage" component={DaftarPage} />
        <Stack.Screen name="MasukPage" component={MasukPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;