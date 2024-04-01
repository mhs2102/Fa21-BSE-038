import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AlarmAppScreen = () => {
  const [alarms, setAlarms] = useState([
    { id: 1, time: '08:00 AM', active: true },
    { id: 2, time: '12:00 PM', active: false },
    { id: 3, time: '06:00 PM', active: true },
  ]);

  const toggleAlarm = (id) => {
    setAlarms((prevAlarms) =>
      prevAlarms.map((alarm) =>
        alarm.id === id ? { ...alarm, active: !alarm.active } : alarm
      )
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Alarms</Text>
      {alarms.map((alarm) => (
        <TouchableOpacity
          key={alarm.id}
          style={[styles.alarmItem, alarm.active ? styles.activeAlarm : null]}
          onPress={() => toggleAlarm(alarm.id)}>
          <Text>{alarm.time}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  alarmItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  activeAlarm: {
    backgroundColor: 'yellow',
  },
});

export default AlarmAppScreen;
