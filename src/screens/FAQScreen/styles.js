import {
    StyleSheet,
    Dimensions
} from 'react-native';

import Configs from '../../configs';
import { scaleSzie } from '../../utils/func';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Configs.COLOR_MAIN_APP
    },
    viewOpacity: {
        backgroundColor: 'rgba(256,256,256,0.1)',
        height: scaleSzie(30)
    },
    headerItemCollap: {
        height: scaleSzie(70),
        paddingLeft: scaleSzie(20),
        paddingRight: scaleSzie(5),
        flexDirection: 'row',
    },
    textHeaderItemCollap:{
        color:'#fff',
        fontSize:scaleSzie(16),
        fontWeight:'bold'
    },
    contentItemCollap:{
        paddingVertical:scaleSzie(20),
        paddingHorizontal: scaleSzie(17),
        backgroundColor:'#fff'
    }
})