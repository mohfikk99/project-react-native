import React, { Component } from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';

export default class Hapus extends Component {
  constructor(props, route) {
    super(props);
    this.state = {
      id: props.route.params.data[0],
    };
  }
  Hapus = () => {
    fetch('http://192.168.43.111/wisata-sulteng/api/Cerita',{
      method: 'DELETE',
      headers: {
        'wisatasulteng-api-key': 'samalili051099',
        'Accept': 'application/json',
        'Content-type' : 'application/json',
      },
      body: JSON.stringify({
        id : this.state.id,
      })
    }).then((resposnse) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
    }).catch((err) => {
      console.error(error);
    });
  }

  render(){
    return(
      <View>
        <Text>ANDA YAKIN INGIN MENGHAPUS CERITA INI</Text>

        <TouchableOpacity onPress={this.Hapus}>
          <Text>hapus</Text>
        </TouchableOpacity>

      </View>




    );
  }
}
