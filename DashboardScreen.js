
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { useUser } from '../context/UserContext';

const DetailsScreen = ({ navigate }) => {
  const { user } = useUser();
  const [text, setText] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>شاشة التفاصيل</Text>

      <View style={styles.card}>
        <Text style={styles.label}>معلومات المستخدم:</Text>
        <Text style={styles.info}>الاسم: {user?.name || 'غير محدد'}</Text>
        <Text style={styles.info}>البريد: {user?.email || 'غير محدد'}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>اكتب شيئاً:</Text>
        <TextInput
          style={styles.input}
          placeholder="اكتب هنا..."
          value={text}
          onChangeText={setText}
        />
        <Text style={styles.inputDisplay}>كتبت: {text}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('العودة للرئيسية');
          navigate('home');
        }}
      >
        <Text style={styles.buttonText}>← عودة للرئيسية</Text>
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
    marginBottom: 20,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#34495e',
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    color: '#7f8c8d',
  },
  inputContainer: {
    width: '100%',
    maxWidth: 400,
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 10,
  },
  inputDisplay: {
    fontSize: 14,
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default DetailsScreen;
