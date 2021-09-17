import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import Card from '../../component/Card';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      data : [],
      email : "",
      password : ""
    }
  }

  componentDidMount() {
    fetch('http://192.168.43.111/wisata-sulteng/api/Pengguna')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.movies });
      })
    }

  validate_field = () => {
    const {data, email, password} = this.state
    if (email === data) {
      alert('email anda kosong...')
      return false
    }else if (password === data) {
      alert('password anda kosong...')
      return false
    }
    return true
  }

  making_api_call = () => {
    if (this.validate_field()) {

      alert('berhasil login')
    }
  }
  render(){
    return (
      <View style={{flex: 1}}>
          <View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'center', marginHorizontal: 5}}>
            <View style={{ padding: 5, marginBottom: 5, width: 350, borderRadius: 7, marginVertical: 80, height: 230, backgroundColor: '#990900'}}>
              <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold',  color: 'white'}}>LOGIN</Text>

              <TextInput placeholder={'Email...'} placeholderTextColor='white'  onChangeText={(value)=> this.setState({email : value})} style={{height: 42, width: '80%', marginHorizontal: 30, borderBottomWidth: 1, borderBottomColor: 'white', color: 'white'}}/>
              <TextInput placeholder={'Password...'} placeholderTextColor='white' onChangeText={(value)=> this.setState({password : value})} style={{height: 42, width: '80%', marginHorizontal: 30, borderBottomWidth: 1, borderBottomColor: 'white', color: 'white'}}/>
              <View style={{marginTop: 10, width: '80%'}}>
                <TouchableOpacity onPress={()=>this.making_api_call('Diri')} style={{borderWidth: 1, height: 42, width: '80%', justifyContent: 'center', alignItems: 'center', borderRadius: 40, backgroundColor: 'black', marginHorizontal: 60, textAlign: 'center'}}>
                  <Text style={{color: 'white'}}>LOGIN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </View>

    );
  }


}
