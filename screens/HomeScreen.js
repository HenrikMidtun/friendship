import React,{Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Button,
} from 'react-native';
import { WebBrowser, Font } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={count:1,};
    //this.goToScreen = this.goToScreen.bind(this);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Text>Hello World!</Text>
        <Button title={String(this.state.count)} onPress={this._goToScreen}/>
        <Button title='more' onPress={this._incrementCount}/>
        <Button title='less' onPress={this._decrementCount}/>
      </ScrollView>
    );
  }

  componentWillMount()
  {
    Font.loadAsync({RobotoCondensed: require('../assets/fonts/Roboto-BoldCondensed.ttf')});
    Font.loadAsync({RobotoCondensedRegular: require('../assets/fonts/roboto-condensed.regular.ttf')});
  }

  _goToScreen = () => {
    this.props.navigation.navigate('Ticket',{count:this.state.count, price:38})
  };

  _incrementCount = () => {this.setState({count: this.state.count + 1})};
 
  _decrementCount = () => {this.setState({count: this.state.count - 1})};


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  button:{
    alignItems:'center',
    justifyContent:'center',
  },
});
