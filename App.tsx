import React, { createContext, useState, useContext, ReactNode } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// استيراد حزم التنقل
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

// =======================================================
// 1. إعدادات التنقل (TYPES)
// =======================================================

// تعريف أنواع الشاشات والمعاملات
type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// =======================================================
// 2. سياق المستخدم (USER CONTEXT)
// =======================================================

// تعريف الـ Context
interface UserContextType {
  userName: string;
  isLoggedIn: boolean;
  login: (name: string) => void;
  logout: () => void;
}

const defaultContextValue: UserContextType = {
  userName: 'Guest',
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};

export const UserContext = createContext<UserContextType>(defaultContextValue);

// مكون المزود (Provider Component)
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState<string>('نيدال');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const login = (name: string) => {
    setUserName(name);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUserName('زائر');
    setIsLoggedIn(false);
  };

  const contextValue: UserContextType = {
    userName,
    isLoggedIn,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

// =======================================================
// 3. الشاشات (SCREENS)
// =======================================================

// A. شاشة الرئيسية (Home Screen)
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  const { userName, isLoggedIn, logout, login } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>مرحباً، {userName}!</Text>
      <Text style={[styles.subtitle, { color: isLoggedIn ? 'green' : 'red' }]}>
        الحالة: {isLoggedIn ? 'مُسجّل الدخول' : 'زائر'}
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="الانتقال إلى التفاصيل (Item 86)"
          // هذا هو الزر الذي يجب أن يعمل الآن
          onPress={() => navigation.navigate('Details', { itemId: 86 })}
          color="#007bff"
        />

        <View style={{ marginTop: 15 }}>
          {isLoggedIn ? (
            <Button
              title="تسجيل الخروج"
              onPress={logout}
              color="#dc3545"
            />
          ) : (
            <Button
              title="تسجيل الدخول (كـ محمد)"
              onPress={() => login('محمد')}
              color="#28a745"
            />
          )}
        </View>
      </View>
    </View>
  );
};

// B. شاشة التفاصيل (Details Screen)
type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC<DetailsProps> = ({ route, navigation }) => {
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

// =======================================================
// 4. مكون التنقل (APP NAVIGATOR)
// =======================================================

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#0056b3' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'شاشتي النظيفة' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'التفاصيل' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


// =======================================================
// 5. ملف البداية (APP.TSX)
// =======================================================

const App = () => {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  itemIdText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#d9534f',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  }
});

export default App;

