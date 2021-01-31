import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import {
  Feather ,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  Octicons
} from '@expo/vector-icons';

export default function Icon ({type,name,size,color}){
  console.log()
  return(
    <View style={styles.container}>
          {type === 'MaterialIcons' ? (
            <MaterialIcons name={name} size={size} color={color}/>
          ) : type === 'MaterialCommunityIcons' ? (
            <MaterialCommunityIcons name={name} size={size} color={color}/>
          ) : type === 'Ionicons' ? (
            <Ionicons name={name} size={size} color={color}/>
          ) : type === 'Octicons' ? (
            <Octicons name={name} size={size} color={color}/>
          ) : type === 'Feather' ? (
            <Feather name={name} size={size} color={color}/>
          ) : null}
    </View>
  )
}

const styles = StyleSheet.create({});
