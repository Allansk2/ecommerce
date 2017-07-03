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
    ScrollView
} from 'react-native';


var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var HomeTopListView = require('./HomeTopListView');
var TopMenu = require('../../LocalData/TopMenu.json');

var HomeTopView = React.createClass ({

    getInitialState(){
        return{
            activePage: 0
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*content*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onAnimationEnd}
                    // onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}

                >
                    {this.renderScrollItem()}
                </ScrollView>

                {/*page control*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>

            </View>
        );
    },

    // items in scroll view
    renderScrollItem(){
        var itemArr = [];
        var dataArr = TopMenu.data;
        for (var i = 0; i< dataArr.length; i++){
            var data = dataArr[i];
            itemArr.push(
                <HomeTopListView key={i}
                    dataArr={data}
                />
            );
        }

        return itemArr;
    },

    // inducator
    renderIndicator(){
        var indicatorArr = [], style;
        var dataArr = TopMenu.data;
        for (var i = 0; i< dataArr.length; i++){
            style = (i == this.state.activePage) ? {color: 'orange'} : {color: 'gray'};
            indicatorArr.push(
                <Text key={i} style={[styles.indicatorTextStyle, style]}>&bull;</Text>
            );
        }

        return indicatorArr;

    },

    //when scroll end, update indicator
    onAnimationEnd(e){
        // get content offset x
        var offsetX = e.nativeEvent.contentOffset.x;
        // calculate page index
        var activePage = Math.floor(offsetX / width);
        // update indicator
        this.setState({
            activePage: activePage
        });

    },

});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',


    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    indicatorViewStyle:{
        flexDirection: 'row',
        justifyContent: 'center',

    },

    indicatorTextStyle:{
        fontSize: 25,

    },

});

module.exports = HomeTopView;

