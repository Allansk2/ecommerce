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
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


var HomeTopListView = React.createClass ({

    getDefaultProps(){
      return{
          dataArr: []
      }
    },

    getInitialState(){
        // create datasource
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        return{
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
               />
        );
    },

    // listview row
    renderRow(rowData, sectionId, rowId){
        return(
            <TouchableOpacity onPress={()=>{alert('click item ' + rowId)}} >
                <View style={styles.cellViewStyle}>
                    <Image source={{uri: rowData.image}} style={styles.imageStyle}/>
                    <Text style={styles.titleStyle}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    },


});

const styles = StyleSheet.create({

    contentViewStyle:{
        // multi cell in a row
        flexWrap: 'wrap',

        // main axist direction
        flexDirection: 'row',

        width: width,


    },

    cellViewStyle:{
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: (width - 70 * 5) / (5 + 1),


    },

    imageStyle:{
        width: 52,
        height: 52,

    },

    titleStyle:{
        fontSize: 13,
        color: 'gray',

    },



});

module.exports = HomeTopListView;
