import React from "react";
import { View, Keyboard, Dimensions, Image } from "react-native";
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
  RkTheme
} from "react-native-ui-kitten";
import { scale, scaleModerate, scaleVertical } from "../utils/scale";

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  _renderImage(image) {
    let contentHeight = scaleModerate(375, 1);
    let height = Dimensions.get("window").height - contentHeight;
    let width = Dimensions.get("window").width;

    return (
      <Image
        style={[styles.image, { height, width }]}
        source={require("../../assets/backgroundLogin.jpg")}
      />
    );
  }

  render() {
    let image = this._renderImage();
    return (
      <RkAvoidKeyboard
        onStartShouldSetResponder={e => true}
        onResponderRelease={e => Keyboard.dismiss()}
        style={styles.screen}
      >
        {image}
        <View style={styles.container}>
          <RkTextInput placeholder="Username" />
          <RkTextInput placeholder="Password" secureTextEntry={true} />
          <RkButton
            style={styles.save}
            rkType="stretch outline"
            onPress={() => {
              this.props.navigation.navigate("Welcome");
            }}
          >
            Log In
          </RkButton>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType="primary3">Don’t have an account?</RkText>
              <RkButton rkType="clear">
                <RkText
                  rkType="header6"
                  onPress={() => this.props.navigation.navigate("SignUpScreen")}
                >
                  {" "}
                  Sign up now{" "}
                </RkText>
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
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.screen.base
  },
  image: {
    resizeMode: "cover",
    marginBottom: scaleVertical(10)
  },
  container: {
    paddingHorizontal: 17,
    alignItems: "center",
    paddingBottom: scaleVertical(22),
    flex: -1
  },
  footer: {
    justifyContent: "flex-end",
    flex: 1
  },
  textRow: {
    justifyContent: "center",
    flexDirection: "row"
  }
}));
