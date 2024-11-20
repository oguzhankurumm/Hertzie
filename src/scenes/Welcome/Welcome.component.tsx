import { useMemo } from 'react';

import { ImageBackground } from 'expo-image';

import imagesObject from '_assets/images/imagesObject';
import { CustomButton, CustomImage } from '_atoms';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import StackNames from '_navigations/StackNames';
import { useTheme } from '_styles/theming';

import styles from './Welcome.style';

const Welcome = () => {
  const theme = useTheme();

  const { container, logoStyle, buttonStyle, buttonTitleStyle } = useMemo(
    () => styles(theme),
    [theme]
  );

  return (
    <ImageBackground source={imagesObject?.welcomeBackground} style={container}>
      <CustomImage
        source={imagesObject?.fullLogo}
        overrideResizeMode='contain'
        overrideStyle={logoStyle}
      />
      <CustomButton
        title={String('Get Started').toLocaleUpperCase()}
        onPress={() =>
          NavigationServices.resetToStack(StackNames.bottomNavBarStack, {
            scene: Scenes.home,
          })
        }
        overrideTitleStyle={buttonTitleStyle}
        overrideStyle={buttonStyle}
      />
    </ImageBackground>
  );
};

export default Welcome;
