import React from 'react'
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

export default function Search({ handleChange, formSearch }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} type="text" placeholder="Search" onChangeText={handleChange}
        value={formSearch} />
    </View>

  )
}

Search.propTypes = {
  handleChange: PropTypes.func,
  formSearch: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  input: {
    margin: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    borderRadius: 5,
    height: 50,
    width: 300
  }
});
