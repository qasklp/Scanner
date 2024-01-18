import { useEffect } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Pressable } from 'react-native'
import { globalStyles } from '../styles/global'
import Button from '../components/Button'
import MessageListIco from './../../assets/messages.svg'
import SettingsIco from './../../assets/settings.svg'
import ScanIco from './../../assets/scan.svg'

const HomeScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView style={globalStyles.container}>
        <View style={styles.menuList}>
          <TouchableOpacity style={styles.menuItem}>
            <MessageListIco width={styles.menuImage.width} height={styles.menuImage.height} />
            <Text style={globalStyles.label}>Повідомлення</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <SettingsIco width={styles.menuImage.width} height={styles.menuImage.height} />
            <Text style={globalStyles.label}>Налаштування</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.manualInput}>
          <TextInput
            style={[globalStyles.input, styles.input]}
            placeholder="Ввести штрихкод"
          />
          <Button styles={[styles.button]} title='Перевірити'></Button>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ScannerScreen')} style={[globalStyles.bgColorLight, styles.scanButton]}>
          <ScanIco width={40} height={40}></ScanIco>
          <Text style={[globalStyles.label, globalStyles.textColor, { marginBottom: 0 }]}>SCAN</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  menuList: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    marginBottom: 50,
    width: '100%',
  },
  menuImage: {
    width: '70%',
    height: 100,
  },
  menuItem: {
    alignItems: 'center',
    gap: 5,
  },
  input: {
    marginBottom: 0,
    flexGrow: 1,
    marginRight: 5,
  },
  manualInput: {
    flexDirection: 'row',
    marginBottom: 20
  },
  scanButton: {
    padding: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HomeScreen;