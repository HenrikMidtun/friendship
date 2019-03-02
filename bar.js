import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    { bar: 
   { width: '100%',
     height: 20,
     borderRadius: 3,
     backgroundImage: 'repeating-linear-gradient(\r\n      -45deg,\r\n      #A3AA44,\r\n      #A3AA44 16px,\r\n      #000000 14px,\r\n      black 26px \r\n    )',
     backgroundSize: '37px 37px',
     animation: 'move .5s linear infinite',
     animationDirection: 'reverse' } }
);