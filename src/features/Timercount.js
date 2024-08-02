import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import {useKeepAwake} from "expo-keep-awake";
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/Size';
import { colors } from '../utils/colors';
import { Timing } from './Timing';


const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];


export const Timercount = ({ focusTime, clearSubject}) => {
  useKeepAwake();
  const [isStarted, setisStarted] = useState(false);
  const [progress, setisProgress] = useState(1);
  const [minutes, setminutes] = useState(0.1);

  const onEnd=(reset)=>{
  Vibration.vibrate(PATTERN);
  setisStarted(false)
  setisProgress(1)
  reset()
};

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={(progress) => setisProgress(progress)}
          onEnd={onEnd}
        />
        <SafeAreaView style={{ paddingTop: spacing.lg }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusTime}</Text>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={{ paddingTop: 2 }}>
        <ProgressBar progress={progress} style={{ height: spacing.sm }} />
      </SafeAreaView>
      <SafeAreaView style={styles.timingbutton}>
        <Timing onChangeTime={setminutes} />
      </SafeAreaView>

      <SafeAreaView style={styles.buttonwrapper}>
        {!isStarted && (
          <RoundedButton title="Start" onPress={() => setisStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="Pause" onPress={() => setisStarted(false)} />
        )}
      </SafeAreaView>
      <SafeAreaView style={styles.clearwrapper}>
        <RoundedButton size={50} title="Back"   onPress={clearSubject}/>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingbutton: {
    flex: 0.1,
    paddingTop: spacing.lg,
    flexDirection: 'row',
  },
  buttonwrapper: {
    flex: 0.3,
    flexDirection: 'row',
    paddingTop: spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearwrapper:{
    alignItems:"center"

  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
