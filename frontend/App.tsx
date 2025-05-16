import React, { useEffect, useState } from 'react';
import { AppNavigator } from './src/navigation/AppNavigator';
import { Text, View, ScrollView } from 'react-native';

export default function App() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const log = 'App mounted at ' + new Date().toISOString();
    setLogs(prev => [...prev, log]);
    console.log(log);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
      <ScrollView
        style={{
          position: 'absolute',
          bottom: 0,
          maxHeight: 100,
          backgroundColor: 'rgba(0,0,0,0.8)',
        }}
      >
        {logs.map((log, index) => (
          <Text key={index} style={{ color: 'white', fontSize: 12 }}>
            {log}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
