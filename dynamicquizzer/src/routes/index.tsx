import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import MainPage from '../pages/MainPage';
import MainPage2 from '../pages/MainPage2';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="MainPage" component={MainPage} />
      <Auth.Screen name="MainPage2" component={MainPage2} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
