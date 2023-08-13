import { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { useQuery, useMutation } from '@apollo/client';

import { TopBar } from '../../components/TopBar/TopBar';
import { ChatLabel } from '../../components/ChatLabel/ChatLabel';
import { ActionButton } from '../../components/ActionButton/ActionButton';
import { ButtonsHolder } from '../../components/ButtonsHolder/ButtonsHolder';

import { GET_ROOM_MESSAGES } from '../../apollo/methods/getRoomMessages';
import { SEND_MESSAGE } from '../../apollo/methods/sendMessage';

import { ChatProps, GetRoomMessagesData } from './Chat.types';

import { styles } from './Chat.styles';

export const Chat = ({ route }: ChatProps) => {
  const { roomId, roomName } = route.params;
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [sendMessage] = useMutation(SEND_MESSAGE, {});
  const { data } = useQuery<GetRoomMessagesData>(GET_ROOM_MESSAGES, {
    variables: { id: roomId },
  });

  useEffect(() => {
    if (data?.room) {
      const convertedMessages = data.room.messages.map(message => {
        return {
          _id: message.id,
          text: message.body,
          createdAt: new Date(message.insertedAt),
          user: {
            _id: message.user.id,
            name: message.user.firstName,
            avatar: '',
          },
        };
      });
      setMessages(convertedMessages as IMessage[]);
    }
  }, []);

  const onSend = useCallback(
    (newMessages: IMessage[]) => {
      newMessages.forEach(async message => {
        console.log(message);
        try {
          const response = await sendMessage({
            variables: {
              roomId: roomId,
              body: message.text,
            },
          });
        } catch (error) {
          console.error('Error sending message:', error);
        }
        setMessages(
          previousMessages =>
            GiftedChat.append(previousMessages, [message]) as IMessage[],
        );
      });
    },
    [sendMessage, roomId],
  );

  return (
    <View style={styles.container}>
      <TopBar>
        <ChatLabel roomName={roomName} />
        <ButtonsHolder>
          <ActionButton iconType="phone" />
          <ActionButton iconType="camera" />
        </ButtonsHolder>
      </TopBar>
      <GiftedChat
        messages={messages}
        onSend={(messages: IMessage[]) => onSend(messages)}
        user={{
          _id: data?.room.user.id as string,
        }}
      />
    </View>
  );
};
