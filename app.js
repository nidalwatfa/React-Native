import React, { useState } from 'react'; // أضفنا 'useState'
import { Text, View, StyleSheet, Button, Alert } from 'react-native'; // أضفنا 'Button' و 'Alert'

const App = () => {
  // 1. تعريف حالة متغيرة
  const [message, setMessage] = useState('اضغط على الزر لترى رسالة ترحيبية!');
  
  // 2. دالة تُنفذ عند الضغط على الزر
  const handlePress = () => {
    // تغيير الحالة
    setMessage('مرحباً يا بطل، أنت الآن تبرمج تطبيقات جوال!');
    // إظهار تنبيه
    Alert.alert("تهانينا!", "لقد نفذت أول إجراء تفاعلي!");
  };

  return (
    <View style={styles.container}>
      {/* 3. عرض النص المتغير */}
      <Text style={styles.paragraph}>
        {message}
      </Text>
      
      {/* 4. إضافة الزر التفاعلي */}
      <Button 
        title="اضغط هنا!" 
        onPress={handlePress} // ربط الزر بالدالة
        color="#3498db"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // توسيط العناصر أفقياً
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: 40, // مسافة أسفل النص
  },
});

export default App;
