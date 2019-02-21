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
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={count:0,};
  }


  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Text>Hello World!</Text>
        <Button title={String(this.state.count)} onPress={()=> navigate('Ticket',{count:this.state.count})}/>
        <Button title='more' onPress={this._incrementCount}/>
        <Button title='less' onPress={this._decrementCount}/>
      </ScrollView>
    );
  }



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