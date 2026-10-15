import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <Text style={styles.title}>Вход</Text>

        <TextInput
          style={styles.input}
          placeholder="Номер телефона"
          placeholderTextColor="#AAA9B2"
        />

        <TextInput
          style={styles.input}
          placeholder="Пароль"
          placeholderTextColor="#AAA9B2"
          secureTextEntry
        />

        <Pressable>
          <Text style={styles.forgotPassword}>
            Забыли пароль?
          </Text>
        </Pressable>

        <Pressable style={styles.loginButton}>
          <Text style={styles.loginButtonText}>
            Войти
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 80,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1B1923',
    marginBottom: 35,
  },

  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#E2E1E6',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 15,
  },

  forgotPassword: {
    color: '#6C63FF',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 25,
  },

  loginButton: {
    height: 55,
    borderRadius: 12,
    backgroundColor: '#1B1923',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
});