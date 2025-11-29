
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-paper';

// المكون الرئيسي للتطبيق
export default function App() {
  return (
    // View هو حاوية لتطبيق التنسيقات على الشاشة بأكملها
    <View style={styles.container}>
      
      {/* مثال على استخدام مكون نصي */}
      <Text style={styles.title}>
        مرحبا بك في تطبيق Expo!
      </Text>

      {/* مثال على استخدام مكون Card من react-native-paper */}
      <Card style={styles.card}>
        <Card.Title 
          title="بطاقة بسيطة" 
          subtitle="تستخدم مكونات Paper" 
        />
        <Card.Content>
          <Text>هذا محتوى البطاقة.</Text>
        </Card.Content>
      </Card>
      
    </View>
  );
}

// تعريف التنسيقات باستخدام StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // يجعل الحاوية تملأ الشاشة بالكامل
    // التنسيقات التي ظهرت في لقطة الشاشة:
    justifyContent: 'center', // توسيط العناصر عمودياً
    backgroundColor: '#ecf0f1', // لون خلفية رمادي فاتح
    padding: 8, // هامش داخلي حول جميع الجوانب
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // مسافة أسفل العنوان
    textAlign: 'center',
  },
  card: {
    width: '90%', // عرض البطاقة 90% من الشاشة
    marginVertical: 10, // مسافة عمودية
    elevation: 4, // ظل خفيف للبطاقة (لأجهزة الأندرويد)
  }
});
