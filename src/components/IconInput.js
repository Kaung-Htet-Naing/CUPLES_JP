import React from 'react';
import { StyleSheet, View, TextInput, Dimensions } from 'react-native';
import colors from '../constants/colors';
import Icon from './Icon';
const { height, width } = Dimensions.get('window');

export default function IconInput({
  onChangeText,
  placeholder,
  type,
  name,
  size,
  color,
  ...props
}) {
  return (
    <View style={[styles.searchSection, { borderColor: '#8c8c8c' }]}>
      <View style={styles.searchIcon}>
        <Icon type={type} name={name} size={size} color={color} />
      </View>
      <TextInput
        style={[
          styles.input,
          {
            color: colors.LIGHT_GRAY,
          },
        ]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        underlineColorAndroid='transparent'
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    height: 60,
    width: width - 30,
    margin: 10,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
  },
});
