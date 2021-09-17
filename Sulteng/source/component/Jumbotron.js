import React from 'react';
import { View, Text, Image } from 'react-native';

const Jumbotron = (props) => {
  return (
    <View style={{position: 'relative', flexDirection: 'row',marginHorizontal: 5, marginTop: 5}}>
      <Image style={{width: '100%', borderRadius: 5}} source={props.img}/>
      <Text style={{position: 'absolute', color: 'white', fontSize: 25, fontWeight: 'bold' ,marginLeft: 10, marginTop: 5}}>{props.judul}</Text>
      <Image style={{position: 'absolute', marginVertical: 60, marginHorizontal: 155, borderRadius: 5,}} source={props.logo}/>
      <Text style={{position: 'absolute', marginVertical: 120, marginHorizontal: 136, color: 'white', fontSize: 17}}>{props.jenisJudul}</Text>
      <Text style={{position: 'absolute', marginVertical: 135, marginHorizontal: 127, padding: 3, color: 'white', fontSize: 12}}>{props.title}</Text>
    </View>
  );
}

export default Jumbotron;
