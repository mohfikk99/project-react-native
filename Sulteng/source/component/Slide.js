import React from 'react';
import { View, Image, Text } from 'react-native';

const Slide = (props) => {
  return(
    <View style={{marginRight: 15, marginBottom: 10}}>
      <View style={{width: 200, height: 150}}>
        <Image source={props.img} style={{marginRight: 15, borderRadius: 5, width: undefined, height: undefined, resizeMode: 'cover', flex: 1}}/>
      </View>
      <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold', marginTop: 10}}>{props.title}</Text>
    </View>
  )
}

export default Slide;
