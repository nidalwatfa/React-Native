import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function AddScreen({navigation}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('خطأ', 'العنوان مطلوب يا بطل 🇵🇸');
      return;
    }

    // هنا في المستقبل رح نضيف حفظ في قاعدة بيانات أو AsyncStorage
    Alert.alert(
      'تم بنجاح ✅',
      `تم إضافة الدرس: \( {title}\nالوصف: \){description || 'لا يوجد وصف'}`,
    );

    // نرجع للرئيسية بعد الحفظ
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>إضافة درس جديد</Text>

      <TextInput
        style={styles.input}
        placeholder="عنوان الدرس"
        placeholderTextColor="#95a5a6"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="الوصف (اختياري)"
        placeholderTextColor="#95a5a6"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={6}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>حفظ الدرس</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>إلغاء</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 18,
    textAlign: 'right',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#27ae60',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#ecf0f1',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  cancelButtonText: {
    color: '#7f8c8d',
    fontSize: 18,
  },
});
