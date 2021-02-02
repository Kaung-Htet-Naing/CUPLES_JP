import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import { IconInput } from '../components';
import colors from '../constants/colors';
import axios from 'axios';
const { height, width } = Dimensions.get('window');

export default function LoginScreen() {
  const [value, setValue] = useState({});
  const [res, setRes] = useState({});
  const getDataUsingAsyncAwaitGetCall = async () => {
    const response = axios.get('https://b79587dd4e60.ngrok.io/');
    console.log('response', response);
  };

  useEffect(() => {}, []);

  const onSubmit = () => {
    axios
      .post(
        'https://b79587dd4e60.ngrok.io/user/create',
        {
          username: 'mmmaksmdf',
          email: 'kaunai@gmail.com',
          password: 'kaunai',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        setRes(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.response.message);
        if (error.response.data.response.message.includes('username')) {
          alert('Username already exists');
        }
      });
  };

  console.log(res);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/img/CuplesWhite.png')} />
      </View>
      <View style={styles.formContainer}>
        <Text style={{ color: 'white' }}>アカウント作成</Text>
        <IconInput
          placeholder='ユーザーネーム'
          type='Feather'
          name='user'
          size={30}
          color='#b5b5b6'
          onChangeText={(searchString) => {
            setValue({ ...value, username: searchString });
          }}
        />
        <IconInput
          placeholder='E-mail'
          type='Feather'
          name='mail'
          size={30}
          color='#b5b5b6'
          onChangeText={(searchString) => {
            setValue({ ...value, email: searchString });
          }}
        />
        <IconInput
          placeholder='パスワード'
          type='Feather'
          name='lock'
          size={30}
          secureTextEntry={true}
          color='#b5b5b6'
          onChangeText={(searchString) => {
            setValue({ ...value, password: searchString });
          }}
        />
      </View>
      <View style={styles.bottonContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={onSubmit}>
          <Text style={{ color: 'white' }}>登録</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.DARK_GOLD,
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
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 30,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  button: {
    borderRadius: 20,
  },
});
