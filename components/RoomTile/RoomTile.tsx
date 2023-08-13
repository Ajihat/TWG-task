import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { useQuery } from '@apollo/client';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';

import { RoomTileProps, GetRoomMessagesData } from './RoomTile.types';
import { useNavigation } from '@react-navigation/native';

import { GET_ROOM_MESSAGES } from '../../apollo/methods/getRoomMessages';

import { styles } from './RoomTile.styles';

export const RoomTile = ({ id, name }: RoomTileProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { data } = useQuery<GetRoomMessagesData>(GET_ROOM_MESSAGES, {
    variables: { id },
  });

  const messages = data?.room.messages || [];
  const lastMessage = messages[0];

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('Chat', {
          roomId: id,
          roomName: name,
        })
      }
    >
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require('../../assets/profile.png')}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.roomName} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.message} numberOfLines={1}>
            {lastMessage ? lastMessage.body : ''}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
