import React, { useState } from 'react'; // Import useState untuk checkbox
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
  Platform
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Svg, Path } from 'react-native-svg';

// Definisi tipe untuk semua screen di stack navigasi
type RootStackParamList = {
  FirstPage: undefined;
  SecondPage: undefined;
  DaftarPage: undefined;
  MasukPage: undefined;
};

// Tipe spesifik untuk navigation prop di halaman ini
type MasukPageNavigationProp = StackNavigationProp<RootStackParamList, 'MasukPage'>;

const MasukPage = ({ navigation }: { navigation: MasukPageNavigationProp }) => {
  // State untuk menyimpan status checkbox "Remember Me"
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          {/* Header dengan Tombol Back */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <Path d="M15 19L8 12L15 5" stroke="#0D3D6F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </TouchableOpacity>
          </View>

          {/* Konten Utama */}
          <View style={styles.content}>
            <View style={styles.logoContainer}>
              <Image 
                source={require('../../assets/icon.png')}
                style={styles.logo}
              />
            </View>

            <Text style={styles.title}>Masuk</Text>

            {/* Form Input */}
            <View style={styles.form}>
              <Text style={styles.label}>No HP</Text>
              <TextInput style={styles.input} placeholder="Masukkan No HP terdaftar" keyboardType="phone-pad" />

              <Text style={styles.label}>Password</Text>
              <TextInput style={styles.input} placeholder="Masukkan password" secureTextEntry />
            </View>

            {/* Opsi di bawah form */}
            <View style={styles.optionsContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('DaftarPage')}>
                <Text style={styles.linkText}>
                  Belum punya akun? <Text style={styles.linkBold}>Daftar</Text>
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.rememberMeContainer} onPress={() => setRememberMe(!rememberMe)}>
                <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                  {rememberMe && <Text style={styles.checkboxTick}>✓</Text>}
                </View>
                <Text style={styles.rememberMeText}>Remember Me</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Masuk</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#CCE1F5',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 0.5,
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  backButton: {
    padding: 20,
    alignSelf: 'flex-start',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  logoContainer: {
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8, // Efek bayangan untuk Android
    marginBottom: 5, // Jarak ke teks di bawahnya
  },
  logo: {
    width: 120, // Lebar gambar
    height: 120, // Tinggi gambar
    resizeMode: 'contain', // Memastikan gambar tidak gepeng
  },
  title: {
    fontSize: 40,
    fontFamily: 'Poppins-SemiBold',
    color: '#0D3D6F',
    marginBottom: 25,
    letterSpacing: 5,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#274871',
    marginBottom: 2,
    marginLeft: 5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#274871',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
    paddingHorizontal: 5,
  },
  linkText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
  },
  linkBold: {
    fontFamily: 'Poppins-SemiBold',
    color: '#274871',
    textDecorationLine: 'underline',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 2,
    borderWidth: 1.5,
    borderColor: '#0D3D6F',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#0D3D6F',
  },
  checkboxTick: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  rememberMeText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#0D3D6F',
  },
  loginButton: {
    backgroundColor: '#274871',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#E1F1FD',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default MasukPage;