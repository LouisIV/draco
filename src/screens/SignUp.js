/**
 * (c) 2018 - Louis Lombardo IV
 * louislombardoiv@gmail.com
 *
 * login.js
 * Simple login form
 */

import React from "react";
import { View, Keyboard, Image } from "react-native";
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
  RkTheme
} from "react-native-ui-kitten";
import { scale, scaleModerate, scaleVertical } from "../utils/scale";

export default class SignUp extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    let renderIcon = () => {
      return (
        <Image style={styles.image} source={require("../../assets/Logo.png")} />
      );
    };
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={e => true}
        onResponderRelease={e => Keyboard.dismiss()}
      >
        <View style={{ alignItems: "center" }}>
          {renderIcon()}
          <RkText rkType="h1">Registration</RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput placeholder="Name" />
            <RkTextInput placeholder="Email" />
            <RkTextInput placeholder="Password" secureTextEntry={true} />
            <RkTextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
            />
            <RkButton
              style={styles.save}
              rkType="stretch outline"
              onPress={() => {
                this.props.navigation.navigate("Welcome");
              }}
            >
              Sign Up
            </RkButton>
          </View>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType="primary3">Already have an account?</RkText>
              <RkButton
                rkType="clear"
                onPress={() => this.props.navigation.navigate("LoginScreen")}
              >
                <RkText rkType="header6"> Sign in now </RkText>
              </RkButton>
            </View>
          </View>
        </View>
      </RkAvoidKeyboard>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 16,
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: theme.colors.screen.base
  },
  image: {
    marginBottom: 10,
    height: scaleVertical(77),
    resizeMode: "contain"
  },
  content: {
    justifyContent: "space-between"
  },
  save: {
    marginVertical: 20
  },
  buttons: {
    flexDirection: "row",
    marginBottom: 24,
    marginHorizontal: 24,
    justifyContent: "space-around"
  },
  footer: {
    justifyContent: "flex-end"
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "center"
  }
}));
