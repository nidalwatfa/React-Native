import { StyleSheet, I18nManager } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  
  // النصوص
  text: {
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    marginBottom: 16,
  },
  
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  
  // حقول الإدخال
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    marginBottom: 12,
  },
  
  // الصفوف
  row: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    alignItems: 'center',
  },
  
  // الأزرار
  button: {
    backgroundColor: '#6200EE',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  // البطاقات
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    // الظل
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

// دالة مساعدة للـ padding و margin
export const rtlStyle = (start, end) => ({
  paddingStart: start,
  paddingEnd: end,
  // أو استخدم هذا للتوافق الأقدم
  ...(I18nManager.isRTL
    ? { paddingRight: start, paddingLeft: end }
    : { paddingLeft: start, paddingRight: end }),
});
