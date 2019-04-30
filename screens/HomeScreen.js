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

      <View style={styles.container}>

        <Card style={[styles.surface]}>
          <Text style={{ color: 'white' }}>CCASH BALANCE</Text>
        </Card>

      </View>




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  surface: {
    margin: 16,
    padding: 12,
    height: 140,
    width: '80%',
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c2ae75',
  },
});
