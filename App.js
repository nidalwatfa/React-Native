
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>أهلاً بك في أكاديمية React Native العربية 🚀</Text>
      <Text style={styles.subtitle}>جاهز نبدأ الرحلة؟ 💜</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#6a1b9a',
  },
  subtitle: {
    fontSize: 20,
    color: '#444',
  },
});
