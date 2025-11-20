import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton'; // بما أن الملفات كلها في نفس المستوى

const DetailsScreen = ({ navigation, route }) => {
  // استقبال البيانات الممررة عبر route.params
  const { userName, userId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>تفاصيل المستخدم 🆔 {userId}</Text>
      
      <View style={styles.detailCard}>
        <Text style={styles.label}>اسم المستخدم:</Text>
        <Text style={styles.value}>{userName}</Text>
      </View>

      <Text style={styles.infoText}>
        يمكنك الآن جلب تفاصيل إضافية لهذا المستخدم (ID: {userId}) من API آخر.
      </Text>
      
      {/* الزر للعودة إلى القائمة */}
      <CustomButton
        title="العودة إلى القائمة"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2980b9', 
    marginBottom: 30,
    marginTop: 10,
  },
  detailCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#34495e',
  },
  infoText: {
    textAlign: 'center',
    marginBottom: 40,
    color: '#95a5a6',
    fontSize: 15,
  }
});

export default DetailsScreen;
