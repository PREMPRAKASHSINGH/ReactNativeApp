import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { colors } from '../theme';
import CenterMessage from '../Components/CenterMessage';

class City extends Component {
  static navigationOptions = props => ({
    title: props.navigation.state.params.city.city,
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: '400',
      textAlign: 'center',
      flex: 1
    },
    headerRight: <View />
  });
  state = {
    name: '',
    info: ''
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };
  addLocation = () => {
    const { name, info } = this.state;
    const { city } = this.props.navigation.state.params;
    if (name === '' || info === '') return;
    const location = {
      name,
      info
    };
    this.props.screenProps.addLocation(location, city);
    this.setState({
      city: '',
      country: ''
    });
  };
  render() {
    const { name, info } = this.state;
    const { city } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        {!city.locations.length && <CenterMessage msg="No locations" />}
        {city.locations.map((location, index) => (
          <View key={index} style={styles.locationContainer}>
            <Text style={styles.name}>{location.name}</Text>
            <Text style={styles.info}>{location.info}</Text>
          </View>
        ))}
        <TextInput
          value={name}
          placeholder="Location name"
          onChangeText={val => this.onChangeText('name', val)}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          value={info}
          placeholder="Location info"
          onChangeText={val => this.onChangeText('info', val)}
          style={[styles.input, styles.input2]}
          placeholderTextColor="white"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addLocation}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Location</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default City;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  input: {
    position: 'absolute',
    height: 50,
    backgroundColor: colors.primary,
    width: '100%',
    bottom: 104,
    left: 0,
    color: 'white'
  },
  input2: {
    bottom: 52
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  locationContainer: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2
  },
  name: {
    fontSize: 20
  },
  info: {
    color: 'rgba(0,0,0,0.5)'
  }
});
