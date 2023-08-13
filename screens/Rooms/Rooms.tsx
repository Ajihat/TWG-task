import { View } from 'react-native';

import { Header } from '../../components/Header/Header';
import { TopBar } from '../../components/TopBar/TopBar';
import { RoomsList } from '../../components/RoomsList/RoomsList';
import { ActionButton } from '../../components/ActionButton/ActionButton';
import { ButtonsHolder } from '../../components/ButtonsHolder/ButtonsHolder';

import { styles } from './Rooms.styles';

export const Rooms = () => {
  return (
    <View style={styles.container}>
      <TopBar>
        <Header text="Rooms" />
        <ButtonsHolder>
          <ActionButton iconType="search" />
          <ActionButton iconType="users" />
        </ButtonsHolder>
      </TopBar>
      <RoomsList />
    </View>
  );
};
