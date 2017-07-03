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
    Image,
    TouchableOpacity
} from 'react-native';


var HomeCommonView = require('./HomeCommonView');

var HomeTopMiddleLeft = require('../../LocalData/HomeTopMiddleLeft.json');

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');


var HomeMiddleView = React.createClass ({
    render() {
        return (
            <View style={styles.container}>
                {/*left view*/}
                {this.renderLeftView()}

                {/*right view*/}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    },

    // left view
    renderLeftView(){
        var dataLeft = HomeTopMiddleLeft.dataLeft[0];
        return(
            <TouchableOpacity onPress={()=>{alert('click ' + dataLeft.title)}}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri: dataLeft.img1}} style={styles.leftImageStyle}/>
                    <Image source={{uri: dataLeft.img2}} style={styles.leftImageStyle}/>
                    <Text style={styles.titleStyle}>{dataLeft.title}</Text>
                    <View style={styles.priceViewStyle}>
                        <Text style={styles.priceStyle}>{dataLeft.price}</Text>
                        <Text style={styles.saleStyle}>{dataLeft.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },

    // right view
    renderRightView(){
        // view array
        var itemArr = [];
        var dataRight = HomeTopMiddleLeft.dataRight;
        for (var i = 0; i < dataRight.length; i++) {
            var data = dataRight[i];
            itemArr.push(
                <HomeCommonView key={i}
                                title={data.title}
                                subTitle={data.subTitle}
                                rightImage={data.rightImage}
                                titleColor={data.titleColor}
                />
            );
        }
        return itemArr;
    },

});

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
    },

    leftViewStyle:{
        width: width/2,
        height: 119,
        backgroundColor: 'white',

        // horizontal center
        alignItems: 'center',
        justifyContent: 'center',

    },

    leftImageStyle:{
        width: 120,
        height: 30,

        // content mode
        resizeMode: 'contain',

    },

    titleStyle:{
        color: 'gray',

    },

    priceViewStyle:{
        flexDirection: 'row',
        marginTop: 5,
    },

    priceStyle:{
        color: 'gray',
        marginRight: 5,

    },

    saleStyle:{
        color: 'orange',
        backgroundColor: 'yellow',

    },



});

module.exports = HomeMiddleView;

