import {useWindowDimensions} from 'react-native';

DEVICE_WIDTH = useWindowDimensions().width;
DEVICE_HEIGHT = useWindowDimensions().height;

const GlobalMainstyles = StyleSheet.create({
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