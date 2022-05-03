import React, {Component} from 'react';
import {View, ImageBackground, Image} from 'react-native';
import Loader from './animated-loader';

var gb = require('../Components/Images/larch.jpg');


export default class Splash extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate('Welcome !');
    }, 5000);
  }

  render() {
    return (
      <ImageBackground source={gb} style={{height: '100%', width: '100%'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        
          <Loader />
        </View>
      </ImageBackground>
    );
  }
}
