import React from 'react';
import { View, Image, Text } from 'react-native';

const Card = (props) => {
  return(

    <View style={{ padding: 5, marginHorizontal: 11, marginTop: 10, marginBottom: 10, width: 173, borderRadius: 7, height: 200, backgroundColor: '#990900'}}>
      <Image source={props.image} style={{width: undefined, height: 150}}/>
      <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold',  color: 'white', marginTop: 10}}>{props.title}</Text>
    </View>
  );
}

export default Card;
