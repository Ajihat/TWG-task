import { View, Text, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../../apollo/methods/getRooms';
import { Loader } from '../Loader/Loader';
import { ErrorSign } from '../ErrorSing/ErrorSign';
import { RoomTile } from '../RoomTile/RoomTile';

import { GetRoomsData } from './RoomsList.types';

import { styles } from './RoomsList.styles';

export const RoomsList = () => {
  const { loading, error, data } = useQuery<GetRoomsData>(GET_ROOMS);

  if (loading) return <Loader />;
  if (error) return <ErrorSign />;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data?.usersRooms.rooms.map(room => {
        const { id, name } = room;
        return <RoomTile key={id} id={id} name={name} />;
      })}
    </ScrollView>
  );
};
