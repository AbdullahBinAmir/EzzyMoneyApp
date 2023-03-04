import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import {useState} from 'react'
import { colors } from '../styles/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [hide,setHide] = useState(true)

  const handleLogin = async () => {
    try {
      const result = await auth().signInWithEmailAndPassword(email, password);
      console.log(result.user); // the user's Firebase 
      if(result.user.email==email && result.user.emailVerified){
        navigation.navigate('DashboardScreen')
      }
      else if(!result.user.emailVerified){
        alert('Email not verified! Check you mail box')
      }
      else{
        alert('User not found with the given email')
      }
    } catch (error) {
      console.log(error);
      alert(error)
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={{marginLeft:15,marginTop:80}}>
        <TextInput 
          style={styles.textInput1} 
          placeholderTextColor={colors.headerText}
          placeholder='Enter Email Address' keyboardType='email-address' 
          value={email}
          onChangeText={(t)=>setEmail(t)}
        />
      </View>
      <View style={{marginLeft:15,marginTop:25,flexDirection:'row',alignItems:'center'}}>
        <TextInput 
          style={styles.textInput1} 
          placeholderTextColor={colors.headerText}
          secureTextEntry={hide}
          placeholder='Enter Password' 
          value={password}
          onChangeText={(t)=>setPassword(t)}
        />
        <View style={{right:30}}>
          <Icon name="eye" color={hide?colors.headerText:colors.buttons} size={25} 
            onPress={()=>setHide(!hide)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.forgotPasswordView}
        onPress={()=>navigation.navigate('ForgotPassword')}
      >
        <Text style={styles.text1}>Forgot Password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}
        onPress={handleLogin}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{...styles.forgotPasswordView,alignItems:'center'}}
        onPress={()=>navigation.navigate('SignupScreen')}
      >
        <Text style={styles.text1}>Don't have an account? Signup Now!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.cardbackground
  },
  viewTitle:{
      marginTop:80,
      alignItems:'center'
  },
  title:{
    fontFamily:'Montserrat',
    color:colors.headerText,
    fontSize:42,
    fontWeight:'800',
    letterSpacing:.5
  },
  textInput1:{
    borderBottomWidth:3,
    borderColor:colors.headerText,
    color:colors.headerText,
    fontSize:16,
    fontWeight:'700',
    fontFamily:'Montserrat',
    width:'90%'
  },
  forgotPasswordView:{
    margin:40,
    alignItems:'flex-end'
  },
  text1:{
    fontSize:16,
    fontWeight:'700',
    fontFamily:'Montserrat',
    color:colors.headerText
  },
  loginBtn:{
    backgroundColor:colors.buttons,
    shadowColor: colors.headerText,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 5,  
    elevation: 7,
    alignSelf:'center',
    paddingVertical:7,
    paddingHorizontal:40,
    marginTop:20,
    borderRadius:50,
    justifyContent:'center'
  },
  loginText:{
    fontFamily:'Montserrat',
    color:colors.headerText,
    fontSize:25,
    fontWeight:'700'
  }
})