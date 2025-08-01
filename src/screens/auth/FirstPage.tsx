import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Button from "../../components/Button/Button";

type RootStackParamList = {
  FirstPage: undefined;
  SecondPage: undefined;
  DaftarPage: undefined;
  MasukPage: undefined;
};

type FirstPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  "FirstPage"
>;

const FirstPage = ({ navigation }: { navigation: FirstPageNavigationProp }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/photo/Icon.png")} // ✅ ini cara aman dan standar
          style={styles.logo}
        />
      </View>

      <Text style={styles.welcomeText}>Selamat Datang di GalonKu 👋</Text>

      <Button
        title="Pesan"
        variant="secondary" // ← warna terang + teks biru tua
        onPress={() => navigation.navigate("SecondPage")}
        style={{ marginTop: 20 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCE1F5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: 5,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
    color: "#274871",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default FirstPage;
