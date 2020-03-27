import {Dimensions , StyleSheet, useWindowDimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
 center:{
   justifyContent:'center',
   alignItems:'center',
   paddingBottom:10,
    }, 
  ViewStyle:{
    width: (DEVICE_WIDTH),
    height:(DEVICE_WIDTH)/1.6,
    backgroundColor:'#2B65EC',
    borderBottomRightRadius:80,
    borderBottomLeftRadius:80,
    justifyContent:'flex-start',
    paddingTop:30,
    alignItems:'center'

  },
touchable:{
    width: (DEVICE_WIDTH)-20,
    padding:20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,   
    borderWidth:0.5,
    borderColor:'#000'
},
mainText:{
   fontSize:18, 
  
}

});
