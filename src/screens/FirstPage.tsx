// src/screens/FirstPage.tsx

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const FirstPage = () => {
  return (
    // 1. Wadah utama yang mengisi seluruh layar dan menengahkan isinya
    <View style={styles.container}>
      
      {/* 2. Menampilkan gambar logo */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../assets/icon.png')} // Pastikan nama file ini sesuai
          style={styles.logo}
        />
      </View>

      {/* 3. Menampilkan teks selamat datang */}
      <Text style={styles.welcomeText}>
        Selamat Datang di GalonKu 👋
      </Text>

      {/* 4. Membuat tombol "Pesan" yang bisa diklik */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Pesan</Text>
      </TouchableOpacity>

    </View>
  );
};

// Di sini kita definisikan semua style yang dipakai di atas
const styles = StyleSheet.create({
  container: {
    flex: 1, // Artinya: pakai seluruh ruang layar yang tersedia
    backgroundColor: '#CCE1F5', // Warna background biru muda
    justifyContent: 'center', // Isinya ditengahkan secara vertikal
    alignItems: 'center', // Isinya ditengahkan secara horizontal
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
    elevation: 8, // Efek bayangan untuk Android
    marginBottom: 5, // Jarak ke teks di bawahnya
  },
  logo: {
    width: 150, // Lebar gambar
    height: 150, // Tinggi gambar
    resizeMode: 'contain', // Memastikan gambar tidak gepeng
  },
  welcomeText: {
    fontSize: 20, // Ukuran font
    //fontWeight: '800', // Ketebalan font
    color: '#274871', // Warna teks biru tua
    textAlign: 'center', // Teks di tengah
    marginBottom: 10, // Jarak ke tombol di bawahnya
    fontFamily: 'Poppins-SemiBold',
  },
  button: {
    backgroundColor: '#E1F1FD', // Warna tombol putih
    paddingVertical: 10, // Padding atas-bawah
    paddingHorizontal: 40, // Padding kiri-kanan
    borderRadius: 50, // Membuat tombol sangat membulat (pil)
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#274871',
    fontSize: 16,
    fontFamily: 'Poppins-Light',
  },
});

export default FirstPage;