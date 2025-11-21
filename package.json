import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomButton from '../CustomButton'; // تأكد من المسار

describe('CustomButton Interactions', () => {

  it('يجب أن يتم استدعاء وظيفة onPress عند الضغط على الزر', () => {
    
    // 1. إنشاء دالة وهمية (Mock Function) لمراقبة استدعائها
    const mockOnPress = jest.fn();

    // 2. عرض المكون وتمرير الدالة الوهمية
    const { getByText } = render(
      <CustomButton title="اضغط هنا" onPress={mockOnPress} />
    );
    
    // 3. العثور على الزر
    const button = getByText('اضغط هنا');

    // 4. محاكاة حدث الضغط على الزر (التفاعل)
    fireEvent.press(button);
    
    // 5. التحقق: يجب أن تكون الدالة الوهمية قد استُدعيت مرة واحدة بالضبط
    expect(mockOnPress).toHaveBeenCalledTimes(1); 
  });
});
