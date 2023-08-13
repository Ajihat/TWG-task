import { View, Image, TouchableWithoutFeedback, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './ChatLabel.styles';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { ChatLabelProps } from './ChatLabelProps.types';

export const ChatLabel = ({ roomName }: ChatLabelProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
        <View style={styles.arrowContainer}>
          <Image source={require('../../assets/backArrow.png')} />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.details}>
        <Image style={styles.image} source={require('../../assets/twg.png')} />
        <View style={styles.textHolder}>
          <Text style={styles.roomName} numberOfLines={1}>
            {roomName}
          </Text>
          <Text style={styles.status}>Active now</Text>
        </View>
      </View>
    </View>
  );
};
