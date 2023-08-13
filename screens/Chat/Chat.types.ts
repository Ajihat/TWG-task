import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Message, User } from '../../types/types';

export type ChatProps = NativeStackScreenProps<RootStackParamList, 'Chat'>;

export interface GetRoomMessagesData {
  room: {
    id: string;
    messages: Message[];
    name: string;
    user: User;
  };
}
