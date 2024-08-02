import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
//import Constants from "expo-constants";
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import {Timercount} from "./src/features/Timercount";
import {Focushistroy} from "./src/features/Focushistroy";

export default function App() {
  const [currentsubject, setCreentSubject] = useState();
  return (
    <SafeAreaView style={styles.container}>
      {!currentsubject ? (
        <Focus addSubject={setCreentSubject} />

      ) : (
        <Timercount
          focusTime={currentsubject}
          timeEnd={() => {}}
          clearSubject={() => {setCreentSubject(null)}}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.pink,
  },
});
