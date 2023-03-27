import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import CustomHeader from '../../components/CustomHeader';
import imagePath from '../../constants/imagePath';
import CustomPkgBtn from '../../components/CustomPkgBtn';
import Colors from '../../styles/Colors';
import ItemsPlans from './ItemsPlans';
import { Image } from 'react-native-animatable';

const Subscription = () => {

    const [selectedIndex, setSelectedIndex] = useState('1')
    const onButtonhandler = (type) => {
        if (type == '1') {
            console.log(type, 'first type');
            setSelectedIndex(type)
        }
        else if (type == '2') {
            console.log(type, 'second type');
            setSelectedIndex(type)
        }
        else if (type == '3') {
            console.log(type, 'third type');
            setSelectedIndex(type)
        }
    }
    const buttonStyle = (type) =>
        type === selectedIndex
            ? { ...styles.singleBtnStyle, backgroundColor: Colors.primaryColor, }
            : styles.singleBtnStyle;

    const textStyle = (type) =>
        type === selectedIndex
            ? { ...styles.textStyle, color: Colors.white, }
            : styles.singleTextStyle;

    const renderItem = ({ item, index }) => {
        return (
            <View style={[styles.mainView, (index + 1) % 2 === 0 ? { marginRight: 0 } : null]}
            >
                <Text style={styles.subDayTitle}>{item.subscriptionDay}</Text>
                <View style={styles.flexView}>
                    <View style={styles.singleView}>
                        <View style={styles.singleItemView}>
                            <Image
                                source={imagePath.icSubPizza}
                            />
                        </View>
                        <Text style={styles.singleItemName}>{item.firstItemName}</Text>
                    </View>
                    <View style={styles.singleView}>
                        <View style={styles.singleItemView}>
                            <Image
                                source={imagePath.icSubBurger}
                            />
                        </View>
                        <Text style={styles.singleItemName}>{item.secondItemName}</Text>
                    </View>
                </View>
            </View>
        )
    }
    const FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 10,
                }}
            />
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <CustomHeader
                    headerTitle={"Subscription"}
                />
                <CustomPkgBtn
                    btnText={'Weekly Plans'}
                    textStyle={{ ...styles.textStyle }}
                    btnStyle={{ ...styles.btnStyle }}
                />
                <View style={styles.btnView}>
                    <CustomPkgBtn
                        btnText={'1'}
                        // textStyle={{ ...styles.textStyle, ...styles.singleTextStyle }}
                        // btnStyle={{ ...styles.singleBtnStyle }}
                        onPress={() => { onButtonhandler('1') }}
                        btnStyle={buttonStyle('1')}
                        textStyle={textStyle('1')}
                    />
                    <CustomPkgBtn
                        btnText={'2'}
                        // textStyle={{ ...styles.textStyle, ...styles.singleTextStyle }}
                        // btnStyle={{ ...styles.singleBtnStyle }}
                        onPress={() => { onButtonhandler('2') }}
                        btnStyle={buttonStyle('2')}
                        textStyle={textStyle('2')}
                    />
                    <CustomPkgBtn
                        btnText={'3'}
                        // textStyle={{ ...styles.textStyle , ...styles.singleTextStyle }}
                        // btnStyle={{ ...styles.singleBtnStyle }}
                        onPress={() => { onButtonhandler('3') }}
                        btnStyle={buttonStyle('3')}
                        textStyle={textStyle('3')}
                    />
                </View>
                {selectedIndex === '1' ?
                    <View style={styles.itemListView}>
                        <FlatList
                            data={ItemsPlans}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={2}
                            scrollEnabled={true}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={FlatListItemSeparator}
                            contentContainerStyle={{ alignItems: 'center' }} // add this line
                        />
                    </View> : null
                }
                {selectedIndex === '2' ?
                    <View>
                        <Text>this is the second day </Text>
                    </View>
                    : null
                }
                {selectedIndex === '3' ?
                    <View>
                        <Text>this is the third day </Text>
                    </View>
                    : null
                }
                <CustomPkgBtn
                    btnText={'Subscribe 2000/Weekly'}
                    textStyle={{ ...styles.textStyle }}
                    btnStyle={{ ...styles.btnStyle, ...styles.subscribeBtnStyle }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Subscription;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(26)
    },
    btnStyle: {
        width: moderateScale(200),
        height: verticalScale(43),
        borderRadius: moderateScale(10),
        backgroundColor: Colors.primaryColor
    },
    singleTextStyle: {
        color: Colors.primaryColor
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    singleBtnStyle: {
        width: moderateScale(95),
        height: verticalScale(43),
        borderRadius: moderateScale(8),
        backgroundColor: Colors.white,
        borderColor: Colors.primaryColor,
        borderWidth: 1,
    },
    itemListView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: verticalScale(11),
    },
    mainView: {
        borderRadius: moderateScale(8),
        width: moderateScale(135),
        height: verticalScale(87),
        borderWidth: 1,
        borderColor: Colors.primaryColor,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        marginRight: 10,
    },
    flexView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    singleView: {

    },
    singleItemView: {
        width: moderateScale(45),
        height: verticalScale(40),
        backgroundColor: '#D9D9D9',
        borderRadius: moderateScale(11),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:verticalScale(4)
    },
    singleItemName: {
        textAlign: 'center',
        fontSize: scale(8),
        fontWeight: '400',
        color: Colors.black,
    },
    subDayTitle: {
        fontSize: scale(10),
        fontWeight: '400',
        color: Colors.primaryColor,
        marginBottom: verticalScale(7),
        textAlign: 'center'
    },
    subscribeBtnStyle: {
        width: moderateScale(220),
        height: verticalScale(45),
    }
})