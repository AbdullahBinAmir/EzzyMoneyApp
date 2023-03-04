import React from 'react'
import { View ,StyleSheet ,StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './src/screens/SplashScreen'
import LoginScreen from './src/screens/LoginScreen'
import { colors } from './src/styles/Colors'
import { NavigationContainer } from '@react-navigation/native'
import ForgotPassword from './src/screens/ForgotPassword'
import SignupScreen from './src/screens/SignupScreen'
import DashboardScreen from './src/screens/DashboardScreen'
import WithdrawScreen from './src/screens/WithdrawScreen'
import ReferAndEarn from './src/screens/ReferAndEarn'

const AuthStack=createNativeStackNavigator();

export default function App() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle= "light-content"
          backgroundColor={colors.statusBar}
        />
        <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{headerShown:false}}
          />
          <AuthStack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{headerShown:false}}
          />
          <AuthStack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{headerShown:false}}
          />
          <AuthStack.Screen
              name="SignupScreen"
              component={SignupScreen}
              options={{headerShown:false}}
          />
          <AuthStack.Screen
              name="DashboardScreen"
              component={DashboardScreen}
              options={{headerShown:false}}
          />
          <AuthStack.Group>
            <AuthStack.Screen
                name="WithdrawScreen"
                component={WithdrawScreen}
                options={{headerShown:false}}
            />
            <AuthStack.Screen
                name="ReferAndEarn"
                component={ReferAndEarn}
                options={{headerShown:false}}
            />
          </AuthStack.Group>
      </AuthStack.Navigator>
        </NavigationContainer>
      </View>
    )
  }

const styles=StyleSheet.create({
  container:{flex:1}
}) 