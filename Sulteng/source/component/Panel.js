import React from 'react';
import { View, Image, Text } from 'react-native';

const Panel = (props) => {
  return(
    <View>
      <Image style={{borderRadius: 5}} source={props.img}/>
      <Text style={{textAlign: 'center', color: 'white', fontSize: 10,}}>{props.title}</Text>
    </View>
  )
}

export default Panel;
