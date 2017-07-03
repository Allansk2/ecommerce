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
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';


var HomeTitleCommonCell = require('./HomeTitleCommonCell');
var Home_D5 = require('../../LocalData/Home_D5.json');


var HomeShopCenter = React.createClass ({

    getDefaultProps(){
        return{
            //call back
            popToHomeView:null
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*top view*/}
                <HomeTitleCommonCell
                    leftIcon='gw'
                    leftTitle='购物中心'
                    rightTitle={Home_D5.tips}
                />

                {/*bottom view*/}
                <ScrollView
                    style={styles.scrollviewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >

                    {this.renderAllItem()}
                </ScrollView>
            </View>
        );
    },


    renderAllItem(){
        // component array
        var itemArr = [];
        // get data array
        var dataArr = Home_D5.data;
        for (var i = 0; i < dataArr.length; i++) {
            // get single item data
            var data = dataArr[i];
            // put component to array
            itemArr.push(
                <ShopCenterItem key={i}
                    shopImage={data.img}
                    shopSale={data.showtext.text}
                    shopName={data.name}
                    detailurl={data.detailurl}
                    popToShopCenter={(url)=>this.popToHome(url)}
                />
            );
        }
        // return component array
        return itemArr;
    },


    // call back to home
    popToHome(url){
        if (this.props.popToHomeView == null) return;
        this.props.popToHomeView(url);
    },

});


// shop center item
var ShopCenterItem = React.createClass({

    getDefaultProps(){
        return{
            shopImage: '',
            shopSale:'',
            shopName:'',
            detailurl:'',
            popToShopCenter:null
        }
    },

    render(){
        return(
          <TouchableOpacity onPress={()=>this.clickItem(this.props.detailurl)}>
              <View style={styles.itemViewStyle}>
                  <Image source={{uri: this.props.shopImage}} style={styles.imageStyle}/>
                  <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                  <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
              </View>
          </TouchableOpacity>
        );
    },

    // call back
    clickItem(url){
        if (this.props.popToShopCenter == null) return;
        this.props.popToShopCenter(url);
    },

});



const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: 'white',
    },

    scrollviewStyle:{
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,

    },

    itemViewStyle:{
        margin: 8,

    },

    imageStyle:{
        width: 120,
        height: 100,
        borderRadius: 8,

    },

    shopSaleStyle:{
        // absolute position
        position: 'absolute',
        left: 0,
        bottom: 30,
        backgroundColor: 'orange',
        color: 'white',
        padding: 3,

    },

    shopNameStyle:{
        textAlign: 'center',
        marginTop: 5,

    },

});

module.exports = HomeShopCenter;
