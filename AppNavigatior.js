
```javascript
import React from 'react';
import { useUser } from '../context/UserContext';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';

const AppNavigator = () => {
  const { isLoggedIn } = useUser();
  const [currentScreen, setCurrentScreen] = React.useState('home');

  const navigate = (screenName) => {
    setCurrentScreen(screenName);
  };

  if (!isLoggedIn) {
    return <LoginScreen navigate={navigate} />;
  }

  if (currentScreen === 'home') {
    return <HomeScreen navigate={navigate} />;
  }

  if (currentScreen === 'details') {
    return <DetailsScreen navigate={navigate} />;
  }

  return <HomeScreen navigate={navigate} />;
};

export default AppNavigator;
```
