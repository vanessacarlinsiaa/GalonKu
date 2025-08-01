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
import BackButton from "../../components/Button/BackButton";
import Button from "../../components/Button/Button";
import Ionicons from "react-native-vector-icons/Ionicons";
import { registerUser } from "../../utils/db";

type RootStackParamList = {
  FirstPage: undefined;
  SecondPage: undefined;
  DaftarPage: undefined;
  MasukPage: undefined;
};

type DaftarPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  "DaftarPage"
>;

const DaftarPage = ({
  navigation,
}: {
  navigation: DaftarPageNavigationProp;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [nama, setNama] = useState("");
  const [noHp, setNoHp] = useState("");
  const [password, setPassword] = useState("");
  const [unit, setUnit] = useState("");

  const handleRegister = async () => {
    if (!nama || !noHp || !password || !unit) {
      alert("Mohon isi semua data.");
      return;
    }

    const success = await registerUser(noHp, password, nama, unit);
    if (success) {
      navigation.replace("MasukPage");
    } else {
      alert("❌ Gagal daftar. No HP mungkin sudah terdaftar.");
    }
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

            <Text style={styles.title}>Daftar</Text>

            <View style={styles.form}>
              <Text style={styles.label}>Nama</Text>
              <TextInput
                style={styles.input}
                placeholder="Masukkan nama lengkap"
                value={nama}
                onChangeText={setNama}
              />

              <Text style={styles.label}>No HP</Text>
              <TextInput
                style={styles.input}
                placeholder="Contoh: 08123456789"
                keyboardType="phone-pad"
                value={noHp}
                onChangeText={setNoHp}
              />

              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordInputWrapper}>
                <TextInput
                  style={[styles.input, styles.passwordInput]}
                  placeholder="Buat password"
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

              <Text style={styles.label}>No Unit</Text>
              <TextInput
                style={styles.input}
                placeholder="Masukkan nomor unit apartemen"
                value={unit}
                onChangeText={setUnit}
              />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("MasukPage")}>
              <Text style={styles.signInText}>
                Sudah punya akun? <Text style={styles.signInLink}>Masuk</Text>
              </Text>
            </TouchableOpacity>

            <Button
              title="Daftar"
              onPress={handleRegister}
              style={{ width: "100%", marginTop: 20 }}
              variant="primary"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingBottom: 40,
    paddingTop: 50,
  },
  logoContainer: {
    padding: 20,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: 5,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  title: {
    fontSize: 40,
    fontFamily: "Poppins-SemiBold",
    color: "#0D3D6F",
    marginBottom: 25,
    letterSpacing: 5,
  },
  form: {
    width: "100%",
  },
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
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#274871",
  },
  passwordInputWrapper: {
    position: "relative",
    justifyContent: "center",
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
  signInText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#000000",
  },
  signInLink: {
    fontFamily: "Poppins-SemiBold",
    color: "#274871",
    textDecorationLine: "underline",
  },
});

export default DaftarPage;
