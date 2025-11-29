import { AppRegistry } from 'react-native';
// تأكد من أنك تستورد المكون App من مساره الصحيح (في هذا القالب، هو App.js)
import App from './App'; 

// اسم تطبيقك (يجب أن يتطابق مع الاسم في ملف app.json)
const appName = 'main'; 

// تسجيل المكون الرئيسي
AppRegistry.registerComponent(appName, () => App);
