import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';

import {Home, Pariwisata, Air, Pantai, Budaya, Details, Cerita, DetailCerita, Profil, Diri, Tambah, Edit, Hapus} from '../../pages';
const MaterialBottom = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const PariwisataStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Pariwisata" component={Pariwisata}
        options={{ headerShown:false }} />

      <Stack.Screen name="Details" component={Details}
            options={{ title:"Detail Wisata", headerShown:true }} />

      <Stack.Screen name="Air" component={Air}
          options={{ title:"Wisata Air Terjun", headerShown:true }} />

      <Stack.Screen name="Pantai" component={Pantai}
        options={{ title:"Wisata Pantai", headerShown:true }} />

    </Stack.Navigator>
  )
}

const BudayaStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Budaya" component={Budaya}
        options={{ headerShown:false }} />

      <Stack.Screen name="Details" component={Details}
            options={{ title:"Detail Wisata", headerShown:true }} />

    </Stack.Navigator>
  )
}

const CeritaStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Cerita" component={Cerita}
        options={{ headerShown:false }} />

      <Stack.Screen name="DetailCerita" component={DetailCerita}
            options={{ title:"Detail Cerita", headerShown:true }} />

    </Stack.Navigator>
  )
}

const ProfilStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Profil" component={Profil}
        options={{ headerShown:false }} />

      <Stack.Screen name="Diri" component={Diri}
        options={{ headerShown:false }} />

      <Stack.Screen name="DetailCerita" component={DetailCerita}
        options={{ title:"Detail Cerita", headerShown:true }} />

      <Stack.Screen name="Tambah" component={Tambah}
        options={{ title:"Tambahkan", headerShown:true }} />

      <Stack.Screen name="Edit" component={Edit}
        options={{ title:"Edit Cerita", headerShown:true}} />

      <Stack.Screen name="Hapus" component={Hapus}
        options={{ title:"Hapus", headerShown:true}} />

    </Stack.Navigator>
  )
}

export default class index extends Component {
  render() {
    return(
      <NavigationContainer>
        <MaterialBottom.Navigator
          shifting={false}
          initialRouteName= "Home"
          activeColor= "#990900"
          inactiveColor= "black"
          barStyle={{backgroundColor:'white', borderTopWidth: 1}}
          >

          <MaterialBottom.Screen name="Home" component={Home}
            options={{
              tabBarIcon: ({color}) => (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={require('../../assets/icon/home.png')} style={{width: 26, height: 26, }} />
                </View>
              )
            }}
            />

          <MaterialBottom.Screen name="Pariwisata" component={PariwisataStack}
             options={{
               tabBarIcon: ({color}) => (
                 <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                   <Image source={require('../../assets/icon/tour.png')} style={{width: 26, height: 26, }} />
                 </View>
               )
             }}
              />

            <MaterialBottom.Screen name="Budaya" component={BudayaStack}
            options={{
              tabBarIcon: ({color}) => (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={require('../../assets/icon/trip.png')} style={{width: 26, height: 26, }} />
                </View>
              )
            }}
             />

           <MaterialBottom.Screen name="Cerita" component={CeritaStack}
            options={{
              tabBarIcon: ({color}) => (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={require('../../assets/icon/clock.png')} style={{width: 26, height: 26, }} />
                </View>
              ),
              tabBarBadge:1
            }}
             />
           <MaterialBottom.Screen name="Profil" component={ProfilStack}
            options={{
              tabBarIcon: ({color}) => (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={require('../../assets/icon/users.png')} style={{width: 26, height: 26, }} />
                </View>
              )
            }}
             />
        </MaterialBottom.Navigator>
      </NavigationContainer>
    );
  }
}
