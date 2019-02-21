import React from 'react';
import { ScrollView, View, StyleSheet, Text, ImageBackground, Image, Dimensions } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class TicketScreen extends React.Component {

  constructor(props)
  {
    super(props);
  }
  
  render() {
    const {navigate} = this.props.navigation;
    return (

      <ImageBackground source={require('../assets/images/banana.png')} style={{width:Dimensions.get('window').width, heigth:Dimensions.get('window').heigth}}>
        <View style={styles.container}>
          <Text>{String(this.props.navigation.state.params.count)}</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});