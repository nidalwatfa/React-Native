
شكراً على الصورة! وجدت المشكلة! 🎯
الخطأ واضح: /App.js: Unexpected token (59:14)
المشكلة في السطر 59 - هناك خطأ في الكود العربي المترجم!
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>تطبيق تجريبي</Text>
        
        <Text style={styles.counter}>العدد: {count}</Text>
        
        <Button 
          title="اضغط هنا +" 
          onPress={() => {
            setCount(count + 1);
            Alert.alert('نجح', 'العدد الجديد: ' + (count + 1));
          }}
        />
        
        <View style={styles.spacer} />
        
        <TextInput
          style={styles.input}
          placeholder="اكتب شيئا"
          value={text}
          onChangeText={setText}
        />
        
        <Text style={styles.display}>كتبت: {text}</Text>
        
        <View style={styles.spacer} />
        
        <Button 
          title="مسح" 
          color="red"
          onPress={() => {
            setCount(0);
            setText('');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  counter: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  display: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
    color: '#666',
  },
  spacer: {
    height: 20,
  },
});
