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
    Platform,
    WebView
} from 'react-native';

var ShopCenterDetail = React.createClass ({

    getInitialState(){
        return{
            detailUrl: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*navigation bar*/}
                {this.renderNavBar()}

                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />

            </View>
        );
    },

    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                <TouchableOpacity style={styles.navLeftViewStyle}
                                  onPress={()=>this.props.navigator.pop()}
                >
                    <Image source={{uri: 'icon_camera_back_normal'}} style={styles.navImageStyle}/>
                </TouchableOpacity>

                <Text style={styles.navTitleStyle}>购物中心详情</Text>

                <TouchableOpacity style={styles.navRightViewStyle}
                                  onPress={()=>{alert('点了')}}
                >
                    <Image source={{uri: 'icon_mine_setting'}} style={styles.navImageStyle}/>
                </TouchableOpacity>

            </View>
        )
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


    navOutViewStyle:{
        height: Platform.OS === 'ios' ? 64 : 48,
        backgroundColor: 'rgba(255, 96, 0, 1.0)',

        // main axis direction
        flexDirection: 'row',
        // center vertical - cross-axis
        alignItems: 'flex-end',

        // set space
        justifyContent: 'space-around',

        // center horizontal - on main axist
        justifyContent:'center',

    },

    navTitleStyle:{
        color: 'white',
        fontSize: 16,
        marginBottom: 15,
        fontWeight: 'bold',


    },

    navLeftViewStyle:{
        // position
        position: 'absolute',
        left: 10,
        bottom: 10,
    },

    navRightViewStyle:{
        // position
        position: 'absolute',
        right: 10,
        bottom: 10,

    },

    navImageStyle:{ // image in navigation bar
        width: 25,
        height:25,
        marginRight: 10,
    },

});

module.exports = ShopCenterDetail;
