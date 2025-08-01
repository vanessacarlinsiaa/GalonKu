import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";

type HomePageNavigationProp = StackNavigationProp<
  RootStackParamList,
  "HomePage"
>;

const HomePage = ({ navigation }: { navigation: HomePageNavigationProp }) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("isLoggedIn");
    navigation.replace("FirstPage");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Selamat Datang di GalonKu 💧</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCE1F5",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  text: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    color: "#274871",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#274871",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    color: "#E1F1FD",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
});

export default HomePage;
