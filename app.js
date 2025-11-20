
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// استيراد الشاشات التي أنشأتها
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

// إنشاء مكدس التنقل
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
