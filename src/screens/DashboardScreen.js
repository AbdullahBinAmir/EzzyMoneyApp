import { StyleSheet, Text, View, Image, FlatList, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../styles/Colors'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const DashboardScreen = ({navigation}) => {

  const servicesList=[
    {id:1,name:'Daily Spin',url:require('../../assets/daily_spin_icon.png'),navName:''},
    {id:2,name:'Math Quiz',url:require('../../assets/math_quiz_icon.png'),navName:''},
    {id:3,name:'Recaptcha',url:require('../../assets/recaptcha_icon.png'),navName:''},
    {id:4,name:'Surveys',url:require('../../assets/survey_icon.png'),navName:''},
    {id:5,name:'Refer & Earn',url:require('../../assets/refer_icon.png'),navName:'ReferAndEarn'},
    {id:6,name:'Scratch & Win',url:require('../../assets/ScratchWin_icon.png'),navName:''},
    {id:7,name:'Withdraw',url:require('../../assets/withdraw_icon.png'),navName:'WithdrawScreen'},
    {id:8,name:'FAQs',url:require('../../assets/FAQs_icon.png'),navName:''},
  ]

  return (
    <View style={styles.container}>
      <View style={styles.balanceView}>
        <Text style={styles.balanceText}>Balance</Text>
        <Text style={styles.balanceText}>$10.69</Text>
        <Text style={styles.balanceText1}>2897.45 pkr</Text>
      </View>
      <View style={styles.cardList}>
        <FlatList
          style={{marginBottom:10}}
          contentContainerStyle={{alignItems:'center',}}
          data={servicesList}
          numColumns={3}
          keyExtractor={item => item.id}
          renderItem={({item})=>(
            <Pressable style={{width:SCREEN_WIDTH*.25,alignItems:'center',marginRight:7,marginBottom:3}}
              onPress={()=>navigation.navigate(item.navName)}
            >
              <View style={styles.listImageBox}>
                <Image 
                  source={item.url}
                  style={{height:SCREEN_HEIGHT*.09,width:SCREEN_WIDTH*.18}}
                />
              </View>
              <Text style={styles.text1}>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>  
    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexGrow:1,
        backgroundColor:colors.cardbackground
    },
    balanceView:{
      height:200,
      width:200,
      borderWidth:12,
      borderColor:colors.buttons,
      borderRadius:100,
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
      marginTop:60,
      padding:7
    },
    balanceText:{
      color:colors.headerText,
      fontSize:35,
      fontWeight:'700',
      fontFamily:'Montserrat'
    },
    balanceText1:{
      color:colors.headerText,
      fontSize:16,
      fontFamily:'Montserrat'
    },
    cardList:{
      width:SCREEN_WIDTH*.9,
      backgroundColor:colors.headerText,
      marginVertical:30,
      marginHorizontal:10,
      borderRadius:25,
      padding:10
    },
    listImageBox:{
      margin:7,
      paddingHorizontal:3,
      paddingVertical:7,
      backgroundColor:colors.cardbackground,
      borderRadius:10
    },
    text1:{
      fontSize:14,
      color:colors.cardbackground,
      fontFamily:'Montserrat'
    }
})