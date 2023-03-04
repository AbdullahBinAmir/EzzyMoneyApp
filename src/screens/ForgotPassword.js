import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import {useState} from 'react'
import { colors } from '../styles/Colors'
import auth from '@react-native-firebase/auth';
import LoaderActivity from '../components/LoaderActivity';

const ForgotPassword = ({navigation}) => {
  const handlePasswordReset = async () => {
    setLoader(true)
    try {
      await auth().sendPasswordResetEmail(email);
      alert('Password reset email sent')
      setLoader(false)
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };
  
  const [email,setEmail] = useState('')
  const [loader,setLoader] = useState(false)

  if(loader){
    return(
        <View style={{
            flex:1,
            backgroundColor:colors.headerText,
            alignItems:'center',
            justifyContent:'center',
        }}>
            <LoaderActivity loader={true} />
        </View>
      )
  }

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text1}>Enter Your Email</Text>
      </View>
      <View style={{margin:15,marginTop:30}}>
          <TextInput 
            style={styles.textInput1} 
            placeholderTextColor={colors.headerText}
            keyboardType='email-address'
            placeholder='Email' 
            value={email}
            onChangeText={(t)=>setEmail(t)}
          />
      </View>
      <TouchableOpacity style={styles.resetBtn}
        onPress={handlePasswordReset}
      >
          <Text style={styles.resetText}>Send Request</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.cardbackground,
  },
  view1:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:80
  },
  text1:{
    color:colors.headerText,
    fontSize:28,
    fontFamily:'Montserrat',
    fontWeight:'bold'
  },
  textInput1:{
    borderBottomWidth:3,
    borderColor:colors.headerText,
    color:colors.headerText,
    fontSize:20,
    fontWeight:'700',
    fontFamily:'Montserrat',
  },
  resetBtn:{
    backgroundColor:colors.buttons,
    shadowColor: colors.headerText,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 5,  
    elevation: 7,
    alignSelf:'center',
    paddingVertical:7,
    paddingHorizontal:40,
    marginTop:25,
    borderRadius:50,
    justifyContent:'center'
  },
  resetText:{
    fontFamily:'Montserrat',
    color:colors.headerText,
    fontSize:20,
    fontWeight:'700'
  },
})