import React from "react";
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  ScrollView,
  Dimensions
} from "react-native";
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
  RkTheme
} from "react-native-ui-kitten";
import firebase from "react-native-firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import { scale, scaleModerate, scaleVertical } from "../utils/scale";

export default class Welcome extends React.Component {
  render() {
    const myIcon = <Icon name="rocket" size={30} color="#EC333A" />;

    return (
      <ScrollView style={styles.screen}>
        <View style={styles.container}>
          <Image
            source={require("../../assets/Logo.png")}
            style={[styles.logo]}
          />
          <RkText style={styles.welcome}>
            Welcome to the React Native{"\n"}Draco starter project! {myIcon}
          </RkText>
          <RkText style={styles.instructions}>
            To get started, edit App.js
          </RkText>
          {Platform.OS === "ios" ? (
            <RkText style={styles.instructions}>
              Press Cmd+R to reload,{"\n"}
              Cmd+D or shake for dev menu
            </RkText>
          ) : (
            <RkText style={styles.instructions}>
              Double tap R on your keyboard to reload,{"\n"}
              Cmd+M or shake for dev menu
            </RkText>
          )}
          <RkButton
            style={styles.button}
            rkType="stretch outline"
            onPress={() => this.props.navigation.navigate("LoginScreen")}
          >
            Login Screen
          </RkButton>
          <RkButton
            style={styles.button}
            rkType="stretch outline"
            onPress={() => this.props.navigation.navigate("SignUpScreen")}
          >
            Sign Up Screen
          </RkButton>
          <View style={styles.modules}>
            <RkText rkType="header">UI Kitten</RkText>
            <RkText rkType="header">React Navigation</RkText>
            <RkText rkType="header">React Native Firebase</RkText>
            <RkText rkType="header">Redux</RkText>
            <RkText rkType="header">React Native Vector Icons</RkText>
            <RkText rkType="header">React Native Permissions</RkText>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.screen.base
  },
  logo: {
    height: 80,
    marginBottom: 16,
    marginTop: 32,
    width: 80
  },
  included: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5
  },
  logoSmall: {
    height: scaleVertical(70),
    resizeMode: "contain"
  },
  button: {
    marginVertical: 5,
    marginHorizontal: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: theme.colors.text.hint,
    marginBottom: 5
  },
  modules: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: "center"
  }
}));
