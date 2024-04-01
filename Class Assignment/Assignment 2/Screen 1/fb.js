import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FacebookSettingsScreen = () => {
  const handleSettingPress = (settingName) => {
    // Handle press event for each setting
    console.log(`Setting '${settingName}' pressed`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity style={styles.settingItem} onPress={() => handleSettingPress('Account')}>
        <Text style={styles.text}>Account Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => handleSettingPress('Privacy')}>
        <Text style={styles.text}>Privacy Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => handleSettingPress('Notifications')}>
        <Text style={styles.text}>Notification Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => handleSettingPress('Security')}>
        <Text style={styles.text}>Security Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => handleSettingPress('Help')}>
        <Text style={styles.text}>Help & Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => handleSettingPress('LogOut')}>
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color:'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text:{
    color:'white',
  },
  settingItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default FacebookSettingsScreen;
