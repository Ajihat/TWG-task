import { User, SingleRoom } from '../../types/types';

export interface GetRoomsData {
  usersRooms: {
    rooms: SingleRoom[];
    user: User;
  };
}
