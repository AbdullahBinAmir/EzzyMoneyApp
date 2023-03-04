import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import {useState} from 'react'
import { colors } from '../styles/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import { firebase } from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import LoaderActivity from '../components/LoaderActivity'

const SignupScreen = ({navigation}) => {

    const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [repassword,setRePassword] = useState('')
    const [rcode,setRCode] = useState(0)
    const [hide,setHide] = useState(true)
    const [rhide,setRHide] = useState(true)
    const [loader,setLoader] = useState(false)

    const handleRegistration = async () => {
        try {
            if(name=='' || username=='' || email=='' || password=='' || repassword==''){
                alert('Please make sure you enter all info')
            }
            else if(password!==repassword){
                alert('Reenter Password again')
            }
            else if (password.length<=6){
                alert('Password should be more than 6 characters')
            }
            else{
                setLoader(true)
                const result = await auth().createUserWithEmailAndPassword(email, password);
                result.user.sendEmailVerification().then(async ()=>{
                    const user = result.user;
                    await user.updateProfile({ displayName: name });
                    firebase.app().
                    database('https://easymoney-602be-default-rtdb.firebaseio.com/').ref(`users/${user.uid}`).set({
                      name:name,
                      userName:username,
                      email:email,
                      referalCode:rcode,
                      balance:0
                    }).then(
                        ()=>{
                            setLoader(false)
                            alert('Registered Sucessfully')
                            navigation.goBack()
                        }
                    )
                })
            }
        } catch (error) {
          console.log(error);
        }
    };
      
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
    <ScrollView style={styles.container}>
        <View style={styles.viewTitle}>
            <Text style={styles.title}>Signup</Text>
        </View>
        <View style={{marginLeft:15,marginTop:60}}>
            <TextInput 
                style={styles.textInput1} 
                placeholderTextColor={colors.headerText}
                placeholder='Enter Full Name' 
                value={name}
                onChangeText={(t)=>setName(t)}
            />
        </View>
        <View style={{marginLeft:15,marginTop:25}}>
            <TextInput 
                style={styles.textInput1} 
                placeholderTextColor={colors.headerText}
                placeholder='Enter Username' 
                value={username}
                onChangeText={(t)=>setUsername(t)}
            />
      </View>
        <View style={{marginLeft:15,marginTop:25}}>
            <TextInput 
                style={styles.textInput1} 
                placeholderTextColor={colors.headerText}
                placeholder='Enter Email Address' 
                keyboardType='email-address'
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
        <View style={{marginLeft:15,marginTop:25,flexDirection:'row',alignItems:'center'}}>
            <TextInput 
                style={styles.textInput1} 
                placeholderTextColor={colors.headerText}
                secureTextEntry={rhide}
                placeholder='Repeat Password' 
                value={repassword}
                onChangeText={(t)=>setRePassword(t)}
            />
            <View style={{right:30}}>
                <Icon name="eye" color={rhide?colors.headerText:colors.buttons} size={25} 
                    onPress={()=>setRHide(!rhide)}
                />
            </View>
        </View>
        <View style={{marginLeft:15,marginTop:25}}>
            <TextInput 
                style={styles.textInput1} 
                placeholderTextColor={colors.headerText}
                placeholder='Enter Referal ID' 
                value={rcode.toString()=='0'?'Enter Referal ID':rcode}
                onChangeText={(t)=>setRCode(t)}
            />
        </View>
        <TouchableOpacity style={styles.signupBtn}
            onPress={handleRegistration}
        >
            <Text style={styles.signupText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.loginView,alignItems:'center'}}
            onPress={()=>navigation.goBack()}
        >
            <Text style={styles.text1}>Already have an account? Login Now!</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default SignupScreen

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
      signupBtn:{
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
      signupText:{
        fontFamily:'Montserrat',
        color:colors.headerText,
        fontSize:25,
        fontWeight:'700'
      },
      loginView:{
        margin:30,
        alignItems:'flex-end'
      },
      text1:{
        fontSize:16,
        fontWeight:'700',
        fontFamily:'Montserrat',
        color:colors.headerText
      }
})