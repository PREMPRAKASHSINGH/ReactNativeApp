import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

const CenterMessage = props => (
  <View style={styles.container}>
    <Text>{props.msg}</Text>
  </View>
);
export default CenterMessage;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  }
});
