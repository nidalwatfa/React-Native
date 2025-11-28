import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// 💡 استيراد أدوات التنقل
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ----------------------------------------------------
// 🚀 1. شاشة القائمة الرئيسية (HomeScreen)
// ----------------------------------------------------
function HomeScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.headerText}>مرحباً بك في الأكاديمية!</Text>
      <Text style={styles.subHeaderText}>اختر دورتك:</Text>

      {/* 💡 زر الانتقال إلى شاشة الدورات */}
      <TouchableOpacity
        style={styles.mainButton}
        // استخدام navigation.navigate للانتقال
        onPress={() => navigation.navigate('Courses')} 
      >
        <Text style={styles.buttonText}>عرض الدورات التعليمية</Text>
      </TouchableOpacity>
      
      {/* 💡 زر آخر (مثلاً، الملف الشخصي) */}
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => console.log('ملف شخصي')} 
      >
        <Text style={styles.buttonText}>الملف الشخصي</Text>
      </TouchableOpacity>
      
    </View>
  );
}

// ----------------------------------------------------
// 📚 2. شاشة الدورات (CoursesScreen)
// ----------------------------------------------------
function CoursesScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.headerText}>جميع دوراتنا</Text>
      {/* مثال لزر دورة واحدة */}
      <TouchableOpacity style={styles.courseCard}>
        <Text style={styles.courseTitle}>دورة أساسيات React Native</Text>
        <Text style={styles.courseDetail}>للمبتدئين - مدة الدورة 10 ساعات.</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.courseCard}>
        <Text style={styles.courseTitle}>البرمجة بلغة Python</Text>
        <Text style={styles.courseDetail}>المستوى المتقدم - ابدأ الآن!</Text>
      </TouchableOpacity>
    </View>
  );
}

// ----------------------------------------------------
// 🧭 3. تهيئة التنقل (Stack Navigator)
// ----------------------------------------------------
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // يجب أن يكون كل شيء داخل NavigationContainer
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'الصفحة الرئيسية' }}
        />
        <Stack.Screen 
          name="Courses" 
          component={CoursesScreen} 
          options={{ title: 'قائمة الدورات' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ----------------------------------------------------
// 🎨 الأنماط (Styles)
// ----------------------------------------------------
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f2f5',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a75ff',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 30,
  },
  mainButton: {
    backgroundColor: '#1a75ff',
    padding: 15,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
    marginBottom: 15,
  },
  secondaryButton: {
    backgroundColor: '#4d94ff',
    padding: 15,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  courseDetail: {
    fontSize: 14,
    color: '#666',
  }
});
