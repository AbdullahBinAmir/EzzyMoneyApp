import React from 'react';
import {View,ActivityIndicator} from 'react-native';
import { colors } from '../styles/Colors';

const LoaderActivity = () => {
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center'}}
    >
      <View
        style={{
          backgroundColor: 'white',
          width: 40,
          borderRadius: 50,
          height: 40,
          borderColor: colors.buttons,
          borderWidth: 5,
          marginTop: 70,
        }}>
        <ActivityIndicator color={colors.buttons} size="small" style={{marginTop: 3}} />
      </View>
    </View>
  );
};
export default LoaderActivity;