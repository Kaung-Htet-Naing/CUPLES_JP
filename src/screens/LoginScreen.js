import React, { useState } from 'react';
import { API_URL } from '@env';
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import { PressButton, IconInput } from '../components';
import colors from '../constants/colors';
import axios from 'axios';
const { height, width } = Dimensions.get('window');

export default function LoginScreen() {
  const [value, setValue] = useState({});
  console.log(API_URL);
  const onSubmit = async () => {
    axios
      .post(
        'https://ec22784c10a5.ngrok.io/user/login',
        { value },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log('reactNativeDemo', 'response get details:' + response.data);
      })
      .catch((error) => {
        console.log('axios error:', error);
      });
    console.log('value', value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/img/CuplesDefault.png')} />
      </View>
      <View style={styles.formContainer}>
        <Text style={{ color: '#9b9a9a' }}>ログイン</Text>
        <IconInput
          placeholder='ユーザーネーム'
          type='Feather'
          name='user'
          size={30}
          color={colors.LIGHT_GRAY}
          onChangeText={(searchString) => {
            setValue({ ...value, username: searchString });
          }}
        />
        <IconInput
          placeholder='パスワード'
          type='Feather'
          name='lock'
          size={30}
          color={colors.LIGHT_GRAY}
          onChangeText={(searchString) => {
            setValue({ ...value, password: searchString });
          }}
        />
      </View>
      <View style={styles.bottonContainer}>
        <Text style={{ color: '#9b9a9a' }}>アカウントをお持ちでない場合</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={onSubmit}>
          <Text style={{ color: '#d2a66d' }}>登録</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  imageContainer: {
    height: height * (40 / 100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    resizeMode: 'contain',
  },
  formContainer: {
    height: height * (40 / 100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottonContainer: {
    height: height * (20 / 100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    borderColor: '#c89451',
    borderWidth: 2,
    margin: 20,
    borderRadius: 30,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
  },
});
