import React,{useState} from 'react';
import { StyleSheet, Text, Image,View ,Dimensions} from 'react-native';
import {PressButton, IconInput} from '../components';
import colors from '../constants/colors';

const {height,width}=Dimensions.get('window')

export default function LoginScreen(){

  const [value, onChangeText] = useState('Useless Placeholder');

  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/img/CuplesWhite.png')}/>
      </View >
      <View style={styles.formContainer}>
        <Text style={{color:'white'}}>アカウント作成</Text>
        <IconInput
        placeholder="ユーザーネーム"
        type="Feather"
        name="user"
        size={20}
        color={colors.LIGHT_GRAY}
        />
        <IconInput
        placeholder="E-mail"
        type="Feather"
        name="mail"
        size={20}
        color={colors.LIGHT_GRAY}
        />
        <IconInput
        placeholder="パスワード"
        type="Feather"
        name="lock"
        size={20}
        color={colors.LIGHT_GRAY}
        />
      </View>
      <View style={styles.bottonContainer}>
        <View style={styles.buttonContainer}>
          <Text style={{color:'white'}}>登録</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  imageContainer:{
    height:height*(40/100),
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:150,
    resizeMode:'contain'
  },
  formContainer:{
    height:height*(40/100),
    justifyContent:'center',
    alignItems:'center'
  },
  bottonContainer:{
    height:height*(20/100),
    justifyContent:'center',
    alignItems:'center'
  },
  buttonContainer:{
    borderColor:"black",
    borderWidth:2,
    borderRadius:30,
    width:200,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black'
  },
  button:{
    borderRadius:20
  }
});
