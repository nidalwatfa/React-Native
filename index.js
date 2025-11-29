import { AppRegistry } from 'react-native';
// تم تغيير المسار من './src/App' إلى './App' ليتطابق مع موقع الملف في الجذر
import App from './App'; 

// اسم تطبيقك (يجب أن يتطابق مع الاسم في ملف app.json)
const appName = 'main'; 

// تسجيل المكون الرئيسي
AppRegistry.registerComponent(appName, () => App);
