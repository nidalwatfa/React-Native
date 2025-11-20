
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// الشاشات اللي عندك حالياً
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AddScreen from './screens/AddScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'الرئيسية'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'التفاصيل'}}
        />
        <Stack.Screen
          name="Add"
          component={AddScreen}
          options={{title: 'إضافة جديد'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
