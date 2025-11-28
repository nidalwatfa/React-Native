import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// تعريف الأنواع (يجب أن يتطابق مع AppNavigator)
type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
  Login: undefined; // إضافة شاشة تسجيل الدخول
  Register: undefined; // إضافة شاشة التسجيل
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>تسجيل الدخول</Text>
      <Text style={styles.subtitle}>هنا ستكون حقول إدخال اسم المستخدم وكلمة المرور.</Text>
      
      <View style={{ marginTop: 20 }}>
          <Button 
            title="ليس لديك حساب؟ سجل الآن" 
            onPress={() => navigation.navigate('Register')}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default LoginScreen;
