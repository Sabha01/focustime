import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import {RoundedButton} from "../components/RoundedButton";
import {spacing} from "../utils/Size";

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.inputContainer}>
        <TextInput 
        onChangeText={setSubject} 
        style={styles.textContainer}
          label="Search for salon, artist...." />
          <SafeAreaView style={styles.button}>
          <RoundedButton  title="+" size={50} onPress={() => addSubject(subject)} />
          </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
 
  );
};

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    padding:spacing.lg,
    justifyContent: 'center',
    flexDirection:"row"
  },
  button:{
    justifyContent:"center"

  },
  textContainer: {
    flex:0.8,
    marginRight:spacing.sm,
    backgroundColor: '#EDCCCC'
  },
  // text: {
  //   color: colors.white,
  // }
});
// export default Focus;
