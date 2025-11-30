import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useUser } from '../context/UserContext';

const HomeScreen = ({ navigate }) => {
  const { user, logout } = useUser();
  const [count, setCount] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>الشاشة الرئيسية</Text>
      
      <View style={styles.card}>
        <Text style={styles.welcomeText}>مرحباً، {user?.name || 'مستخدم'}!</Text>
        <Text style={styles.counterText}>العدد: {count}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('زيادة العدد');
          setCount(count + 1);
        }}
      >
        <Text style={styles.buttonText}>زيادة العدد +</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => {
          console.log('الذهاب للتفاصيل');
          navigate('details');
        }}
      >
        <Text style={styles.buttonText}>اذهب للتفاصيل</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.dangerButton]}
        onPress={() => {
          console.log('تسجيل الخروج');
          logout();
        }}
      >
        <Text style={styles.buttonText}>تسجيل الخروج</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2c3e50',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 10,
    color: '#34495e',
    textAlign: 'center',
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 8,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  secondaryButton: {
    backgroundColor: '#2ecc71',
  },
  dangerButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;
