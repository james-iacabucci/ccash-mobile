import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: true,
  };

  render() {

    return (
    <>
      <ScrollView
        style={[styles.container]}
        contentContainerStyle={styles.content}
      >
        <Card style={[styles.surface]}>
          <Text style={{color: 'white'}}>THIS IS A TRANSACTION CARD</Text>
        </Card>

        <Card style={[styles.surface]}>
          <Text style={{color: 'white'}}>THIS IS A TRANSACTION CARD</Text>
        </Card>

        <Card style={[styles.surface]}>
          <Text style={{color: 'white'}}>THIS IS A TRANSACTION CARD</Text>
        </Card>

        <Card style={[styles.surface]}>
          <Text style={{color: 'white'}}>THIS IS A TRANSACTION CARD</Text>
        </Card>        
      </ScrollView>
    </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39cd28',
  },

  content: {
    marginTop: 0,
    alignItems: 'center',
  },

  surface: {
    marginTop: 6,
    padding: 12,
    height: 60,
    width: '100%',
    elevation: 3,
    backgroundColor: '#0ab134',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

