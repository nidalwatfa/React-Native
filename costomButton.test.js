import React from 'react';
import { render } from '@testing-library/react-native';
import CustomButton from '../CustomButton'; // تأكد من المسار الصحيح لمكون الزر

// تعريف مجموعة الاختبار
describe('CustomButton', () => {

  // تعريف حالة الاختبار
  it('يجب أن يعرض الزر النص الذي تم تمريره إليه', () => {
    
    // 1. عرض المكون في بيئة الاختبار
    const { getByText } = render(<CustomButton title="انقر هنا" />);

    // 2. محاولة العثور على العنصر الذي يحمل النص "انقر هنا"
    const buttonTitle = getByText('انقر هنا');

    // 3. التحقق من وجود العنصر
    expect(buttonTitle).toBeVisible();
  });
});
