import { View, Text } from 'react-native';

import { styles } from './Loader.styles';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};
