#ifndef CIPHER_H
#define CIPHER_H

#include <string>
#include <vector>

// Fungsi untuk Vigenere Cipher
std::string vigenere_encrypt(const std::string& plaintext, const std::string& key);
std::string vigenere_decrypt(const std::string& ciphertext, const std::string& key);

// Fungsi untuk Playfair Cipher
std::string playfair_encrypt(const std::string& plaintext, const std::string& key);
std::string playfair_decrypt(const std::string& ciphertext, const std::string& key);

// Fungsi untuk Hill Cipher
std::string hill_encrypt(const std::string& plaintext, const std::vector<std::vector<int>>& keyMatrix);
std::string hill_decrypt(const std::string& ciphertext, const std::vector<std::vector<int>>& keyMatrix);

#endif // CIPHER_H
