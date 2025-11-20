import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import CustomButton from './CustomButton'; // بما أن الملفات كلها في نفس المستوى

// رابط API لجلب 10 مستخدمين وهميين
const USERS_API = 'https://jsonplaceholder.typicode.com/users';

const HomeScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // دالة لجلب البيانات
  const fetchUsers = async () => {
    try {
      const response = await fetch(USERS_API);
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('حدث خطأ في جلب البيانات.');
      setLoading(false);
    }
  };

  // تشغيل الدالة عند تحميل المكون لأول مرة
  useEffect(() => {
    fetchUsers();
  }, []);

  // حالة التحميل
  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text style={styles.loadingText}>جاري تحميل البيانات...</Text>
      </View>
    );
  }

  // حالة الخطأ
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
        <CustomButton title="إعادة المحاولة" onPress={fetchUsers} />
      </View>
    );
  }

  // دالة لرسم كل عنصر في القائمة
  const renderItem = ({ item }) => (
    <View style={styles.userCard}>
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userEmail}>{item.email}</Text>
      {/* تمرير بيانات المستخدم إلى شاشة التفاصيل عند الضغط */}
      <CustomButton
        title="عرض التفاصيل"
        onPress={() => navigation.navigate('Details', { userName: item.name, userId: item.id })} 
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>قائمة المستخدمين المجلوبة 🌐</Text>
      
      {/* عرض القائمة القابلة للتمرير */}
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: 10,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#3498db',
  },
  errorText: {
    fontSize: 18,
    color: '#e74c3c',
    textAlign: 'center',
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
    borderLeftColor: '#2ecc71',
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
  }
});

export default HomeScreen;

