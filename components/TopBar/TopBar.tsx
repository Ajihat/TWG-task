import { View } from 'react-native';

import { TopBarProps } from './TopBar.types';
import { styles } from './TopBar.styles';

export const TopBar = ({ children }: TopBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.holder}>{children}</View>
    </View>
  );
};
