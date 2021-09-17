import React, {route, params } from 'react';
import { View, ScrollView, Image, Text} from 'react-native';

export default DetailCerita = ({navigation, route, params}) => {

    return (
      <View style={{flex: 1}}>
        <ScrollView>
        <View style={{ padding: 5, marginHorizontal: 6, marginTop: 10, marginBottom: 10, width: undefined, borderRadius: 7, height: 250, backgroundColor: '#990900'}}>
          <Image source={{uri:'https://wisatasulteng.com/assets/img/Cerita/'+route.params.data[2]}} style={{width: undefined, height: 220, borderRadius: 7 }}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold',  color: 'white'}}>{route.params.data[0]}</Text>
            <Text style={{ color: 'white',textAlign: 'right', fontStyle: 'italic', fontSize: 10}}>Lokasi : {route.params.data[1]}</Text>
          </View>
        </View>
        <Text style={{textAlign: 'left', fontWeight: 'bold', fontSize: 18, marginLeft: 10, marginVertical: 5}}>Ulasan :</Text>
        <Text style={{textAlign: 'center', fontSize: 17,  marginHorizontal: 20}}>{route.params.data[3]}</Text>
        </ScrollView>
      </View>
    );

}
