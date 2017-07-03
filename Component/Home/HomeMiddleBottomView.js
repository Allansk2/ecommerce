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
    View
} from 'react-native';


var Home_D4 = require('../../LocalData/Home_D4.json');

var HomeCommonView = require('./HomeCommonView');

var HomeMiddleBottomView = React.createClass ({

    getDefaultProps(){
        return{
            popTopHome: null
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*top view*/}
                <View style={styles.topViewStyle}>
                </View>

                {/*bottom view*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    },

    // bottom item
    renderBottomItem(){
        var itemArr = [];
        var dataArr = Home_D4.data;
        for (var i = 0; i < dataArr.length; i++) {
            var data = dataArr[i];
            itemArr.push(
                <HomeCommonView key={i}
                                title={data.maintitle}
                                subTitle={data.deputytitle}
                                rightImage={this.processImage(data.imageurl)}
                                titleColor={data.typeface_color}
                                tplurl={data.tplurl}
                                clickCellCallBack={(data)=>this.popToTopView(data)}
                />
            );
        }
        return itemArr;
    },

    // pass data back to Home view
    popToTopView(data){
        // continue to call back
        this.props.popTopHome(data);
    },

    // process image size
    processImage(imageurl){
        if (imageurl.search('w.h') == -1){ // can't find
            return imageurl;
        }else {
            return imageurl.replace('w.h', '120.90');
        }
    },
});

const styles = StyleSheet.create({
    container: {


    },

    topViewStyle:{

    },

    bottomViewStyle:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },


});

module.exports = HomeMiddleBottomView;
