
      import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CustomButton from './CustomButton';
import { UserContext } from './UserContext';

const HomeScreen = ({ navigation }) => {
  const { users } = useContext(UserContext); 

  const renderItem = ({ item }) => (
    <View style={styles.userCard}>
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userEmail}>{item.email}</Text>
      <CustomButton
        title="عرض التفاصيل"
        onPress={() => navigation.navigate('Details', { userName: item.name, userId: item.id })} 
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>قائمة المستخدمين (من Context) 🚀</Text>
      
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
      
      {/* ⬅️ زر عائم للانتقال إلى شاشة الإضافة */}
      <View style={styles.fabContainer}> 
        <CustomButton
            title="➕ إضافة مستخدم"
            onPress={() => navigation.navigate('Add')} 
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#2c3e50',
  },
  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  userCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#3498db',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#34495e',
  },
  userEmail: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default HomeScreen;

