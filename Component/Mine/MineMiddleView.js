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

} from 'react-native';

/*get middle data*/
var MiddleData = require('./MiddleData.json');

var MineMiddleView = React.createClass ({
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    },

    renderAllItem(){
        //define array
        var itemArr = [];
        // loop through
        for(var i = 0; i < MiddleData.length; i++){
            // get item
            var data = MiddleData[i];
            // create subview to array
            itemArr.push(
                <InnerView key={i} iconName={data.iconName} title={data.title} />
            );
        }
        // return item array
        return itemArr;
    },
});

var InnerView = React.createClass({

    getDefaultProps(){
       return{
           iconName: '',
           title:''
       }
    },

    render(){
        return(
          <View style={styles.innerViewStyle}>
              <Image source={{uri: this.props.iconName}} style={styles.imageStyle}/>
              <Text style={styles.titleStyle}>{this.props.title}</Text>
          </View>
        );
    }
});


const styles = StyleSheet.create({
    container: {
        // set main axist
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',

        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 30,

    },

    innerViewStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 10,

    },

    imageStyle:{
        width: 30,
        height: 20,

    },

    titleStyle:{
        color: 'gray',
        marginTop: 5,
    }

});

module.exports = MineMiddleView;
