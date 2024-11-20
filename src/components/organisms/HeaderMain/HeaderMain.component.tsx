import { FC, useMemo } from 'react';
import { SafeAreaView, View } from 'react-native';

import imagesObject from '_assets/images/imagesObject';
import { CustomImage } from '_atoms';
import { useTheme } from '_styles/theming';

import styles from './HeaderMain.style';
import { HeaderMainProps } from './HeaderMain.types';

const logo = imagesObject?.iconLogo;

const HeaderMain: FC<HeaderMainProps> = ({
  overrideMainContainerStyle,
  overrideContainerStyle,
}) => {
  const theme = useTheme();

  const { mainContainerStyle, containerStyle, logoContainer, logoStyle } = useMemo(
    () => styles(theme),
    [theme]
  );

  return (
    <SafeAreaView style={[overrideMainContainerStyle, mainContainerStyle]}>
      <View style={[overrideContainerStyle, containerStyle]}>
        <View style={logoContainer}>
          <CustomImage source={logo} overrideStyle={logoStyle} overrideResizeMode='contain' />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderMain;
