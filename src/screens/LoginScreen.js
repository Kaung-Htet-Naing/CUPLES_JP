import React,{useState} from 'react';
import { StyleSheet, Text, Image,View } from 'react-native';
import {PressButton, IconInput} from '../components';
import colors from '../constants/colors';

export default function LoginScreen(){

  const [value, onChangeText] = useState('Useless Placeholder');

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/img/CuplesDefault.png')}/>
      <Text>ログイン</Text>
      <IconInput
        placeholder="ユーザーネーム"
        type="Feather"
        name="user"
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
      <Text>アカウントをお持ちでない場合</Text>
      <PressButton title="登録"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image:{
    width:150,
    resizeMode:'contain'
  },
});
