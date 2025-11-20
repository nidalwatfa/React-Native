import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>مرحباً بك في أكاديمية العربي 🇵🇸</Text>
      <Text style={styles.subtitle}>اختر أي خيار:</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Details')}>
        <Text style={styles.buttonText}>عرض التفاصيل</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Add')}>
        <Text style={styles.buttonText}>إضافة درس جديد</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    color: '#7f8c8d',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
