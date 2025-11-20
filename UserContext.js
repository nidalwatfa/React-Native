import React, { createContext, useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';

// 1. إنشاء الـ Context
export const UserContext = createContext();

// رابط API لجلب 10 مستخدمين وهميين
const USERS_API = 'https://jsonplaceholder.typicode.com/users';

// 2. إنشاء مزود الـ Context (Provider)
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // منطق جلب البيانات (كما كان في HomeScreen)
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

  useEffect(() => {
    fetchUsers();
  }, []);

  // حالة التحميل والخطأ (تظهر قبل تحميل التطبيق بالكامل)
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text style={styles.loadingText}>إعداد بيانات التطبيق...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }
  
  // 3. تمرير البيانات والقيم عبر الـ Context
  const contextValue = { users, loading, error };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#3498db',
  },
  errorText: {
    fontSize: 20,
    color: '#e74c3c',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
