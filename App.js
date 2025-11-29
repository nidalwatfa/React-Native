import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-paper';

// The main application component
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
          {/* Applied the new cardTitle style here */}
          <Text style={styles.cardTitle}>هذا محتوى البطاقة بخط عريض وحجم 20.</Text> 
        </Card.Content>
      </Card>
      
    </View>
  );
}

// Defining styles (cardTitle added and corrected)
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
    alignSelf: 'center', // Center the card horizontally
  },
  
  // The corrected cardTitle style:
  cardTitle: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#333', // Changed color to ensure visibility
    marginBottom: 10,
  }
});
