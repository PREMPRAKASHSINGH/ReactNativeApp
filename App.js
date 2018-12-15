import React from 'react';
import { AsyncStorage } from 'react-native';
import Tabs from './src';

const key = 'cities';

export default class App extends React.Component {
  state = {
    cities: []
  };
  async componentDidMount() {
    try {
      const cities = await AsyncStorage.getItem(key);
      if (cities) this.setState({ cities: JSON.parse(cities) });
    } catch (e) {
      console.log('e ' + e);
    }
  }
  addCity = city => {
    const { cities } = this.state;
    cities.push(city);
    AsyncStorage.setItem(key, JSON.stringify(cities))
      .then(() => console.log('item stored'))
      .catch(err => {
        console.log('addcity error as ', err);
      });
    this.setState({ cities });
  };
  addLocation = (location, city) => {
    const { cities } = this.state;
    const index = cities.findIndex(item => {
      return item.id === city.id;
    });
    const choosenCity = cities[index];
    choosenCity.locations.push(location);
    const citiesArr = [
      ...cities.slice(0, index),
      choosenCity,
      ...cities.slice(index + 1)
    ];
    this.setState({ citiesArr }, () => {
      AsyncStorage.setItem(key, JSON.stringify(citiesArr))
        .then(() => console.log('item stored'))
        .catch(err => {
          console.log('addlocation error as ', err);
        });
    });
  };
  render() {
    const { cities } = this.state;
    return (
      <Tabs
        screenProps={{
          cities,
          addCity: this.addCity,
          addLocation: this.addLocation
        }}
      />
    );
  }
}
