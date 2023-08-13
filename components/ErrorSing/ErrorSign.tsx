import { View, Text } from 'react-native';

import { styles } from './ErrorSign.styles';

export const ErrorSign = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Error</Text>
    </View>
  );
};
