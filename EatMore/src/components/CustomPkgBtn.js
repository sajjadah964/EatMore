import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import fontFamily from '../styles/fontFamily';

const CustomPkgBtn = ({
    onPress,
    textStyle,
    btnStyle,
    btnText,
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{...styles.btnStyle, ...btnStyle }}
                onPress={onPress}
                activeOpacity={1}
            >
                {/* <View style={{ ...styles.gapStyle }}></View> */}
                <Text style={{ ...styles.textStyle, ...textStyle }}>{btnText}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    btnStyle: {
        width: moderateScale(300),
        height: verticalScale(45),
        borderRadius: moderateScale(270 / 2),
        backgroundColor: '#fff',
        alignItems: 'center',
        marginBottom: verticalScale(15),
        justifyContent:'center',
    },
    textStyle: {
        fontSize: scale(17),
        fontWeight: '600',
        color: '#fff',
        // fontFamily: fontFamily.Bbold,
    },
});
export default CustomPkgBtn;
