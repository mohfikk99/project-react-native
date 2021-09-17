import React, { useState } from 'react';
import { View, Text, TextInput, AsyncStorage, TouchableOpacity, FlatList, StatusBar, Alert, Button} from 'react-native';
import Card from '../../component/Card';
import Spinner from 'react-native-loading-spinner-overlay';


// import { Styles } from '../../utils/init-props';

const Profil = props => {
  let [Email, setEmail] = useState('');
  let [Password, setPassword] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');

  const handleSubmitPress = () => {
    setErrortext('');
    if (!Email) {
      alert('Email anda kosong...');
      return;
    }
    if (!Password) {
      alert('Password anda kosong...');
      return;
    }
    setLoading(true);
    var dataToSend = { email: Email, password: Password };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://192.168.43.111/wisata-sulteng/api/Pengguna?wisatasulteng-api-key=samalili051099', {
  method: 'POST',
  body: formBody,
  headers: {
    //Header Defination
    'wisatasulteng-api-key': 'samalili051099',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
}).then(response => response.json())
  .then(responseJson => {
    //Hide Loader
    setLoading(false);
    console.log(responseJson);
    // If server response message same as Data Matched

    if (responseJson.status == 1) {
      AsyncStorage.setItem('id', responseJson.data[0]);
      console.log(responseJson.data[0]);
      props.navigation.navigate('Diri', { setItem : [responseJson.data.name, responseJson.data.image, responseJson.data.date_created, responseJson.data.email]});
    } else {
      setErrortext('Email atau Password anda salah...');
      console.log('Email atau Password anda salah');
    }
  })
  .catch(error => {
    //Hide Loader
    setLoading(false);
    console.error(error);
  });
};


    return (
      <View style={{flex: 1}}>
          <View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'center', marginHorizontal: 5}}>
            <View style={{ padding: 5, marginBottom: 5, width: 350, borderRadius: 7, marginVertical: 80, height: 230, backgroundColor: '#990900'}}>
              <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold',  color: 'white'}}>LOGIN</Text>
                {errortext != '' ? ( <Text style={{color: 'white', textAlign: 'center', fontSize: 14,}}> {errortext} </Text> ) : null}

              <TextInput
                placeholder={'Email...'}
                placeholderTextColor='white'
                onChangeText={Email => setEmail(Email)}
                returnKeyType="next"
                onSubmitEditing={() =>
                  this.password && this.password.focus()
                }
                blurOnSubmit={false}
                style={{height: 42, width: '80%', marginHorizontal: 30, borderBottomWidth: 1, borderBottomColor: 'white', color: 'white'}}/>

            <TextInput
                placeholder={'Password...'}
                placeholderTextColor='white'
                secureTextEntry={true}
                onChangeText={Password => setPassword(Password)}
                blurOnSubmit={false}
                secureTextEntry={true}
                style={{height: 42, width: '80%', marginHorizontal: 30, borderBottomWidth: 1, borderBottomColor: 'white', color: 'white'}}/>

            <View style={{marginTop: 10, width: '40%', marginHorizontal: 100, marginTop: 25}}>
                <TouchableOpacity style={{alignItems: 'center'}} activeOpacity={0.5} onPress={handleSubmitPress}>
                  <Text style={{ color: '#FFFFFF', paddingVertical: 10, fontSize: 16,}}>LOGIN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </View>

    );

}


export default Profil;
