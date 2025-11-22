
import React, { useEffect } from 'react';
import { I18nManager, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNRestart from 'react-native-restart';

// الشاشات
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AddScreen from './screens/AddScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    // التأكد من تفعيل RTL
    if (!I18nManager.isRTL) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
      // إعادة تشغيل التطبيق لتطبيق التغييرات
      RNRestart.restart();
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          // تعديل اتجاه السهم للخلف
          headerBackImageSource: Platform.OS === 'ios' ? undefined : undefined,
          // ستايل الهيدر
          headerStyle: {
            backgroundColor: '#6200EE',
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
          options={{ title: 'الرئيسية' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'التفاصيل' }}
        />
        <Stack.Screen
          name="Add"
          component={AddScreen}
          options={{ title: 'إضافة جديد' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
