import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
const uuidV4 = require('uuid/v4');
import { colors } from '../theme';

export default class AddCity extends Component {
  state = {
    city: '',
    country: ''
  };
  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };
  submit = () => {
    const { city, country } = this.state;
    if (city === '' || country === '') return;
    const cityObj = {
      city,
      country,
      locations: [],
      id: uuidV4()
    };
    this.props.screenProps.addCity(cityObj);
    this.setState(
      {
        city: '',
        country: ''
      },
      () => {
        this.props.navigation.navigate('Cities');
      }
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Cities App</Text>
        <TextInput
          placeholder="City Name"
          value={this.state.city}
          onChangeText={val => {
            this.onChangeText('city', val);
          }}
          style={styles.input}
        />
        <TextInput
          placeholder="Country Name"
          value={this.state.country}
          onChangeText={val => {
            this.onChangeText('country', val);
          }}
          style={styles.input}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add City</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary
  },
  input: {
    backgroundColor: 'white',
    margin: 10,
    paddingHorizontal: 8,
    height: 50
  },
  button: {
    height: 50,
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white'
  },
  heading: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    margin: 10
  }
});
