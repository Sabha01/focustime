import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({onChangeTime}) => {
  return (
    <>
  <SafeAreaView style={styles.timingButton}>
    <RoundedButton size={75} title="10" onPress={()=> onChangeTime(10)} />
  </SafeAreaView>
   <SafeAreaView style={styles.timingButton}>
    <RoundedButton size={75} title="15" onPress={()=> onChangeTime(15)} />
  </SafeAreaView>
   <SafeAreaView style={styles.timingButton}>
    <RoundedButton size={75} title="20" onPress={()=> onChangeTime(20)} />
  </SafeAreaView>
  </>
  )
}

const styles=StyleSheet.create({
  timingButton:{
    flex:2,
    alignItems:"center",
    color:"pink"
  }

})