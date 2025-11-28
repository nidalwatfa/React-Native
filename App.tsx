import React from 'react';
// استيراد مكونات الربط الأساسية
import AppNavigator from './src/navigation/AppNavigator';
import { UserProvider } from './src/context/UserContext'; 

// 

// الملف الرئيسي يغلف نظام التنقل (AppNavigator) بمزود حالة المستخدم (UserProvider)
const App = () => {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
};

export default App;
