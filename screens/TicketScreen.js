import React from 'react';
import { ScrollView, View, StyleSheet, Text, ImageBackground, Image, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { ExpoLinksView } from '@expo/samples';

export default class TicketScreen extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {timer:15, date:new Date()};
  }
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>{String(this.props.navigation.state.params.count)}</Text>
        <Text>{String(this.state.timer)}</Text>
        <Text>Day: {String(this.state.date.getDate())}</Text>
        <Text>Hour: {String(this.state.date.getHours())}</Text>
      </View>
    );
  }


  componentDidMount()
  {
    this.interval = setInterval(
      () => this.setState((prevState) => ({timer: prevState.timer -1 })),1000);
  }

  componentDidUpdate()
  {
    if(this.state.timer === 1)
    {
      clearInterval(this.interval);
    }
  }
  componentWillUnmount()
  {
    clearInterval(this.interval);
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
