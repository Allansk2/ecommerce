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
    TouchableOpacity,
    Image,

} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var HomeTitleCommonCell = require('./HomeTitleCommonCell');
var youLikeData = require('../../LocalData/HomeGeustYouLike.json');

var GuessYouLike = React.createClass ({

    getDefaultProps(){
        return{
            api_url:'http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        }
    },

    getInitialState(){
        return {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*top view*/}
                <HomeTitleCommonCell
                    leftIcon='cnxh'
                    leftTitle='猜你喜欢'
                />

                {/*list item*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />

            </View>
        );
    },


    renderRow(rowData){
        return(
            <TouchableOpacity onPress={()=>{alert('click item')}}>
                <View style={styles.listItemStyle}>
                    {/*left*/}
                    <Image source={{uri: this.processImage(rowData.imageUrl)}} style={styles.imageStyle}/>

                    {/*right*/}
                    <View style={styles.rightViewStyle}>
                        <View style={styles.rightTopViewStyle}>
                            <Text style={styles.titleStyle}>{rowData.title}</Text>
                            <Text style={styles.topRightStyle}>{rowData.topRightInfo}</Text>
                        </View>

                        <Text style={styles.subTitleStyle}>{rowData.subTitle}</Text>


                        <View style={styles.rightBottomViewStyle}>
                            <View style={styles.rightBottomPriceViewStyle}>
                                <Text style={styles.priceStyle}>{rowData.mainMessage + rowData.mainMessage2}</Text>
                                <Text style={styles.originalPriceStyle}>{rowData.subMessage}</Text>
                            </View>
                            <Text style={styles.bottomRightStyle}>{rowData.bottomRightInfo}</Text>
                        </View>

                    </View>

                </View>
            </TouchableOpacity>
        );
    },

    // process image size
    processImage(imageurl){
        if (imageurl.search('w.h') == -1){ // can't find
            return imageurl;
        }else {
            return imageurl.replace('w.h', '120.90');
        }
    },

    // fetch data
    componentDidMount(){
        this.loadData();
    },


    loadData(){
        fetch(this.props.api_url)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data)
                })
            }).catch((error)=>{
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(youLikeData.data)
                });
            })
    },


});

const styles = StyleSheet.create({
    container: {
        marginTop: 10,

    },

    listItemStyle:{
        backgroundColor: 'white',
        padding: 10,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,

        //main axist direction
        flexDirection: 'row',

    },

    rightViewStyle:{
        marginLeft: 8,
        width: width - 10 * 2 - 120 - 8 - 10,
        justifyContent: 'center',


    },

    rightTopViewStyle:{
        flexDirection: 'row',
        marginBottom: 7,
        justifyContent: 'space-between',
    },

    titleStyle:{
        fontSize: 17,
    },

    topRightStyle:{
        color: 'gray',
    },

    subTitleStyle:{
        color: 'gray',

    },

    rightBottomViewStyle:{
        flexDirection: 'row',
        marginTop: 7,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    rightBottomPriceViewStyle:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    priceStyle:{
        color: 'red',
        fontSize: 19,

    },

    originalPriceStyle:{
        color: 'gray',
        marginLeft: 8,
    },


    bottomRightStyle:{
        color: 'rgba(125, 125, 125, 1.0)',
    },

    imageStyle:{
        width: 120,
        height: 90,
        borderRadius: 8,

    }

});

module.exports = GuessYouLike;
