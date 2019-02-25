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
    this.state = {timer: 5400, date:new Date(), dateCurrent:new Date()};
  }

  render() {
    const {navigate} = this.props.navigation;
    this.returnTime(this.state.timer);
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={styles.leftButton}><Text style= {styles.textButton}>ACTIVE</Text></View>

          <View style={styles.rightButton}><Text style={styles.textButton}>EXPIRED</Text></View>
        </View>

      <View style={styles.whitebox}>  
        <Text style={styles.text1}>
        Valid to {String(this.state.date.getDate())}/
        {String(this.state.date.getMonth()+1)}/
        {String(this.state.date.getFullYear()).slice(-2)}
        {" "}   
        {("0" + this.state.date.getHours()).slice(-2)}:
        {("0" + this.state.date.getMinutes()).slice(-2)}
        </Text>
        <Text style={styles.text1}>Zone A</Text>

        <Text style={styles.countdown}>{this.returnTime(this.state.timer)}</Text>

        <View style={styles.textContainer}>
          <View style={styles.textInnerContainer}>
            <Text style={styles.textLeft}>{String(this.props.navigation.state.params.count)} Adult </Text>
            <Text style={styles.textRight}>kr{String(this.props.navigation.state.params.price)}.00</Text>
          </View>
            <View style={styles.line}></View>
          <View style={styles.textInnerContainer}>
            <Text style={styles.textLeft}>Sum</Text>
            <Text style={styles.textRight}>kr{String(this.props.navigation.state.params.price*this.props.navigation.state.params.count)}.00</Text>
          </View>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
        </View>
        <View>
          <View>
            <Text style={styles.text2}>12% vat. kr4.07</Text>
            <Text style={styles.text2}>Vat.base kr33.93</Text>
            <Text style={styles.text2}>Paid by: phone bill</Text>
            <Text style={styles.text2}>Purchased:</Text>
            <Text style={styles.text2}>
            Valid to {String(this.state.dateCurrent.getDate())}/
            {String(this.state.dateCurrent.getMonth()+1)}/
            {String(this.state.dateCurrent.getFullYear()).slice(-2)}
            {", "}   
            {("0" + this.state.dateCurrent.getHours()).slice(-2)}:
            {("0" + this.state.dateCurrent.getMinutes()).slice(-2)}
            </Text>
            <Text>Insert Image here</Text>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }

  componentDidMount()
  {
    this.interval = setInterval(
      () => this.setState((prevState) => ({timer: prevState.timer -1})),1000);

    const validTo = this.state.dateCurrent.getTime() + 5400000;
    this.setState({date: new Date(validTo)});
  }

  returnTime(seconds)
  {
    let hours = Math.floor(seconds/3600);
    let remainingSeconds = seconds - hours*3600;
    let minutes = Math.floor(remainingSeconds/60);
    remainingSeconds = remainingSeconds - minutes*60;
    let sec = remainingSeconds;

    return (hours + ":" + minutes + ":" + ("0" + sec).slice(-2));
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
    justifyContent:"center",
    alignItems:"center",
  },
  button1: {
    flex: 1,
  },
  text1:
  {
    color:"black",
    fontSize: 24,
    textAlign: "center",
    fontFamily: 'RobotoCondensed',
  },
  text2:
  {
    color:"grey",
    fontSize:16,
    textAlign: "left",
    fontFamily: 'RobotoCondensedRegular',
  },
  countdown:
  {
    color:"#a2ad00",
    fontSize: 24,
    fontFamily: 'RobotoCondensed',
    textAlign: "right",
  },
  textButton:
  {
    color:"white",
    fontSize:16,
    textAlign:"center",
    fontFamily: 'RobotoCondensed',
    paddingTop: 8,
  },
  leftButton:
  {
    borderWidth:2,
    borderRadius:25,
    width:135,
    height:50,
    backgroundColor:"#007c92",
    borderColor: "#007c92",
    marginRight: 12,
  },

  rightButton:
  {
    borderWidth:2,
    borderRadius:25,
    width:135,
    height:50,
    borderColor: "white",
  },
  buttonContainer:
  {
    flex:1,
    flexDirection:"row",
    marginTop:16,
    justifyContent:"center",
    maxHeight:75,
  },
  textContainer:
  {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
   

  },
  textInnerContainer:
  {
    flex:1,
    width:240,
    flexDirection:"row",
    borderColor:"white",
    maxHeight:65,
    alignItems:"center",
    justifyContent:"center",
  },
  textLeft:
  {
    flex:2,
    color:"black",
    fontSize: 24,
    fontFamily: 'RobotoCondensed',
    textAlign:"left",

  },
  textRight:
  {
    color:"black",
    fontSize: 24,
    fontFamily: 'RobotoCondensed',
    textAlign:'right',
  },
  line:
  {
    borderColor:"black",
    width:240,
    borderWidth:0.8,
    maxHeight:1,
    marginBottom: 1,
  },
  whitebox:
  {
    flex:1,
    backgroundColor:"white",
    width:300,
    justifyContent:"center",
  },
  /*
  body,
header h1 {
  margin: 0;
  padding: 0;
}
*/
/*height of wave = h = 50px*/
  header: {
  background: "black",
  height: 20,
  color: "transparent",
  padding: 0,
  paddingBottom: 0, /*h*/
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
},

//header:before,
headerAfter: {
  content: "",
  position: "absolute",
  left: 0,
  right: 0,
  bottom: -5, /*h/2*/
  height: 50, /*h*/
  //background: radial-gradient(closest-side, #fff, #fff 50%, transparent 50%),
  /*or farthest-side*/
  backgroundSize: 16 16, /*h h*/
  backgroundPosition: 0 37, /*0 h/2*/
  //backgroundRepeat: repeat-x,
}

});
