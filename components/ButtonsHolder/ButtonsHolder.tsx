import { View } from 'react-native';

import { ButtonsHolderProps } from './ButtonsHolder.types';

import { styles } from './ButtonsHolder.styles';

export const ButtonsHolder = ({ children }: ButtonsHolderProps) => {
  return <View style={styles.container}>{children}</View>;
};
