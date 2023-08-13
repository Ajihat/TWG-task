import { AppRegistry } from 'react-native';
import { useFonts } from 'expo-font';
import { View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SamiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });
  return <View></View>;
}

AppRegistry.registerComponent('MyApplication', () => App);
