import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// 1. Import tipe yang dibutuhkan untuk navigation
import { StackNavigationProp } from '@react-navigation/stack';

// 2. Definisikan daftar semua halaman di aplikasi
type RootStackParamList = {
  FirstPage: undefined;
  SecondPage: undefined;
  DaftarPage: undefined;
  MasukPage: undefined;
};

// 3. Buat tipe spesifik untuk navigation prop di halaman ini
type FirstPageNavigationProp = StackNavigationProp<RootStackParamList, 'FirstPage'>;

// 4. Terima { navigation } sebagai prop di sini
const FirstPage = ({ navigation }: { navigation: FirstPageNavigationProp }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../assets/icon.png')} // Pastikan nama file ini sesuai
          style={styles.logo}
        />
      </View>

      <Text style={styles.welcomeText}>
        Selamat Datang di GalonKu 👋
      </Text>

      {/* 5. Tambahkan onPress untuk memanggil fungsi navigasi */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('SecondPage')} // <-- INI SATU-SATUNYA LOGIKA YANG DITAMBAHKAN
      >
        <Text style={styles.buttonText}>Pesan</Text>
      </TouchableOpacity>

    </View>
  );
};

// Di sini kita definisikan semua style yang dipakai di atas
// STYLE INI TIDAK DIUBAH SAMA SEKALI SESUAI PERMINTAANMU
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
    fontFamily: 'Poppins-Regular',
  },
});

export default FirstPage;