import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  arrowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 24,
    height: 32,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 44,
    height: 44,
    marginRight: 12,
  },
  textHolder: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: 150,
  },
  roomName: {
    fontFamily: 'Poppins-SamiBold',
    fontSize: 13,
    lineHeight: 21,
    color: '#5603AD',
  },
  status: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    lineHeight: 21,
    color: 'white',
  },
});
