import { View, Image, TouchableWithoutFeedback } from 'react-native';

import { ActionButtonProps } from './ActionButton.types';

import { styles } from './ActionButton.styles';

export const ActionButton = ({ iconType }: ActionButtonProps) => {
  const getImageSource = (iconType: ActionButtonProps['iconType']) => {
    switch (iconType) {
      case 'camera':
        return require('../../assets/camera.png');
      case 'phone':
        return require('../../assets/phone.png');
      case 'search':
        return require('../../assets/search.png');
      case 'users':
        return require('../../assets/users.png');
      default:
        return null;
    }
  };

  const imageSource = getImageSource(iconType);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        {imageSource && <Image source={imageSource} />}
      </TouchableWithoutFeedback>
    </View>
  );
};
