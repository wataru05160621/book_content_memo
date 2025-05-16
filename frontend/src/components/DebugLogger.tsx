import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

interface DebugLoggerProps {
  logs: string[];
}

export const DebugLogger: React.FC<DebugLoggerProps> = ({ logs }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {logs.map((log, index) => (
        <Text key={index} style={styles.logText}>
          {log}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: 150,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  content: {
    padding: 10,
  },
  logText: {
    color: 'white',
    fontSize: 12,
  },
});
