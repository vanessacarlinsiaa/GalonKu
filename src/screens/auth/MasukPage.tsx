import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackButton from "../../components/Button/BackButton";
import Button from "../../components/Button/Button";
import Ionicons from "react-native-vector-icons/Ionicons";

type RootStackParamList = {
  FirstPage: undefined;
  SecondPage: undefined;
  DaftarPage: undefined;
  MasukPage: undefined;
  HomePage: undefined;
};

type MasukPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  "MasukPage"
>;

const MasukPage = ({ navigation }: { navigation: MasukPageNavigationProp }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [noHp, setNoHp] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (noHp.trim() === "" || password.trim() === "") {
      alert("Harap isi semua field!");
      return;
    }

    if (rememberMe) {
      await AsyncStorage.setItem("isLoggedIn", "true");
    }

    navigation.replace("HomePage");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.header}>
            <BackButton />
          </View>

          <View style={styles.content}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../../../assets/photo/Icon.png")}
                style={styles.logo}
              />
            </View>

            <Text style={styles.title}>Masuk</Text>

            <View style={styles.form}>
              <Text style={styles.label}>No HP</Text>
              <TextInput
                style={styles.input}
                placeholder="Masukkan No HP terdaftar"
                keyboardType="phone-pad"
                value={noHp}
                onChangeText={setNoHp}
              />

              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordInputWrapper}>
                <TextInput
                  style={[styles.input, styles.passwordInput]}
                  placeholder="Masukkan password"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeButton}
                >
                  <Ionicons
                    name={showPassword ? "eye-off" : "eye"}
                    size={20}
                    color="#274871"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.optionsContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("DaftarPage")}
              >
                <Text style={styles.linkText}>
                  Belum punya akun? <Text style={styles.linkBold}>Daftar</Text>
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.rememberMeContainer}
                onPress={() => setRememberMe(!rememberMe)}
              >
                <View
                  style={[
                    styles.checkbox,
                    rememberMe && styles.checkboxChecked,
                  ]}
                >
                  {rememberMe && <Text style={styles.checkboxTick}>✓</Text>}
                </View>
                <Text style={styles.rememberMeText}>Remember Me</Text>
              </TouchableOpacity>
            </View>

            <Button
              title="Masuk"
              onPress={handleLogin}
              style={{ width: "100%" }}
              variant="primary"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#CCE1F5" },
  container: { flex: 1 },
  scrollView: { flexGrow: 0.5, justifyContent: "center" },
  header: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 },
  content: { alignItems: "center", paddingHorizontal: 30, paddingBottom: 40 },
  logoContainer: {
    padding: 20,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: 5,
  },
  logo: { width: 120, height: 120, resizeMode: "contain" },
  title: {
    fontSize: 40,
    fontFamily: "Poppins-SemiBold",
    color: "#0D3D6F",
    marginBottom: 25,
    letterSpacing: 5,
  },
  form: { width: "100%" },
  label: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "#274871",
    marginBottom: 2,
    marginLeft: 5,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#274871",
  },
  passwordInputWrapper: {
    position: "relative",
    justifyContent: "center",
    marginBottom: 10,
  },
  passwordInput: {
    paddingRight: 40,
    marginBottom: 0,
  },
  eyeButton: {
    position: "absolute",
    right: 15,
    top: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
    paddingHorizontal: 5,
  },
  linkText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#000000",
  },
  linkBold: {
    fontFamily: "Poppins-SemiBold",
    color: "#274871",
    textDecorationLine: "underline",
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 2,
    borderWidth: 1.5,
    borderColor: "#0D3D6F",
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#0D3D6F",
  },
  checkboxTick: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  rememberMeText: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#0D3D6F",
  },
});

export default MasukPage;
