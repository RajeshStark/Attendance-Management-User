import {Dimensions , StyleSheet} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const GlobalMainstyles = StyleSheet.create({
    DEVICE_WIDTH :{
        width:(DEVICE_WIDTH)
    },
    Viewstyle :{
        width:(DEVICE_WIDTH)-20,
        height:(DEVICE_WIDTH)
    },
    center:{
        justifyContent: 'center',
        alignItems: 'center',
    }
    
});

export default GlobalMainstyles;