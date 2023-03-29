import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Modal, Button, TouchableOpacity } from 'react-native'
import CustomHeader from '../../components/CustomHeader'
import Colors from '../../styles/Colors'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import TextInputWithLabel from '../../components/TextinputWithLable'
import imagePath from '../../constants/imagePath'
import CustomPkgBtn from '../../components/CustomPkgBtn';
import CustomModal from '../../constants/CustomModal';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../constants/NavigationStrings';

const Checkout = () => {
    const navigation = useNavigation();
    const [ModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!ModalVisible);
    };
    const onClose = () => {
        setModalVisible(false);
    }
    const moveToScreen = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <View style={styles.container}>
                <CustomHeader
                    leftImg={imagePath.icBack}
                    headerTitle={'Checkout'}
                    headerImgStyle={styles.headerImgStyle}
                />
                <TextInputWithLabel
                    label={'Delivery Address'}
                    inputStyle={styles.inputStyle}
                    placeHolder="Enter Address"
                    inlineInputStyle={styles.inlineInputStyle}
                    placeholderTextColor='rgba(0, 0, 0, 0.5)'
                />
                <TextInputWithLabel
                    label={'Phone Number'}
                    // inputStyle={[styles.inputStyle, {height: verticalScale(45)}]}
                    inputStyle={{ ...styles.inputStyle, height: moderateScale(45) }}
                    placeHolder="Enter Number"
                    inlineInputStyle={styles.inlineInputStyle}
                    placeholderTextColor='rgba(0, 0, 0, 0.5)'
                    keyboardType="numeric"
                />
                <TouchableOpacity style={styles.paymentMethodView} activeOpacity={0.8} onPress={() => toggleModal()}>
                    <Text style={styles.paymentMethodText}>Payment Method</Text>
                    <Image
                        source={imagePath.icPaymentArrow}
                    />
                </TouchableOpacity>
                {/* 
                <Modal
                    visible={ModalVisible}
                    animationType="fade"
                    style={styles.modal}
                    transparent
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalTitle}>Payment Method</Text>
                            <CustomPkgBtn
                                textStyle={{ ...styles.textStyle, ...styles.customTextStyle }}
                                btnStyle={{ ...styles.btnStyle, ...styles.customStyle }}
                                btnText={'Done'}
                                onPress={toggleModal}
                            />
                        </View>
                    </View>
                </Modal> */}
                <CustomModal
                    visible={ModalVisible}
                    title="Payment Method"
                    buttonText="Done"
                    onButtonPress={toggleModal}
                    onRequestClose={onClose}
                >
                    <Text>Some additional content can be added here.</Text>
                </CustomModal>

                <View style={styles.orderSummaryView}>
                    <Text style={styles.orderSummaryLabel}> Order Summary</Text>
                    <View style={styles.orderSummaryContent}>
                        <View style={styles.singleContent}>
                            <Text style={styles.singleContentText}>1x Chicken Burger</Text>
                            <Text style={styles.singleContentText}>300</Text>
                        </View>
                        <View style={[styles.singleContent, { marginBottom: moderateVerticalScale(15) }]}>
                            <Text style={styles.singleContentText}>Delivery Fee</Text>
                            <Text style={styles.singleContentText}>50</Text>
                        </View>
                        <View style={styles.singleContent}>
                            <Text style={styles.singleContentText}>Total</Text>
                            <Text style={styles.singleContentText}>350</Text>
                        </View>
                    </View>
                </View>

                <CustomPkgBtn
                    btnText={'Place Order'}
                    textStyle={{ ...styles.textStyle }}
                    btnStyle={{ ...styles.btnStyle }}
                    onPress={() => moveToScreen(NavigationStrings.ORDER_INFORMATION)}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(26),
        backgroundColor: '#FEFEFE'
    },
    headerImgStyle: {
        tintColor: Colors.black
    },
    inputStyle: {
        borderBottomWidth: 0,
        width: '100%',
        height: moderateScale(60),
        backgroundColor: '#EFEDED',
        borderRadius: moderateScale(8),
        marginBottom: moderateVerticalScale(15),
    },
    inlineInputStyle: {
        paddingHorizontal: moderateScale(16),
        fontSize: scale(16),
        color: 'rgba(0, 0, 0, 0.5)'
    },
    paymentMethodView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: moderateScale(60),
        backgroundColor: '#EFEDED',
        borderRadius: moderateScale(8),
        paddingHorizontal: moderateScale(16),
        marginBottom: moderateVerticalScale(30),
    },
    paymentMethodText: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: scale(16),
    },
    orderSummaryView: {
        marginBottom: moderateVerticalScale(23),
    },
    orderSummaryContent: {
        width: moderateScale(300),
        height: moderateScale(120),
        backgroundColor: '#EFEDED',
        borderRadius: moderateScale(8),
        paddingHorizontal: moderateVerticalScale(16),
        justifyContent: 'center',
    },
    singleContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    singleContentText: {
        fontSize: scale(15),
        fontWeight: '600',
        color: Colors.black
    },
    orderSummaryLabel: {
        fontSize: scale(16),
        fontWeight: '600',
        marginBottom: moderateVerticalScale(16),
        color: Colors.black
    },
    btnStyle: {
        width: moderateScale(200),
        height: moderateScale(48),
        backgroundColor: '#50379E',
        marginTop: moderateVerticalScale(26),
    },
})

export default Checkout;
