/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView,

} from 'react-native';


var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

/*import components*/
var HomeDetail = require('./HomeDetail');
var HomeTopView = require('./HomeTopView');
var HomeMiddleView = require('./HomeMiddleView');
var HomeMiddleBottomView = require('./HomeMiddleBottomView');
var HomeMiddleHotView = require('./HomeMiddleHotView');
var HomeShopCenter = require('./HomeShopCenter');
var ShopCenterDetail = require('./ShopCenterDetail');
var GuessYouLike = require('./GuessYouLike');

var Home = React.createClass ({
    render() {
        return (
            <View style={styles.container}>
                {/*navigationBar*/}
                {this.renderNavBar()}

                {/*Home content*/}
                <ScrollView>
                    {/*top view*/}
                    <HomeTopView/>

                    {/*middle view*/}
                    <HomeMiddleView/>

                    {/*middle bottom half view*/}
                    <HomeMiddleHotView/>
                    <HomeMiddleBottomView
                        popTopHome={(data)=>this.pushToDetail(data)}
                    />

                    {/*shopping center*/}
                    <HomeShopCenter
                        popToHomeView={(url)=>this.pushToShopCenterDetail(url)}
                    />

                    {/*guess you like view*/}
                    <GuessYouLike />

                </ScrollView>
            </View>
        );
    },


    // setup navigation bar
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>
                {/*left*/}
                <TouchableOpacity
                    onPress={()=>{alert('点击广州')}}
                >
                    <Text style={styles.topTextStyle}>广州</Text>
                </TouchableOpacity>


                {/*middle*/}
                <TextInput
                    placeholder='输入商家，品类，商圈'
                    style={styles.topInputStyle}
                />


                {/*right*/}
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity
                        onPress={()=>{alert('点击领')}}

                    >
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImageStyle}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>{alert('点击扫描')}}

                    >
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImageStyle}/>
                    </TouchableOpacity>

                </View>

            </View>
        )
    },

    // push to shop center detail view
    pushToShopCenterDetail(url){
        // alert(url);
        this.props.navigator.push(
            {
                component: ShopCenterDetail,
                passProps: {'url': this.processUrl(url)}
            }
        );
    },

    processUrl(url){
        return url.replace('imeituan://www.meituan.com/web/?url=', '');
    },

    // push to detail screen
    pushToDetail(data){
        this.props.navigator.push(
            {
                component: HomeDetail,
                title: '详情页',
                url: data

            }
        );
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    navBarStyle:{ //navigation bar style
        height: Platform.OS === 'ios' ? 64 : 48,
        backgroundColor: 'rgba(255, 96, 0, 1.0)',

        // main axis direction
        flexDirection: 'row',
        // center vertical - cross-axis
        alignItems: 'center',

        // set space
        justifyContent: 'space-around',

    },

    topTextStyle:{
        color:'white',

        // set margin top
        marginTop: Platform.OS === 'ios' ? 20 : 0,

    },


    topInputStyle:{ // input text in navigation bar
        width: width * 0.70,
        height: Platform.OS === 'ios' ? 35 : 38,
        backgroundColor: 'white',
        marginTop: Platform.OS === 'ios' ? 22: 0,

        // set round corner
        borderRadius: 17,

        // set left padding
        paddingLeft: 12,

        // set font size
        fontSize: 15,

    },

    rightNavViewStyle:{
        flexDirection: 'row',
        height: 64,

        // center vertical - cross-axis
        alignItems: 'center',

        marginTop: Platform.OS === 'ios' ? 12 : 0,

    },

    navRightImageStyle:{ // image in navigation bar
        width: 25,
        height: 25,

        marginRight: 10,

    },

});

module.exports = Home;
