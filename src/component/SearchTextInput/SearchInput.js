import React, {Component} from 'react';
import {StyleSheet, TextInput, Text} from 'react-native';

import {colors} from '../../utils/common/colors';
import constant from '../../utils/common/constant';

const SearchInput = (props) => (
  <>
    <TextInput
      placeholder="Artist Name"
      style={styles.textInput}
      onChangeText={props.onChangeValue}
    />
  </>
);

const styles = StyleSheet.create({
  textInput: {
    fontSize: 15,
    letterSpacing: 2,
    borderWidth: 1,
    margin: 10,
  },
});
export default SearchInput;
