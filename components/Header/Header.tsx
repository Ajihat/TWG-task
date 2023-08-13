import { Text } from 'react-native';
import { HeaderProps } from './Header.types';

import { styles } from './Header.styles';

export const Header = ({ text }: HeaderProps) => {
	return <Text style={styles.text}>{text}</Text>;
};
