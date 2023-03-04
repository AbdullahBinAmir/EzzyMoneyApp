import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React,{useState} from 'react'
import { colors } from '../styles/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const WithdrawScreen = ({navigation}) => {
    const [accountno,setAccountno] = useState(0)
    const [amount,setAmount] = useState(0)
  return (
    <ScrollView style={styles.container}>
      <Pressable style={{marginHorizontal:25,marginVertical:30}}
        onPress={()=>navigation.goBack()}
      >
        <Icon name="chevron-left" color={colors.headerText} size={30} />
      </Pressable>
      <View style={styles.balanceView}>
        <Text style={styles.balanceText}>Balance</Text>
        <Text style={styles.balanceText}>$10.69</Text>
        <Text style={styles.balanceText1}>2897.45 pkr</Text>
      </View>
      <View style={styles.cardList}>
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
            <View style={styles.listImageBox}>
                <Image 
                    source={require('../../assets/easypaisa.png')}
                    style={{height:SCREEN_HEIGHT*.09,width:SCREEN_WIDTH*.18}}
                />
            </View>
            <View style={styles.listImageBox}>
                <Image 
                    source={require('../../assets/jazzcash.jpg')}
                    style={{height:SCREEN_HEIGHT*.09,width:SCREEN_WIDTH*.18}}
                />
            </View>
            <View style={styles.listImageBox}>
                <Image 
                    source={require('../../assets/account1.png')}
                    style={{height:SCREEN_HEIGHT*.09,width:SCREEN_WIDTH*.18}}
                />
            </View>
        </View>
        <View style={{marginLeft:15,marginTop:25}}>
            <TextInput 
                style={styles.textInput1} 
                placeholderTextColor={colors.cardbackground}
                placeholder='Enter Account Number' 
                value={accountno}
                onChangeText={(t)=>setAccountno(t)}
            />
        </View>
        <View style={{marginLeft:15,marginTop:25}}>
            <TextInput 
                style={styles.textInput1} 
                placeholderTextColor={colors.cardbackground}
                placeholder='Enter Amount' 
                value={amount}
                onChangeText={(t)=>setAmount(t)}
            />
        </View>
        <TouchableOpacity style={styles.withdrawBtn}>
            <Text style={styles.withdrawText}>Widthdraw</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default WithdrawScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
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
      textInput1:{
        borderBottomWidth:3,
        borderColor:colors.cardbackground,
        color:colors.cardbackground,
        fontSize:16,
        fontWeight:'700',
        fontFamily:'Montserrat',
        width:'90%'
      },
      withdrawBtn:{
        backgroundColor:colors.buttons,
        shadowColor: colors.headerText,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 5,  
        elevation: 7,
        alignSelf:'center',
        paddingVertical:10,
        paddingHorizontal:40,
        marginTop:25,
        borderRadius:50,
        justifyContent:'center'
      },
      withdrawText:{
        fontFamily:'Montserrat',
        color:colors.headerText,
        fontSize:25,
        fontWeight:'700'
      },
})