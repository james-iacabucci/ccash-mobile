import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Surface, Card, Title, Paragraph, Content, Button } from 'react-native-paper';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: true,
  };

  render() {
    return (

      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          


        </ScrollView>




    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
