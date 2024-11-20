import { FC, useMemo } from 'react';
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import iconsObject from '_assets/icons/iconsObject';
import imagesObject from '_assets/images/imagesObject';
import { CustomImage } from '_atoms';
import { useTheme } from '_styles/theming';

import styles from './HeaderMain.style';
import { HeaderMainProps } from './HeaderMain.types';

const bellIcon = iconsObject?.bell;
const userIcon = iconsObject?.user;
const logo = imagesObject?.logo;

const HeaderMain: FC<HeaderMainProps> = ({
  overrideMainContainerStyle,
  overrideContainerStyle,
}) => {
  const theme = useTheme();
  const safeAreaInsets = useSafeAreaInsets();

  const {
    mainContainerStyle,
    containerStyle,
    logoStyle,
    rightContainer,
    iconContainer,
    iconStyle,
  } = useMemo(() => styles(theme, safeAreaInsets), [theme, safeAreaInsets]);

  return (
    <SafeAreaView style={[overrideMainContainerStyle, mainContainerStyle]}>
      <View style={[overrideContainerStyle, containerStyle]}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
          <CustomImage source={logo} overrideResizeMode='contain' overrideStyle={logoStyle} />
        </TouchableOpacity>
        <View style={rightContainer}>
          <TouchableOpacity activeOpacity={0.8} style={iconContainer} onPress={() => {}}>
            <Image source={bellIcon} resizeMode='contain' style={iconStyle} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={iconContainer} onPress={() => {}}>
            <Image source={userIcon} resizeMode='contain' style={iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderMain;
