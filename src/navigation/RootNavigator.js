import React from "react";
import { createStackNavigator } from "react-navigation";

import SplashScreen from "../screens/Splash";
import WelcomeScreen from "../screens/Welcome";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/SignUp";

const AppNavigator = createStackNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Splash: {
      screen: SplashScreen
    },
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        header: null
      }
    },
    LoginScreen: {
      screen: LoginScreen
    },
    SignUpScreen: {
      screen: SignUpScreen
    }
  },
  {
    initialRouteName: "Splash",
    headerMode: "none"
  }
);

export default class RootNavigation extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
