
import { StyleSheet, View, Text } from 'react-native';
// تم استيراد Provider هنا
import { Card, Provider } from 'react-native-paper'; 

// المكون الرئيسي للتطبيق
export default function App() {
  return (
    // يجب تغليف التطبيق بـ Provider
    <Provider> 
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
            <Text style={styles.cardTitle}>هذا محتوى البطاقة بخط عريض وحجم 20.</Text> 
          </Card.Content>
        </Card>
        
      </View>
    </Provider>
  );
}

// تعريف التنسيقات
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
    alignSelf: 'center', 
  },
  cardTitle: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 10,
  }
});
