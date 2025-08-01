import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import BackButton from "../../components/Button/BackButton";
import Button from "../../components/Button/Button";

type RootStackParamList = {
  FirstPage: undefined;
  SecondPage: undefined;
  DaftarPage: undefined;
  MasukPage: undefined;
};

type SecondPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SecondPage"
>;

const SecondPage = ({
  navigation,
}: {
  navigation: SecondPageNavigationProp;
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header dengan Tombol Back */}
        <View style={styles.header}>
          <BackButton />
        </View>
        {/* Konten Utama */}
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../../assets/photo/Icon.png")} // ✅ ini cara aman dan standar
              style={styles.logo}
            />
          </View>

          <Text style={styles.questionText}>Apakah Anda memiliki akun?</Text>

          <View style={styles.buttonContainer}>
            <Button
              title="Sudah"
              variant="secondary"
              onPress={() => navigation.navigate("MasukPage")}
              style={{ flex: 1, marginRight: 10 }}
            />
            <Button
              title="Belum"
              onPress={() => navigation.navigate("DaftarPage")}
              style={{ flex: 1, marginLeft: 10 }}
            />
          </View>
        </View>

        {/* Spacer */}
        <View style={styles.footerSpacer} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#CCE1F5",
  },
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  backButton: {
    padding: 10,
    alignSelf: "flex-start",
  },
  content: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  footerSpacer: {
    flex: 1,
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
  questionText: {
    fontSize: 20,
    color: "#274871",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Poppins-SemiBold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default SecondPage;
