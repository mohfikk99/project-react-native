import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:props.route.params.data[0],
      lokasi:props.route.params.data[1],
      caption:props.route.params.data[2],

    };
  }

  uploadPic = () => {
    fetch('http://192.168.43.111/wisata-sulteng/api/Cerita', {
                method: 'PUT',
                headers: {
                  'wisatasulteng-api-key': 'samalili051099',
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({

                  id : this.state.id,
                  lokasi : this.state.lokasi,
                  caption : this.state.caption,

                })
   }).then((json) => {
      alert('Cerita Telah Di Edit');
      this.props.navigation.navigate('Diri');
   }).catch((error) => console.error(error))
      .finally(() => {
      });
  };


  render() {
    return (
      <ScrollView>
      <View style={styles.container}>

              <TextInput
                  placeholder="lokasi"
                  value={this.state.lokasi}
                  onChangeText={data => this.setState({ lokasi: data })}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyle}
                />
                <TextInput
                    placeholder="caption"
                    value={this.state.caption}
                    onChangeText={data => this.setState({ caption: data })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyle}
                  />



        <TouchableOpacity onPress={this.uploadPic}>
          <Text style={styles.TextStyle}>Upload</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  TextInputStyle: {

   textAlign: 'center',
   height: 40,
   width: '80%',
   borderRadius: 10,
   borderWidth: 1,
   borderColor: '#028b53',
   marginTop: 20
 },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },


});
