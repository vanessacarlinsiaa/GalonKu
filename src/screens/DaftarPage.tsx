import React from 'react';
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
type DaftarPageNavigationProp = StackNavigationProp<RootStackParamList, 'DaftarPage'>;

const DaftarPage = ({ navigation }: { navigation: DaftarPageNavigationProp }) => {
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

            <Text style={styles.title}>Daftar</Text>

            {/* Form Input */}
            <View style={styles.form}>
              <Text style={styles.label}>Nama</Text>
              <TextInput style={styles.input} placeholder="Masukkan nama lengkap" />

              <Text style={styles.label}>No HP</Text>
              <TextInput style={styles.input} placeholder="Contoh: 08123456789" keyboardType="phone-pad" />

              <Text style={styles.label}>Password</Text>
              <TextInput style={styles.input} placeholder="Buat password" secureTextEntry />

              <Text style={styles.label}>No Unit</Text>
              <TextInput style={styles.input} placeholder="Masukkan nomor unit apartemen" />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('MasukPage')}>
              <Text style={styles.signInText}>
                Sudah punya akun? <Text style={styles.signInLink}>Masuk</Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}>Daftar</Text>
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
    flexGrow: 1,
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
    paddingTop: 50, // Beri ruang untuk header
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
    fontSize: 15,
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
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#274871',
  },
  signUpButton: {
    backgroundColor: '#274871',
    width: '100%',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 25,
  },
  signUpButtonText: {
    color: '#E1F1FD',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  signInText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#00000',
  },
  signInLink: {
    fontFamily: 'Poppins-SemiBold',
    color: '#274871',
    textDecorationLine: 'underline',
  },
});

export default DaftarPage;
