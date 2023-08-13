import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 16,
    paddingRight: 100,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  image: {
    width: 64,
    height: 64,
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: 10,
    paddingVertical: 10,
  },
  roomName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
  },
  message: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
  },
});
