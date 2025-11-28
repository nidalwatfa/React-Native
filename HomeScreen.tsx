import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useUser } from '../context/UserContext'; // استيراد Hook السياق

// تعريف أنواع التنقل (يجب أن يتطابق هذا التعريف مع ما هو في AppNavigator لاحقاً)
type RootStackParamList = {
  Home: undefined; // هذه الشاشة لا تتلقى أي معاملات
  Details: { itemId: number }; // تم تعريفها في DetailsScreen
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  // استخدام Hook السياق لجلب البيانات والدوال
  const { userName, isLoggedIn, logout, login } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>مرحباً، {userName}!</Text>
      
      {/* عرض حالة تسجيل الدخول */}
      <Text style={[styles.subtitle, { color: isLoggedIn ? 'green' : 'red' }]}>
        الحالة: {isLoggedIn ? 'مُسجّل الدخول' : 'زائر'}
      </Text>

      <View style={styles.buttonContainer}>
        {/* زر التنقل */}
        <Button
          title="الانتقال إلى التفاصيل (Item 86)"
          // هذا الزر يجب أن يعمل عندما يكتمل إعداد التنقل
          onPress={() => navigation.navigate('Details', { itemId: 86 })}
          color="#007bff"
        />

        {/* زر تسجيل الدخول/الخروج */}
        <View style={{ marginTop: 15 }}>
          {isLoggedIn ? (
            <Button
              title="تسجيل الخروج"
              onPress={logout} // دالة Logout من Context
              color="#dc3545"
            />
          ) : (
            <Button
              title="تسجيل الدخول (كـ محمد)"
              onPress={() => login('محمد')} // دالة Login من Context
              color="#28a745"
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  }
});

export default HomeScreen;

