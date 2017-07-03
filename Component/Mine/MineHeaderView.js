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
    TouchableOpacity,
    Platform
} from 'react-native';



var Dimensions = require('Dimensions')
var {width} = Dimensions.get('window');

var MineHeaderView = React.createClass ({
    render() {
        return (
            <View style={styles.container}>
                 {/*top view*/}
                {this.renderTopView()}

                {/*bottom view*/}
                {this.renderBottomView()}

            </View>
        );
    },

    renderTopView(){
        return(
            <View style={styles.topViewStyle}>
                <Image source={{uri: 'see'}} style={styles.leftIconStyle}/>
                <View style={styles.centerViewStyle}>
                    <Text style={styles.centerTitlStyle}>美团电商</Text>
                    <Image source={{uri: 'avatar_vip'}} style={{width: 17, height: 17}}/>
                </View>
                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width: 8, height:13}}/>
            </View>
        )
    },

    renderBottomView(){
        return(
            <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
            </View>
        )
    },

    renderBottomItem(){
        //array
        var itemArr = [];
        var data =[{'number':'100', 'title': '美团券'}, {'number':'12', 'title': '评价'}, {'number':'50', 'title': '收藏'}];
        for(var i = 0; i < data.length; i++){
            var item = data[i];
            // create subview to array
            itemArr.push(
                <TouchableOpacity key={i} onPress={()=>{alert('click item')}}>
                <View style={styles.itemStyle}>
                    <Text style={styles.itemTextStyle}>{item.number}</Text>
                    <Text style={styles.itemTextStyle}>{item.title}</Text>
                </View>
                </TouchableOpacity>
            );
        }
        // return item array
        return itemArr;
    }
});

const styles = StyleSheet.create({
    container: {
        height: Platform.OS == 'ios' ? 400 : 200,
        backgroundColor: 'rgba(255, 96, 0, 1.0)',
    },

    topViewStyle:{
        flexDirection: 'row',
        marginTop:  Platform.OS == 'ios' ? 280 : 80,
        alignItems: 'center',
        justifyContent: 'space-around',

    },

    leftIconStyle:{
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 3,
        borderColor: 'rgba(0, 0, 0, 0.2)',

    },

    centerViewStyle:{
        flexDirection: 'row',
        width: width * 0.72,
        alignItems: 'center',

    },

    centerTitlStyle:{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',

    },

    bottomViewStyle:{
        flexDirection: 'row',
        marginTop: 10,
        height:40,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },

    itemStyle:{
        width: width / 3 + 1,
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: 'white',
    },

    itemTextStyle:{
        color: 'white',
    }

});

module.exports = MineHeaderView;
