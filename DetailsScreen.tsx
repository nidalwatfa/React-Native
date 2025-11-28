import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// تعريف أنواع التنقل (يجب أن يتطابق هذا التعريف مع ما هو في AppNavigator لاحقاً)
// التزمت هنا بتسمية "RootStackParamList" كأفضل ممارسة
type RootStackParamList = {
  Home: undefined; // سنعرفها لاحقاً
  Details: { itemId: number }; // هذه الشاشة تستقبل معامل باسم itemId
};

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  // استخراج المعامل (Parameter) الذي مررناه
  // إذا لم يكن التنقل يعمل، قد تحتاج إلى إضافة الحزم يدوياً في Dependencies في Snack (كما ذكرنا سابقاً)
  const { itemId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>شاشة التفاصيل</Text>
      <Text style={styles.subtitle}>الرقم التعريفي المستلم:</Text>
      <Text style={styles.itemIdText}>{itemId}</Text>

      <View style={{ marginTop: 30 }}>
        <Button
          title="العودة إلى الرئيسية"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0056b3',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  itemIdText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#d9534f',
  }
});

export default DetailsScreen;

