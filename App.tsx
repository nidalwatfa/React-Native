
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function HomeScreen() {
  const handleStartLearning = () => {
    Alert.alert('مرحباً! 🎉', 'ابدأ رحلتك في تعلم React Native الآن!');
  };

  const handleWatchIntro = () => {
    Alert.alert('الفيديو التعريفي 📹', 'سيتم فتح الفيديو التعريفي قريباً!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.badge}>أكاديمية عربية متخصصة</Text>
          <Text style={styles.title}>أول أكاديمية عربية متخصصة في تعليم{'\n'}React Native</Text>
        </View>

        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={handleStartLearning}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryButtonText}>ابدأ التعلم مجاناً</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={handleWatchIntro}
          activeOpacity={0.8}
        >
          <Text style={styles.secondaryButtonText}>شاهد المقدمة</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          تعلم بطريقة ممتعة ومدمنة! 💜
        </Text>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1a1a2e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: '🚀 أكاديمية React Native' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1e',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  badge: {
    backgroundColor: '#1e3a8a',
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    fontSize: 14,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 36,
  },
  primaryButton: {
    backgroundColor: '#06b6d4',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 12,
    width: '100%',
    marginBottom: 16,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#06b6d4',
    width: '100%',
    marginBottom: 24,
  },
  secondaryButtonText: {
    color: '#06b6d4',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    color: '#9ca3af',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
