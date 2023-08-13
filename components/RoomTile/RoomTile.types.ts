import { Message } from '../../types/types';

export interface RoomTileProps {
  id: string;
  name: string;
}

export interface GetRoomMessagesData {
  room: {
    id: string;
    messages: Message[];
  };
}
