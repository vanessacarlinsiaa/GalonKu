// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 1. Import semua halaman yang sudah kita buat
import FirstPage from './src/screens/FirstPage';
import SecondPage from './src/screens/SecondPage';
import DaftarPage from './src/screens/DaftarPage';
import MasukPage from './src/screens/MasukPage';

// 2. Buat "Stack" navigatornya
const Stack = createStackNavigator();

const App = () => {
  return (
    // 3. Bungkus semua navigasi dengan NavigationContainer
    <NavigationContainer>
      <Stack.Navigator 
        // 4. Tentukan halaman mana yang muncul pertama kali
        initialRouteName="FirstPage"
        // Opsi untuk menghilangkan header bawaan
        screenOptions={{ headerShown: false }} 
      >
        {/* 5. Daftarkan semua halaman di sini */}
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="DaftarPage" component={DaftarPage} />
        <Stack.Screen name="MasukPage" component={MasukPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;