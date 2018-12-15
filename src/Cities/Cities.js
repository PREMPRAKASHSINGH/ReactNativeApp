import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';

import CenterMessage from '../Components/CenterMessage';
import { colors } from '../theme';

class Cities extends Component {
  static navigationOptions = {
    title: 'Cities',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400'
    },
    headerLayoutPreset: 'center'
  };
  viewCity = city => {
    this.props.navigation.navigate('City', { city });
  };
  render() {
    const { cities: Cities } = this.props.screenProps;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View>
            {!Cities.length && <CenterMessage msg="No cities" />}
            {Cities.map((city, index) => (
              <View key={index}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.viewCity(city);
                  }}
                >
                  <View style={styles.cityContainer}>
                    <Text style={styles.city}>{city.city}</Text>
                    <Text style={styles.country}>{city.country}</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            ))}
            <Text>Hello Cities</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Cities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cityContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  city: {
    fontSize: 20
  },
  country: {
    color: 'rgba(0, 0, 0, 0.5)'
  }
});
