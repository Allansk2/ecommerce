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

var HomeCommonView = React.createClass ({

    getDefaultProps(){
        return{
            title: '',
            subTitle: '',
            rightImage:'',
            titleColor:'',
            tplurl:'',  // detail page url
            // call back function
            clickCellCallBack: null
        }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>this.clickCell(this.props.tplurl)}>
                <View style={styles.container}>
                    {/*left view*/}
                    <View>
                        <Text style={[{color: this.props.titleColor}, styles.titleStyle]}>{this.props.title}</Text>
                        <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                    </View>

                    {/*right view*/}
                    <Image source={{uri: this.props.rightImage}} style={styles.imageStyle}/>
                </View>
            </TouchableOpacity>
        );
    },

    clickCell(data){
        //
        if (this.props.clickCellCallBack == null) return;
        // call back
        this.props.clickCellCallBack(data);
    },

});

const styles = StyleSheet.create({
    container: {

        width: width/2 - 1,
        height: 59,
        marginBottom: 1,
        marginLeft: 1,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

        backgroundColor: 'white',
    },

    imageStyle:{
        width: 64,
        height: 43,
        resizeMode: 'contain',
    },

    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold',

    },

    subTitleStyle:{
        fontSize: 14,
        color: 'gray',
        marginTop: 5,

    },


});

module.exports = HomeCommonView;
