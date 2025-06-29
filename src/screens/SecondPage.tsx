import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Svg, Path } from 'react-native-svg';

type RootStackParamList = {
  FirstPage: undefined;
  SecondPage: undefined;
  DaftarPage: undefined;
  MasukPage: undefined;
};

type SecondPageNavigationProp = StackNavigationProp<RootStackParamList, 'SecondPage'>;

const SecondPage = ({ navigation }: { navigation: SecondPageNavigationProp }) => {
  return (
    // SafeAreaView adalah cara terbaik untuk menangani area "poni" di iOS
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/* 1. Bagian Header Khusus untuk Tombol Back */}
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

        {/* 2. Bagian Konten Utama */}
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image 
              source={require('../../assets/icon.png')}
              style={styles.logo}
            />
          </View>

          <Text style={styles.questionText}>
            Apakah Anda memiliki akun?
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.sudahButton]}
              onPress={() => navigation.navigate('MasukPage')}
            >
              <Text style={styles.sudahButtonText}>Sudah</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.button, styles.belumButton]}
              onPress={() => navigation.navigate('DaftarPage')}
            >
              <Text style={styles.belumButtonText}>Belum</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Spacer View agar konten tetap di tengah */}
        <View style={styles.footerSpacer} />

      </View>
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
  // Style untuk header
  header: {
    height: 60, // Memberi ruang untuk header
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  backButton: {
    padding: 10, // Area klik yang lebih besar
    alignSelf: 'flex-start', // Memastikan tombol menempel di kiri
  },
  // Style untuk konten utama
  content: {
    flex: 10, // Membuat konten mengisi sebagian besar layar
    justifyContent: 'center', // Menengahkan konten secara vertikal
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  // Spacer ini membantu mendorong konten ke tengah
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
    elevation: 8, // Efek bayangan untuk Android
    marginBottom: 5, // Jarak ke teks di bawahnya
  },
  logo: {
    width: 150, // Lebar gambar
    height: 150, // Tinggi gambar
    resizeMode: 'contain', // Memastikan gambar tidak gepeng
  },
  questionText: {
    fontSize: 20, // Ukuran font
    color: '#274871', // Warna teks biru tua
    textAlign: 'center', // Teks di tengah
    marginBottom: 10, // Jarak ke tombol di bawahnya
    fontFamily: 'Poppins-SemiBold',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 50,
    marginHorizontal: 10,
    elevation: 5,
  },
  sudahButton: {
    backgroundColor: '#E1F1FD',
  },
  belumButton: {
    backgroundColor: '#274871',
  },
  sudahButtonText: {
    color: '#274871',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  belumButtonText: {
    color: '#E1F1FD',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});

export default SecondPage;