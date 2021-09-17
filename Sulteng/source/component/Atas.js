import React from 'react';
import { View, Image, TouchableOpacity, Text, TouchableHighlight, Modal, Alert } from 'react-native';

class Atas extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  render(){
    const { modalVisible } = this.state;
    return(
        <View style={{ padding: 5,marginHorizontal: 4, marginBottom: 10, width: 173, borderRadius: 7, height: 210, backgroundColor: '#990900'}}>
          <View style={{marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>{this.props.title}</Text>
            <TouchableHighlight onPress={() => {this.setModalVisible(true)}}>
              <Image source={require('../assets/icon/edit.png')} style={{height: 20, width: 15}}/>
            </TouchableHighlight>
          </View>
          <TouchableOpacity onPress={this.props.onPress} >
           <Image source={this.props.image} style={{width: undefined, height: 170, borderRadius: 5}}/>
          </TouchableOpacity>

        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {Alert.alert("Harap Keluar Dari Modal")}}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <View style={{backgroundColor: "white", borderRadius: 20, padding: 35, alignItems: "center", shadowColor: "#000", shadowOffset: {width: 0, height: 20}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5}}>
              <TouchableOpacity style={{marginBottom: 15, backgroundColor: "#990900", borderRadius: 10, padding: 10, elevation: 2 }} onPress={this.props.edit}>
                <Text style={{color: "white", fontWeight: "bold", textAlign: "center"}}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: "#990900", borderRadius: 10, padding: 10, elevation: 2, marginBottom: 15}} onPress={this.props.hapus}>
                <Text style={{color: "white", fontWeight: "bold", textAlign: "center"}}>Hapus</Text>
              </TouchableOpacity>

                <TouchableHighlight onPress={() => { this.setModalVisible(!modalVisible)}}>
                  <Text>Keluar</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
    );
  }
}

export default Atas;
