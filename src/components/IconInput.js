import React from 'react';
import {StyleSheet, View,TextInput } from 'react-native';
import colors from '../constants/colors';
import Icon from './Icon';


export default function IconInput({placeholder,type,name,size,color}){
  return(
    <View style={[styles.searchSection,
      {borderColor:colors.LIGHT_GRAY}
    ]}>
      <View style={styles.searchIcon} >
        <Icon type={type} name={name} size={size} color={color}/>
      </View>
      <TextInput
        style={[styles.input,
          {
            color:colors.LIGHT_GRAY
          }
        ]}
        placeholder={placeholder}
        onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="transparent"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'white',
    borderWidth:2,
    borderRadius:10,
    height:60,
    width:300,
    margin:10
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
