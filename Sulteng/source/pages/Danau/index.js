import React, { Component } from 'react';
import { View, ScrollView} from 'react-native';
import Card from '../../component/Card';

export default class index extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={{flexWrap: 'wrap', marginTop: 13, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5}}>
            <Card img={require('../../assets/scroll/5.jpg')} title="Selengkapnya"/>
            <Card img={require('../../assets/scroll/4.jpg')} title="Selengkapnya"/>
            <Card img={require('../../assets/scroll/3.jpg')} title="Selengkapnya"/>
            <Card img={require('../../assets/scroll/2.jpg')} title="Selengkapnya"/>
            <Card img={require('../../assets/scroll/1.jpg')} title="Selengkapnya"/>
          </View>
        </ScrollView>
      </View>
    );
  }
}
