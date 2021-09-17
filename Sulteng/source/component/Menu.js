import React from 'react';
import { View, ScrollView } from 'react-native';
import SubMenu from './SubMenu';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  return(
    <View horizontal style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, marginVertical: 20, borderBottomColor: '#aaa'}}>
      <SubMenu onPress={() => navigation.navigate('Air')} img={require('../assets/icon/air.png')} title="Wisata Alam"/>
      <SubMenu img={require('../assets/icon/kuliner.png')} title=" Wisata Kuliner"/>
      <SubMenu img={require('../assets/icon/religi.png')} title=" Wisata Religi"/>
      <SubMenu img={require('../assets/icon/taman.png')} title="Wisata Sejarah"/>
    </View>
  )
}

export default Menu;
