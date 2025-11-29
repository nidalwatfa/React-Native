import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-paper';

// المكون الرئيسي للتطبيق
export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>
        مرحبا بك في تطبيق Expo!
      </Text>

      <Card style={styles.card}>
        <Card.Title 
          title="بطاقة بسيطة" 
          subtitle="تستخدم مكونات Paper" 
        />
        <Card.Content>
          {/* تم تطبيق التنسيق الجديد cardTitle هنا */}
          <Text style={styles.cardTitle}>هذا محتوى البطاقة بخط عريض وحجم 20.</Text> 
        </Card.Content>
      </Card>
      
    </View>
  );
}

// تعريف التنسيقات (تم إضافة وتصحيح cardTitle)
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    backgroundColor: '#ecf0f1', 
    padding: 8, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, 
    textAlign: 'center',
  },
  card: {
    width: '90%', 
    marginVertical: 10, 
    elevation: 4, 
    alignSelf: 'center', // توسيط البطاقة أفقياً
  },
  
  // التنسيق الذي تسبب في الخطأ وتم تصحيحه:
  cardTitle: {
    fontSize: 20, // <--- هذه هي القيمة التي كانت مفقودة!
    fontWeight: 'bold',
    color: '#333', // تغيير اللون ليكون مرئياً
    marginBottom: 10,
  }
});
