import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Panel from '../../component/Panel/';
import Jumbotron from '../../component/Jumbotron';
import Slide from '../../component/Slide/';


export default class index extends Component {
  render(){
    return(
      <View style={{flex: 1}}>
          <View style={{backgroundColor: 'white', height: 270}}>
            <Jumbotron img={require('../../assets/tampilan/oke.jpg')}
                       judul="SULTENG"
                       logo={require('../../assets/tampilan/logo.jpg')}
                       jenisJudul="Wisata Sulteng"
                       title="Adventure/Eksplore/Trip"/>

                     <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, position: 'absolute',borderRadius: 10, marginHorizontal: 70, backgroundColor: '#990900', width: 250, height: 60, marginTop: 200}}>
              <Panel title="Adventure" img={require('../../assets/tampilan/jelajahi.jpg')}/>
              <Panel title="Eksplore" img={require('../../assets/tampilan/petualangan.jpg')}/>
              <Panel title="Trip" img={require('../../assets/tampilan/trip.jpg')}/>
            </View>
          </View>

          <View style={{marginHorizontal: 10, height: 120, marginTop: 50, marginBottom: 35}}>
            <Text style={{textAlign: 'center', fontSize: 30, marginBottom: 10, fontWeight: 'bold', textShadowRadius: 10}}>BEAUTY HIDDEN ON THE EKUATOR</Text>
            <Text style={{textAlign: 'center'}}>Nikmati keindahan khatulistiwa yang tersaji secara indah, akurat, dan terpercaya yang akan menemani perjalanan dan petualangan ada, dimanapun kapanpun</Text>
          </View>

          <View style={{borderBottomWidth: 1, marginVertical: 40, marginHorizontal: 30, borderColor: '#aaa'}}></View>

          <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 15}}>
            <Slide img={require('../../assets/scroll/1.jpg')} title="Pantai Bambarano"/>
            <Slide img={require('../../assets/scroll/2.jpg')} title="Air Terjun Piala"/>
            <Slide img={require('../../assets/scroll/3.jpg')} title="Megalitikum Doda"/>
            <Slide img={require('../../assets/scroll/4.jpg')} title="Makanan Putu"/>
            <Slide img={require('../../assets/scroll/5.jpg')} title="Pegunungan Sojol"/>
          </ScrollView>

      </View>
      );
  }
}
