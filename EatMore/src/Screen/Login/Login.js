import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { moderateScale, scale, moderateVerticalScale } from 'react-native-size-matters';
import CustomPkgBtn from '../../components/CustomPkgBtn';
import imagePath from '../../constants/imagePath';
import Colors from '../../styles/Colors';
import { useNavigation } from '@react-navigation/native';
import TextInputWithLabel from '../../components/TextinputWithLable';
import NavigationStrings from '../../constants/NavigationStrings';
import * as Animatable from 'react-native-animatable';

const Login = () => {
    const navigation = useNavigation();
    const [isVisible, setVisible] = useState(true)
    const [textWidth, setTextWidth] = useState(null);
    const moveToScreen = (screen) => {
        navigation.navigate(screen);
    }
    const onTextLayout = (event) => {
        const { width } = event.nativeEvent.layout;
        setTextWidth(width);
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'column', }}>
                <View style={styles.eatmoreLogo}>
                    <View style={styles.loginLogoView}>
                        <Animatable.Image
                            animation="bounceIn"
                            duraton="1500"
                            style={styles.loginLogoStyle}
                            source={imagePath.icLogo}
                        />
                    </View>
                </View>
                <View style={{
                    position: 'absolute',
                    bottom: 30,
                    left: 0,
                    right: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={styles.formView}>
                        <View style={{ marginTop: moderateVerticalScale(40) }}>
                            <CustomPkgBtn
                                textStyle={{ ...styles.textStyle }}
                                btnStyle={{ ...styles.btnStyle }}
                                btnText={'Login'}
                            />
                        </View>
                        <TextInputWithLabel
                            placeHolder='Enter Email'
                            inputStyle={{ marginBottom: moderateVerticalScale(10) }}
                            keyboardType="email-address"
                        />
                        <TextInputWithLabel
                            placeHolder={'Password'}
                            secureTextEntry={isVisible}
                            rightIcon={isVisible ? imagePath.icHide : imagePath.icShow}
                            onPressRight={() => setVisible(!isVisible)}
                            inputStyle={{ marginBottom: moderateVerticalScale(14) }}

                        />

                        <TouchableOpacity style={styles.forgotPassView}>
                            <Text style={styles.forgotPassStyle}>Forgot Password </Text>
                        </TouchableOpacity>

                        <CustomPkgBtn
                            textStyle={{ ...styles.textStyle, ...styles.customTextStyle }}
                            btnStyle={{ ...styles.btnStyle, ...styles.customStyle }}
                            btnText={'Login'}
                            onPress={() => { moveToScreen(NavigationStrings.SIGNUP) }}
                        />
                        <TouchableOpacity
                            style={styles.loginSignview}
                            onPress={() => {
                                moveToScreen(NavigationStrings.SIGNUP)
                            }}>
                            <Text style={styles.loginSignText} onLayout={onTextLayout}>
                                No Account! Sign up here
                            </Text>
                            {textWidth ? <View style={[styles.line, { width: textWidth }]} /> : null}
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    eatmoreLogo: {
        // flex: 1,
        height: moderateScale(350),
        backgroundColor: Colors.primaryColor,
        borderBottomLeftRadius: moderateScale(80),
        borderBottomRightRadius: moderateScale(80),
    },
    formView: {
        backgroundColor: Colors.white,
        width: moderateScale(300),
        height: moderateScale(440),
        borderRadius: moderateScale(39),
        borderWidth: 1,
        borderColor: 'rgba(71, 45, 156, 0.8)',
        paddingHorizontal: moderateScale(25)
    },
    loginLogoStyle: {
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    loginLogoView: {
        marginTop: moderateVerticalScale(100),
        alignItems: 'center',
    },
    btnStyle: {
        width: moderateScale(250),
        height: moderateScale(36),
        justifyContent: 'center',
        backgroundColor: Colors.primaryColor,
        marginBottom: moderateVerticalScale(60)
    },
    textStyle: {
        color: Colors.white
    },
    forgotPassStyle: {
        color: Colors.primaryColor,
    },
    forgotPassView: {
        textAlign: 'right',
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: moderateVerticalScale(40)
    },
    customStyle: {
        width: moderateScale(200),
        height: moderateScale(42),
        marginBottom: moderateVerticalScale(30)
    },
    customTextStyle: {
        fontSize: scale(20),
        fontWeight: '500'
    },
    loginSignview: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginSignText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primaryColor
    },
    line: {
        height: 1,
        backgroundColor: Colors.primaryColor,
        // width: '73%',
    },
})
export default Login;

