import BlobCourier, { ERROR_CANCELED_EXCEPTION } from 'react-native-blob-courier';
import React, { useState } from 'react';
import { View, Button, Text, Alert } from 'react-native';

const LectureDownloader = () => {
    // حالة لتخزين نسبة التقدم
    const [downloadProgress, setDownloadProgress] = useState(0); 
    // حالة لتخزين مسار الملف بعد التنزيل
    const [localFilePath, setLocalFilePath] = useState(null); 
    // متحكم الإلغاء
    const abortController = new AbortController();

    // رابط المحاضرة الافتراضي (استبدله برابط حقيقي لملف PDF)
    const lectureUrl = 'https://example.com/path/to/my_lecture.pdf'; 

    const startDownload = async () => {
        setDownloadProgress(0); // إعادة تعيين شريط التقدم
        setLocalFilePath(null); // إعادة تعيين المسار

        const request = {
            filename: 'محاضرة_البرمجة.pdf', // اسم الملف عند حفظه على الجهاز
            method: 'GET',
            mimeType: 'application/pdf',
            url: lectureUrl,
            signal: abortController.signal, // للسماح بالإلغاء

            // **ميزة تتبع التقدم:** يتم استدعاء هذه الدالة دورياً
            onProgress: (event) => {
                const written = event.written;
                const total = event.total;
                // حساب النسبة المئوية
                const percentage = Math.round((written / total) * 100); 
                setDownloadProgress(percentage);
            },
            
            // **ميزة نظام أندرويد:** يمكنك تفعيل مدير التنزيل للتحميل في الخلفية
            android: { 
                useDownloadManager: false, // يمكن تفعيلها إذا أردت استخدام مدير التنزيل
                target: 'cache', // حفظ الملف مؤقتاً في ذاكرة التخزين المؤقت للتطبيق
            }
        };

        try {
            // تنفيذ عملية التنزيل
            const fetchedResult = await BlobCourier.fetchBlob(request);

            if (fetchedResult.data.absoluteFilePath) {
                setLocalFilePath(fetchedResult.data.absoluteFilePath);
                Alert.alert("نجاح", `تم تنزيل المحاضرة وحفظها في: ${fetchedResult.data.absoluteFilePath}`);
            }

        } catch (e) {
            // معالجة الأخطاء، بما في ذلك إلغاء المستخدم
            if (e.code === ERROR_CANCELED_EXCEPTION) {
                Alert.alert("إلغاء", "تم إلغاء عملية التنزيل بنجاح.");
            } else {
                console.error("خطأ في التنزيل:", e);
                Alert.alert("خطأ", "فشل في تنزيل المحاضرة.");
            }
        }
    };

    // دالة لإلغاء التنزيل
    const cancelDownload = () => {
        // يتم إرسال إشارة الإلغاء إلى الطلب الجاري
        abortController.abort(); 
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
                {localFilePath ? `تم التنزيل!` : `التقدم: ${downloadProgress}%`}
            </Text>
            
            {/* عرض شريط تقدم بسيط (يمكن استبداله بمكون شريط تقدم حقيقي) */}
            <View style={{ 
                height: 10, 
                backgroundColor: '#eee', 
                marginBottom: 20,
                width: `${downloadProgress}%`,
                backgroundColor: 'blue'
            }} />

            <Button title="بدء تنزيل المحاضرة" onPress={startDownload} disabled={downloadProgress > 0 && downloadProgress < 100} />
            <View style={{ marginVertical: 10 }} />
            <Button title="إلغاء التنزيل" onPress={cancelDownload} color="red" disabled={downloadProgress === 0 || downloadProgress === 100} />

            {localFilePath && (
                <Text style={{ marginTop: 20, color: 'green' }}>
                    ✅ المحاضرة جاهزة للمشاهدة دون اتصال.
                </Text>
            )}
        </View>
    );
};

export default LectureDownloader;
