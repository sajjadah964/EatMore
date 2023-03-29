import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, scale, moderateVerticalScale } from 'react-native-size-matters';
import imagePath from '../../constants/imagePath';
import TextInputWithLabel from '../../components/TextinputWithLable';
import Colors from '../../styles/Colors';
import CategoryList from './CategoryList';
import TopItemList from './TopItemList';
import NavigationStrings from '../../constants/NavigationStrings';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

let gapWidth = 15;
const numColumns = 2;
const Home = () => {
    const navigation = useNavigation()
    const [isFocused, setIsFocused] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0)

    const onItemPress = (id) => {
        setSelectedItem(id);
    }
    const getStyle = (index) => {
        if (index == selectedItem) {
            return { backgroundColor: '#7E58F4', };
        }
    }
    const renderItem = ({ item, index }) => {
        // console.log(item)
        console.log(index)
        return (
            <TouchableOpacity
                style={[styles.categoriesViewStyle,]}
            >
                <TouchableOpacity style={[styles.categoriesListStyle, getStyle(index)]}
                    onPress={() => onItemPress(index)}
                    activeOpacity={0.8}
                >
                    <View>
                        <Image
                            source={item.url}
                        />
                    </View>
                </TouchableOpacity>
                <Text style={{
                    fontSize: scale(16),
                    fontWeight: '400',
                    color: index == selectedItem ? '#7E58F4' : Colors.black,
                    textAlign: 'center'
                }}>{item.itemName}
                </Text>
            </TouchableOpacity>
        )
    }
    const goToDetails = (item, index) => {
        // console.log('item details',detail);
        navigation.navigate(NavigationStrings.ITEMS_DETAILS, {
            detail: item,
            index, index
        });
    }
    const topItemList = ({ item, index }) => {
        console.log(item, 'top item list')
        return (
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}
                onPress={() => goToDetails(item, index)}
                activeOpacity={0.7}
            >
                <View style={styles.singleItem}>
                    <View style={{ alignItems: 'center' }}>
                        <Animatable.Image
                            source={item.itemUrl}
                            duraton="1500"
                            animation="bounce"
                        />
                    </View>
                    <View style={{
                        paddingHorizontal: moderateScale(15)
                    }}>
                        <Text style={styles.itemNameStyle}>{item.itemName}</Text>
                        <View style={styles.itemPriceDetail}>
                            <Text style={styles.itemPriceStyle}>Rs.{item.itemPrice}</Text>
                            <Animatable.Image
                            source={item.plusIcon}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.homeHeaderView}>
                    <View>
                        <Text style={styles.headerTitleStyle}>Menu</Text>
                    </View>
                    <TouchableOpacity
                    onPress={()=>alert('logout')}
                    >
                        <Image
                            source={imagePath.icUserProfileLogo}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.searchView}>
                    <TextInputWithLabel
                        placeHolder='Search'
                        placeholderTextColor="gray"
                        placeholderStyle={{ fontSize: 20 }}
                        inputStyle={{ ...styles.inputSearchStyle }}
                        keyboardType="web-search"
                        searchIcon={isFocused ? null : imagePath.icSearchItem}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}

                    />
                </View>

                <View
                    style={[styles.categoriesViewStyle]}
                >
                    <Text style={styles.categoriesTextStyle}>Categories</Text>
                    <FlatList
                        horizontal
                        data={CategoryList}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={() => <View style={{ marginLeft: moderateScale(20) }} />}
                    />
                </View>

                <View
                    style={styles.topItemViewStyle}
                >
                    <Text style={styles.topItemListHeading}>Top Items</Text>
                    <FlatList
                        data={TopItemList}
                        renderItem={topItemList}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={numColumns}
                        scrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        // style={{ marginHorizontal: gapWidth }}
                        // contentContainerStyle={styles.gapStyle}
                        ItemSeparatorComponent={() => <View style={{ marginBottom: moderateScale(8) }} />}
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(26),
    },
    // gapStyle :{
    //     marginHorizontal: gapWidth,
    // },
    homeHeaderView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: moderateVerticalScale(20),
        alignItems: 'center',
        marginBottom: moderateVerticalScale(20),
    },
    headerTitleStyle: {
        fontSize: scale(36),
        fontWeight: '500',
        fontStyle: 'normal',
        color: Colors.black
    },
    searchView: {
        marginBottom: moderateVerticalScale(16),
    },
    inputSearchStyle: {
        width: '100%',
        height: moderateScale(43),
        borderRadius: moderateScale(30),
        backgroundColor: '#F2EFFF',
        borderBottomWidth: 0,
        // backgroundColor:'red'
    },
    categoriesViewStyle: {
        marginBottom: moderateVerticalScale(10)
    },
    categoriesTextStyle: {
        fontSize: scale(24),
        fontWeight: '500',
        fontStyle: 'normal',
        color: Colors.black,
        marginBottom: moderateVerticalScale(14),
    },
    categoriesListStyle: {
        backgroundColor: '#D9D9D9',
        width: moderateScale(76),
        height: moderateScale(75),
        borderRadius: moderateScale(10)
    },
    singleItem: {
        width: `${190 / numColumns}%`,
        height: moderateScale(180),
        borderRadius: moderateScale(15),
        backgroundColor: '#D9D9D9',
        paddingVertical:moderateVerticalScale(15),
        // backgroundColor:'red'
    },
    topItemViewStyle: {
        flex: 1
    },
    topItemListHeading: {
        fontSize: scale(24),
        fontWeight: '500',
        fontStyle: 'normal',
        color: Colors.black,
        marginBottom: moderateVerticalScale(14),
    },
    itemPriceDetail:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    itemNameStyle: {
        fontSize: scale(15),
        fontWeight: '400',
        color: Colors.black,
       marginBottom:moderateVerticalScale(10)
    },
    itemPriceStyle: {
        fontSize: scale(15),
        fontWeight: '400',
        color: Colors.black
    }

})
export default Home;
