import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TestApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        ✅ مرحبا بك! نجح العرض.
      </Text>
      <Text style={styles.subText}>
        (إذا رأيت هذا النص، فالمشكلة في الكود القديم وليست في CodeSandbox.)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007bff',
  },
  subText: {
    fontSize: 14,
    color: '#6c757d',
  }
});

export default TestApp;
