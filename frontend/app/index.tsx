import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { checkHealth } from '../src/api/health';
import { getBaseUrl } from '../src/config/env';

export default function Page() {
  const [logs, setLogs] = useState<string[]>([]);

  const handleHealthCheck = async () => {
    try {
      const result = await checkHealth();
      setLogs(prev => [...prev, `ヘルスチェック成功: ${JSON.stringify(result)}`]);
    } catch (error) {
      setLogs(prev => [
        ...prev,
        `エラー: ${error instanceof Error ? error.message : '不明なエラー'}`,
      ]);
    }
  };

  useEffect(() => {
    setLogs(prev => [...prev, `API URL: ${getBaseUrl()}`]);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>

        <TouchableOpacity style={styles.button} onPress={handleHealthCheck}>
          <Text style={styles.buttonText}>ヘルスチェック実行</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.debugContainer} contentContainerStyle={styles.debugContent}>
        {logs.map((log, index) => (
          <Text key={index} style={styles.debugText}>
            {log}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  debugContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: 150,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  debugContent: {
    padding: 10,
  },
  debugText: {
    color: 'white',
    fontSize: 12,
    marginBottom: 4,
  },
});
