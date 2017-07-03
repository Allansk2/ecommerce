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

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var HomeTopMiddle = require('../../LocalData/HomeTopMiddle.json');

var HomeMiddleHotView = React.createClass ({

    render() {
        return (
            <View style={styles.container}>
                {this.renderView()}
            </View>
        );
    },

    renderView(){
        var data = HomeTopMiddle.data[0];

        return(
            <TouchableOpacity onPress={()=>{alert('click ' + data.title)}}>
                <View style={styles.containerInnerView}>
                    {/*left view*/}
                    <View style={styles.leftViewStyle}>
                        <Text style={styles.titleStyle}>{data.title}</Text>
                        <Text style={styles.subTitleStyle}>{data.subTitle}</Text>
                    </View>

                    {/*right view*/}
                    <Image source={{uri: data.image}} style={styles.imageStyle}/>
                </View>
            </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({

    container: {
        marginTop: 10,
        marginBottom: 1,
    },

    containerInnerView: {
        width: width,
        height: 65,
        marginBottom: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'white',
    },

    leftViewStyle:{
        marginLeft: 30
    },

    imageStyle:{
        width: 120,
        height: 47,
        resizeMode: 'contain',
        marginRight:20,
    },

    titleStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(193, 154, 138, 1.0)',

    },

    subTitleStyle:{
        fontSize: 14,
        color: 'gray',
        marginTop: 5,

    },


});

module.exports = HomeMiddleHotView;
