import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";

import FirstPage from "./src/screens/auth/FirstPage";
import SecondPage from "./src/screens/auth/SecondPage";
import DaftarPage from "./src/screens/auth/DaftarPage";
import MasukPage from "./src/screens/auth/MasukPage";

// 1. Tambahkan halaman Home (nanti kita buat)
import HomePage from "./src/screens/home/HomePage";

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const [initialRoute, setInitialRoute] = useState<null | string>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      setInitialRoute(isLoggedIn === "true" ? "HomePage" : "FirstPage");
    };

    checkLoginStatus();
  }, []);

  if (!fontsLoaded || !initialRoute) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="DaftarPage" component={DaftarPage} />
        <Stack.Screen name="MasukPage" component={MasukPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
