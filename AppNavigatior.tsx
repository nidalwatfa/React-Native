import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// استيراد Hook السياق
import { useUser } from '../context/UserContext'; 

// استيراد جميع الشاشات
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

// 1. تعريف أنواع الشاشات والمعاملات (لن يتغير)
type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
  Login: undefined; 
  Register: undefined; 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  // 2. استخدام السياق للحصول على حالة تسجيل الدخول
  const { isLoggedIn } = useUser();
  
  // 

  return (
    <NavigationContainer>
      <Stack.Navigator
        // نزيل initialRouteName هنا لأنه سيتم تحديده لاحقاً بناءً على الشرط
        screenOptions={{
          headerStyle: { backgroundColor: '#0056b3' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        {/* 3. تطبيق منطق التحكم في العرض */}
        {isLoggedIn ? (
          // === المجموعة الأولى: شاشات التطبيق الرئيسية (Main App Screens) ===
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'شاشتي النظيفة' }}
            />
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={{ title: 'التفاصيل' }}
            />
          </>
        ) : (
          // === المجموعة الثانية: شاشات التحقق والدخول (Auth Screens) ===
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: 'تسجيل الدخول', headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ title: 'تسجيل جديد', headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
