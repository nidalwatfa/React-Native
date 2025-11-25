
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>React Native تعلم</Text>
        <Text style={styles.subtitle}>بطريقة مدمنة!</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>أكاديمية عربية متخصصة</Text>
        <Text style={styles.cardText}>
          أول أكاديمية عربية متخصصة في تعليم React Native خطوة بخطوة
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ابدأ التعلم مجاناً</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline}>
        <Text style={styles.buttonOutlineText}>شاهد المقدمة</Text>
      </TouchableOpacity>

      <View style={styles.features}>
        <Text style={styles.featuresTitle}>لماذا تتعلم معنا؟</Text>
        <Text style={styles.featureItem}>✓ دروس مبسطة</Text>
        <Text style={styles.featureItem}>✓ مشاريع عملية</Text>
        <Text style={styles.featureItem}>✓ دعم مدى الحياة</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    padding: 40,
    alignItems: 'center',
    backgroundColor: '#16213e',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#00d9ff',
    marginTop: 10,
  },
  card: {
    margin: 20,
    padding: 20,
    backgroundColor: '#0f3460',
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#ddd',
    lineHeight: 24,
  },
  button: {
    margin: 20,
    marginTop: 10,
    padding: 15,
    backgroundColor: '#00d9ff',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  buttonOutline: {
    margin: 20,
    marginTop: 10,
    padding: 15,
    borderWidth: 2,
    borderColor: '#00d9ff',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonOutlineText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00d9ff',
  },
  features: {
    margin: 20,
    padding: 20,
    backgroundColor: '#0f3460',
    borderRadius: 10,
  },
  featuresTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  featureItem: {
    fontSize: 16,
    color: '#ddd',
    marginVertical: 5,
  },
});
