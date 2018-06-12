import React from "react";
import { StyleSheet, Image, View, Dimensions, StatusBar } from "react-native";
import { RkText, RkTheme, RkStyleSheet } from "react-native-ui-kitten";
import { NavigationActions } from "react-navigation";
import { scale, scaleModerate, scaleVertical } from "../utils/scale";

let timeFrame = 500;

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    StatusBar.setHidden(true, "none");
    this.timer = setInterval(() => {
      if (this.state.progress == 1) {
        clearInterval(this.timer);
        setTimeout(() => {
          StatusBar.setHidden(false, "slide");
          let toHome = NavigationActions.navigate({ routeName: "Welcome" });
          this.props.navigation.dispatch(toHome);
        }, timeFrame);
      } else {
        let random = Math.random() * 0.5;
        let progress = this.state.progress + random;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({ progress });
      }
    }, timeFrame);
  }

  render() {
    let width = Dimensions.get("window").width;
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={[styles.image, { width }]}
            source={require("../../assets/splashBack.png")}
          />
          <View style={styles.text}>
            <RkText style={styles.hero}>
              You can update this in Splash.js
            </RkText>
          </View>
        </View>
      </View>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.base,
    justifyContent: "space-between",
    flex: 1
  },
  image: {
    resizeMode: "cover",
    height: scaleVertical(430)
  },
  text: {
    alignItems: "center"
  },
  hero: {
    fontSize: 17,
    color: theme.colors.text.hint
  },
  appName: {
    fontSize: 62
  },
  progress: {
    alignSelf: "center",
    marginBottom: 35,
    backgroundColor: "#e5e5e5"
  }
}));
