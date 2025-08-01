import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("galonku.db");

export const createUserTable = () => {
  db.transaction((tx: any) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        noHp TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        nama TEXT,
        unit TEXT
      );`,
      [],
      () => console.log("✅ Tabel users berhasil dibuat"),
      (_: any, error: any) => {
        console.log("❌ Gagal buat tabel users", error);
        return true;
      }
    );
  });
};

export const registerUser = (
  noHp: string,
  password: string,
  nama: string,
  unit: string
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: any) => {
      tx.executeSql(
        `INSERT INTO users (noHp, password, nama, unit) VALUES (?, ?, ?, ?)`,
        [noHp, password, nama, unit],
        () => {
          console.log("✅ User berhasil didaftarkan");
          resolve(true);
        },
        (_: any, error: any) => {
          console.log("❌ Gagal daftar user:", error);
          resolve(false); // jangan reject biar bisa handle di UI
          return true;
        }
      );
    });
  });
};

export default db;
