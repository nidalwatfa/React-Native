import React from 'react';
// استيراد حزم التنقل
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// استيراد الشاشات التي أنشأناها
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

// 1. تعريف أنواع الشاشات والمعاملات (مهم جداً للـ TypeScript)
type RootStackParamList = {
  Home: undefined; // الشاشة الرئيسية
  Details: { itemId: number }; // شاشة التفاصيل تستقبل itemId
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    // NavigationContainer هو الحاوية الرئيسية لنظام التنقل
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home" // الشاشة التي يبدأ بها التطبيق
        screenOptions={{
          headerStyle: { backgroundColor: '#0056b3' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        {/* تعريف الشاشة الرئيسية */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'شاشتي النظيفة' }}
        />
        
        {/* تعريف شاشة التفاصيل */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'التفاصيل' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
