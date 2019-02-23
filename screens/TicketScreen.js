import React from 'react';
import { ScrollView, View, StyleSheet, Text, ImageBackground,Button , Image, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

export default class TicketScreen extends React.Component {

  static navigationOptions={
      title: "My tickets",
      headerStyle: {
        backgroundColor: "#37424a"
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#fff",
        zIndex: 1,
        fontSize: 18,
        lineHeight: 23,
      },
      headerTintColor: "#fff",
      animationEnabled: true
    }
  
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
        <Text style={styles.text1}>
        Valid to {String(this.state.date.getDate())}/
        {String(this.state.date.getMonth()+1)}/
        {String(this.state.date.getFullYear()).slice(-2)}
        {" "}   
        {String(this.state.date.getHours())}:
        {String(this.state.date.getMinutes())}
        </Text>
        <Text style={styles.text1}>Zone A</Text>

        <Text style={styles.text2}>{String(this.state.timer)}</Text>
      </View>
    );
  }

  componentDidMount()
  {
    this.interval = setInterval(
      () => this.setState((prevState) => ({timer: prevState.timer -1 })),1000);


    const validTo = this.state.date.getTime() + 5400000;
    this.setState({date: new Date(validTo)});
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
    backgroundColor:"#272727",
    width: '100%',
  },
  button1: {
    flex: 1,
  },
  text1:
  {
    color:"white",
    fontSize: 24,
    textAlign: "center",
    fontFamily: 'RobotoCondensed',
  },
  text2:
  {
    color:"#a2ad00",
    fontSize: 24,
    fontFamily: 'RobotoCondensed',
    textAlign:"right",
  }
});
