// ... (الاستيرادات السابقة) ...
import AddScreen from './AddScreen'; // أضف هذا السطر

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <UserProvider> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'قائمة المستخدمين' }} 
          />
          <Stack.Screen 
            name="Details" 
            component={DetailsScreen} 
            options={{ title: 'التفاصيل' }} 
          />
          {/* أضف شاشة الإضافة الجديدة هنا */}
          <Stack.Screen 
            name="Add" 
            component={AddScreen} 
            options={{ title: 'إضافة جديد' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;

