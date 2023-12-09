import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';

const ScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert('Scanning', `Bar code with type ${type} and data ${data} has been scanned!`, [
      {
        text: 'OK',
        onPress: () => {
          setTimeout(() => setScanned(false), 1000) // Подождать секунду после нажатия ОК, а затем снова дать сканировать камере
        }
      },
    ]);
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.camera}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  camera: {
    width: '100%',
    aspectRatio: 1,
  }
});

export default ScannerScreen;