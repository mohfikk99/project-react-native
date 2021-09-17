import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';

class SubMenu extends React.Component{
    render() {
      return(
        <TouchableOpacity onPress={this.props.onPress} style={{marginTop: 10}}>
          <View style={{borderRadius: 5, borderWidth: 1, marginHorizontal: 10}}>
            <Image source={this.props.img} style={{marginHorizontal: 15, width: 40, height: 40}}/>
          </View>
          <Text style={{textAlign: 'center', fontSize: 12, fontWeight: 'normal',marginTop: 5, marginBottom: 20}}>{this.props.title}</Text>
        </TouchableOpacity>
      );
    }
  }

export default SubMenu;
