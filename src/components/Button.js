import React from 'react';
import { StyleSheet,View,Text,TouchableHighlight} from 'react-native';

export default function PressButton({title}){
  return(
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    borderColor:'gold',
    borderWidth:2,
    borderRadius:30,
    width:200,
    height:50,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    borderRadius:20
  }
})