
import React, { createContext, useContext, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, ScrollView } from 'react-native';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

const LoginScreen = ({ navigate }) => {
  const { login } = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (name.trim() === '' || email.trim() === '') {
      Alert.alert('خطأ', 'الرجاء إدخال الاسم والبريد الإلكتروني');
      return;
    }
    console.log('Login clicked');
    login({ name, email });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>تسجيل الدخول</Text>
        <View style={styles.form}>
          <Text style={styles.label}>الاسم:</Text>
          <TextInput
            style={styles.input}
            placeholder="أدخل اسمك"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.label}>البريد الإلكتروني:</Text>
          <TextInput
            style={styles.input}
            placeholder="أدخل بريدك الإلكتروني"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleLogin}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>دخول</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const HomeScreen = ({ navigate }) => {
  const { user, logout } = useUser();
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>الشاشة الرئيسية</Text>
        <View style={styles.card}>
          <Text style={styles.welcomeText}>مرحباً، {user?.name || 'مستخدم'}!</Text>
          <Text style={styles.counterText}>العدد: {count}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('Count button pressed');
            setCount(count + 1);
          }}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>زيادة العدد +</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => {
            console.log('Navigate to details');
            navigate('details');
          }}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>اذهب للتفاصيل</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.dangerButton]}
          onPress={() => {
            console.log('Logout pressed');
            logout();
          }}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>تسجيل الخروج</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const DetailsScreen = ({ navigate }) => {
  const { user } = useUser();
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>شاشة التفاصيل</Text>
        <View style={styles.card}>
          <Text style={styles.label}>معلومات المستخدم:</Text>
          <Text style={styles.info}>الاسم: {user?.name || 'غير محدد'}</Text>
          <Text style={styles.info}>البريد: {user?.email || 'غير محدد'}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>اكتب شيئاً:</Text>
          <TextInput
            style={styles.input}
            placeholder="اكتب هنا..."
            value={text}
            onChangeText={setText}
          />
          <Text style={styles.inputDisplay}>كتبت: {text}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('Back to home');
            navigate('home');
          }}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>← عودة للرئيسية</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const AppNavigator = () => {
  const { isLoggedIn } = useUser();
  const [currentScreen, setCurrentScreen] = useState('home');

  const navigate = (screenName) => {
    console.log('Navigating to:', screenName);
    setCurrentScreen(screenName);
  };

  if (!isLoggedIn) {
    return <LoginScreen navigate={navigate} />;
  }

  if (currentScreen === 'details') {
    return <DetailsScreen navigate={navigate} />;
  }

  return <HomeScreen navigate={navigate} />;
};

export default function App() {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2c3e50',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 10,
    color: '#34495e',
    textAlign: 'center',
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 8,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  secondaryButton: {
    backgroundColor: '#2ecc71',
  },
  dangerButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  form: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#34495e',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    color: '#7f8c8d',
  },
  inputContainer: {
    width: '100%',
    maxWidth: 400,
    marginBottom: 20,
  },
  inputDisplay: {
    fontSize: 14,
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
});
