import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// 💡 نستخدم I18nManager هنا أيضًا لضمان أن المكونات ترى الإعدادات
import { I18nManager } from 'react-native';

// ----------------------------------------------------
// 🛑 تأكيد تفعيل RTL (مهم جداً لإصلاح مشكلة اللمس بعد إعادة التشغيل)
// ----------------------------------------------------
if (!I18nManager.isRTL) {
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);
}

// بيانات وهمية للدورات (تم نقلها لتكون متاحة لجميع المكونات)
const COURSES_DATA = [
  { id: '1', title: 'أساسيات تطوير الويب (HTML/CSS)', instructor: 'أحمد جمال', duration: '20 ساعة', icon: '💻' },
  { id: '2', title: 'البرمجة بلغة بايثون للمبتدئين', instructor: 'سارة خالد', duration: '35 ساعة', icon: '🐍' },
  { id: '3', title: 'تطبيقات React Native المتقدمة', instructor: 'نضال واتفا', duration: '40 ساعة', icon: '⚛️' },
  { id: '4', title: 'مقدمة في الذكاء الاصطناعي', instructor: 'فاطمة علي', duration: '15 ساعة', icon: '🧠' },
  { id: '5', title: 'تحليل البيانات باستخدام R', instructor: 'محمد ياسين', duration: '25 ساعة', icon: '📊' },
];

// ----------------------------------------------------
// 🚀 1. شاشة القائمة الرئيسية (HomeScreen)
// ----------------------------------------------------
function HomeScreen({ navigation }) {
  // 💡 تأكدنا أن الأزرار تستخدم navigation.navigate وتطبع log بشكل سليم
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.headerText}>مرحباً بك في أكاديمية نضال!</Text>
      <Text style={styles.subHeaderText}>اختر دورتك وابدأ رحلتك التعليمية.</Text>

      {/* زر الانتقال إلى شاشة الدورات */}
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.navigate('Courses')} 
      >
        <Text style={styles.buttonText}>عرض {COURSES_DATA.length} دورة تعليمية</Text>
      </TouchableOpacity>
      
      {/* زر آخر (مثلاً، الملف الشخصي) */}
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => console.log('✅ تم الضغط على زر الملف الشخصي بنجاح')} 
      >
        <Text style={styles.buttonText}>الملف الشخصي</Text>
      </TouchableOpacity>
      
      <Text style={styles.footerNote}>إذا لم يعمل زر "الملف الشخصي"، فالمشكلة هي عدم إعادة تشغيل التطبيق بالكامل بعد تفعيل RTL.</Text>
    </View>
  );
}

// ----------------------------------------------------
// 📚 2. شاشة الدورات (CoursesScreen) - تم تحديثها لاستخدام البيانات
// ----------------------------------------------------
function CoursesScreen() {
  return (
    // نستخدم ScrollView لضمان أن القائمة قابلة للتمرير
    <ScrollView style={styles.scrollView}>
      <View style={styles.coursesListContainer}>
        <Text style={styles.headerText}>جميع دوراتنا المتاحة</Text>
        
        {/* رسم بطاقات الدورات باستخدام الدالة map */}
        {COURSES_DATA.map((course) => (
          <TouchableOpacity 
            key={course.id} 
            style={styles.courseCard}
            onPress={() => console.log(`✅ تم اختيار الدورة: ${course.title}`)}
          >
            <View style={styles.cardContent}>
              <Text style={styles.courseIcon}>{course.icon}</Text>
              <View style={styles.courseDetails}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseDetail}>
                  {course.instructor} • {course.duration}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        
      </View>
    </ScrollView>
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
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: { backgroundColor: '#1a75ff' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'الصفحة الرئيسية للأكاديمية' }}
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
// 🎨 الأنماط (Styles) - تم تحديثها لدعم RTL وبطاقات الدورات
// ----------------------------------------------------
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f2f5',
  },
  coursesListContainer: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24, // تم تصغيره قليلاً ليتناسب مع شاشة الدورات
    fontWeight: 'bold',
    color: '#1a75ff',
    marginBottom: 20,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  subHeaderText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 30,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  mainButton: {
    backgroundColor: '#1a75ff',
    padding: 15,
    borderRadius: 10,
    width: '100%', // تم تغييرها إلى 100% لتكون مرنة
    alignItems: 'center',
    marginBottom: 15,
    elevation: 5,
  },
  secondaryButton: {
    backgroundColor: '#4d94ff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    elevation: 3,
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
    width: '100%',
    marginBottom: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#1a75ff', // شريط أزرق جانبي للدورات
  },
  cardContent: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    alignItems: 'center',
  },
  courseIcon: {
    fontSize: 30,
    marginRight: I18nManager.isRTL ? 0 : 15,
    marginLeft: I18nManager.isRTL ? 15 : 0,
  },
  courseDetails: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  courseDetail: {
    fontSize: 14,
    color: '#666',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  footerNote: {
    marginTop: 50,
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  }
});
