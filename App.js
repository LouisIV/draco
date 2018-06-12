import React from "react";
import { Platform, View, StatusBar } from "react-native";
import { RkStyleSheet } from "react-native-ui-kitten";
import { Provider } from "react-redux";
import firebase from "react-native-firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import { configureStore } from "./src/store/configureStore";
import RootNavigator from "./src/navigation/RootNavigator";

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </View>
    );
  }
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.screen.base
  }
}));
