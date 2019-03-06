import React from 'react';
import {Animated, ScrollView, View, StyleSheet, Text, ImageBackground,Button , Image, Dimensions, Easing } from 'react-native';
import PropTypes from 'prop-types';
import gradients from '../assets/styles/gradients-source.js';
import Gradient from 'react-native-css-gradient'; 


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
    this.state = {timer: 5400, date:new Date(), dateCurrent:new Date(), polkaAnimation: new Animated.Value(0),};
  }


  render() {

    const {navigate} = this.props.navigation;
    const gradient = "repeating-linear-gradient(-45deg, #a2ad00, #a2ad00 28px, black 26px, black 42px)";
    this.returnTime(this.state.timer);
    return (

      <View style={styles.container}>
        <View style={[styles.buttonContainer, {zIndex:1},this.state.yOffset < 20 ? styles.transparentContainer : styles.overlayContainer]}>
          <View style={styles.leftButton}><Text style= {styles.textButton}>ACTIVE</Text></View>

          <View style={styles.rightButton}><Text style={styles.textButton}>EXPIRED</Text></View>
        </View>

        <ScrollView 
          contentContainerStyle={styles.practicalContainer} 
          overScrollMode="never" 
          onScroll={event => { 
            this.state.yOffset = event.nativeEvent.contentOffset.y;
          }}
          onScrollEndDrag={event => { 
            this.state.yOffset = event.nativeEvent.contentOffset.y;
          }}
          scrollEventThrottle={160}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>  


         <View style={styles.upperContainer}>
            <Image style={styles.upperImage} source={require('../assets/images/upperImage.png')}/>
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

            <View style={styles.countdownContainer}>

              <View style={styles.polkaBar}>
              <Animated.Image 
              style={[styles.polkaImage,{transform: [{translateX:this.state.polkaAnimation},]},]}
              source={require('../assets/images/ticketImage.png')}/>
              </View>


              <Text style={styles.countdown}>{this.returnTime(this.state.timer)}</Text>
            </View>

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
          </View>
          <View style={styles.lowerContainer}>

            <Image style={styles.lowerImage} source={require('../assets/images/lowerImage.png')}/>
          </View>

        </ScrollView>
      </View>


    );
  }
  componentDidMount()
  {
    this.interval = setInterval(
      () => this.setState((prevState) => ({timer: prevState.timer -1})),1000);

    const validTo = this.state.dateCurrent.getTime() + 5400000;
    this.setState({date: new Date(validTo)});
    this.animate();
  }

  animate()
  {
    this.state.polkaAnimation.setValue(0);
    Animated.timing(
      this.state.polkaAnimation,
      {
        toValue:-236,
        duration:3500,
        easing:Easing.linear,
        useNativeDriver: true,
      }
    ).start(()=>{this.animate()});
  }

  returnTime(seconds)
  {
    let hours = Math.floor(seconds/3600);
    let remainingSeconds = seconds - hours*3600;
    let minutes = Math.floor(remainingSeconds/60);
    remainingSeconds = remainingSeconds - minutes*60;
    let sec = remainingSeconds;

    return ("0" + hours + ":" + minutes + ":" + ("0" + sec).slice(-2));
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
    backgroundColor:"#272727",
    width: '100%',
    justifyContent:"flex-start",
    alignItems:"center",
  },
  practicalContainer:
  {
    paddingTop:80,
    width:"85%",
    alignItems: "center",
    height:"150%",
    justifyContent:"flex-start",
  },
  whitebox:
  {
    backgroundColor:"white",
    width:"100%",
    height:"40%",
    position:"relative",
    alignItems:"center",
    justifyContent:"space-between",
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
    paddingBottom: 18,
  },
  text2:
  {
    color:"grey",
    fontSize:8,
    textAlign: "left",
    fontFamily: 'RobotoCondensedRegular',
  },
  countdownContainer:
  {
    flexDirection:"row",
    width:"100%",
    marginRight:"5%",
    paddingBottom:"5%",
    alignItems:"center",
  },
  countdown:
  {
    flex:2,
    color:"#a2ad00",
    fontSize: 32,
    fontFamily:'RobotoCondensed',
    textAlign: "right",
  },
  polkaBar:
  {
    width:"45%",
    height:30,
    alignItems:"flex-start",
    justifyContent:"flex-end",
    overflow:"hidden",
  },
  polkaImage:
  {
    width:423,
    height:30,
    resizeMode:"repeat",
    
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
    backgroundColor:"#272727",
    opacity:1,
  },
  buttonContainer:
  {
    position:"absolute",
    flexDirection:"row",
    paddingTop:16,
    justifyContent:"center",
    alignItems:"flex-start",
    width:"100%",
    height:80,
  },
  transparentContainer:
  {
    backgroundColor:"transparent",
  },
  overlayContainer:
  {
    backgroundColor:"#00000070",
  },
  textContainer:
  {
    width: "95%",
    flex:1,
    alignItems:"center",
    justifyContent:"flex-start",
  },
  textInnerContainer:
  {
    width: "100%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },
  line:
  {
    borderColor:"black",
    width: 290,
    borderTopWidth: 1,
    paddingBottom: 1,
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
  lowerContainer:
  {
    width:"96%",
    height:"38%",
    position:"relative",
    alignSelf:"flex-start",

  },
  upperContainer:
  {
    width:"105%",
    height:"7%",
    position:"relative",
    alignSelf:"flex-start",
  },
  lowerImage:
  {
    width:"110%",
    position:"absolute",
    top:0,
    height:"112%",
  },
  upperImage:
  {
    position:"absolute",
    bottom:0,
    width:"100%",
    height:"100%",
  },

});
