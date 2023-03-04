import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../styles/Colors';

const SplashScreen = ({navigation}) => {
    setTimeout(() => {
        navigation.navigate('LoginScreen');
      }, 3000);
  return (
    <View style={styles.container}>
        <Image 
            source={require('../../assets/ezzy_money_logo.png')}
            style={{height:220,width:250}}
        />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.cardbackground,
        justifyContent:'center',
        alignItems:'center'
    }
})