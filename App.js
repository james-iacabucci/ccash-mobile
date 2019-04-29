import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { Auth, Analytics } from 'aws-amplify';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme as PaperTheme } from 'react-native-paper';
import { Appbar, BottomNavigation } from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';
import LinksScreen from './screens/LinksScreen';
import SettingsScreen from './screens/SettingsScreen';

import awsconfig from './aws-exports';

Auth.configure(awsconfig);
Analytics.configure(awsconfig);

class App extends React.Component {
  state = {
    isLoadingComplete: false,
    index: 0,
    routes: [
      { key: 'wallet', title: 'Wallet', icon: 'queue-music' },
      { key: 'payments', title: 'Payments', icon: 'history' },
      { key: 'contacts', title: 'Contacts', icon: 'group' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    wallet: HomeScreen,
    payments: LinksScreen,
    contacts: SettingsScreen,
  });

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <PaperProvider theme={customPaperTheme}>

          <Appbar.Header >
            <Appbar.Content
              title="Compliant Cash"
              subtitle="Powered by CannCo"
            />
            <Appbar.Action icon="search" />
            <Appbar.Action icon="person" />
          </Appbar.Header>
          <BottomNavigation
            navigationState={this.state}
            onIndexChange={this._handleIndexChange}
            renderScene={this._renderScene}
          />
          {/*   <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
 */}
        </PaperProvider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const authTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: '#39cd28'
  }
}

const customPaperTheme = {
  ...PaperTheme,
  dark: 'true',
  colors: {
    ...PaperTheme.colors,
    primary: '#0ab134',
    accent: '#39cd28'
  }
}

export default withAuthenticator(App, false, [], null, authTheme);