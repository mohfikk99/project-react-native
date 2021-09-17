import React, {Component, route} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';
const options = {
  title: 'konsepKoding',
  takePhotoButtonTitle: 'Take photo with your camera',
  chooseFromLibraryButtonTitle: 'Choose photo from library',
};

export default class Tambah extends Component {
  constructor(props, route) {
    super(props);
    this.state = {
      email:props.route.params.data[1],
      name:props.route.params.data[0],
      lokasi:'',
      caption:'',
      avatarSource: null,
      pic: null,
    };
  }
  myfun = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image Picker Error: ', response.error);
      } else {
        let source = {uri: response.uri};

        this.setState({
          avatarSource: source,
          pic: response.data,
        });
      }
    });
  };
  uploadPic = () => {
    // IP Adreess dan letak file up
    RNFetchBlob.fetch(
      'POST',
      'http://192.168.43.111/wisata-sulteng/api/Cerita',
      {
        'wisatasulteng-api-key': 'samalili051099',
        Authorization: 'Bearer access-token',
        otherHeader: 'foo',
        'Content-Type': 'multipart/form-data',

      },
      [
        // name: image adalah nama properti dari api kita
        {name: 'email', data: this.state.email},
        {name: 'name', data: this.state.name },
        {name: 'lokasi', data: this.state.lokasi },
        {name: 'caption', data: this.state.caption },
        {name: 'gambar', filename: 'cerita.jpg', data: this.state.pic},
      ],
    ).then((resp) => {
      console.log('Response Saya');
      console.log(resp.data);
      alert('your image uploaded successfully');
      this.props.navigation.navigate('Diri');
      this.setState({avatarSource: null});
    });
  };

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>

              <TextInput
                  placeholder="lokasi"
                  onChangeText={data => this.setState({ lokasi: data })}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyle}
                />
                <TextInput
                    placeholder="caption"
                    onChangeText={data => this.setState({ caption: data })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyle}
                  />

        <Image
          source={this.state.avatarSource}
          style={{width: '50%', height: 150, margin: 10}}
        />

        <TouchableOpacity
          style={{backgroundColor: 'orange', margin: 10, padding: 10}}
          onPress={this.myfun}>
          <Text style={{color: '#fff'}}>Pilih Image</Text>
        </TouchableOpacity>


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
