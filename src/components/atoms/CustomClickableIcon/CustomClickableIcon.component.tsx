import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';
import { getActualImageSize, getAutomationTestingProp } from '_utils/helpers';

import CustomImage from '../CustomImage/CustomImage.component';
import styles from './CustomClickableIcon.style';
import { CustomClickableIconPropsTypes } from './CustomClickableIcon.types';

const iconHeight = scale(24);

const CustomClickableIcon: React.FC<CustomClickableIconPropsTypes> = ({
  iconName,
  testId = '',
  disabled = false,
  overrideStyle,
  onPress,
}) => {
  const theme = useTheme();

  const iconWidth = useMemo(
    () => iconHeight * getActualImageSize(iconsObject?.[iconName]).aspectRatio,
    [iconName]
  );

  const { iconStyle } = useMemo(() => styles(theme), [theme]);

  return (
    <TouchableOpacity
      disabled={disabled}
      style={overrideStyle}
      {...getAutomationTestingProp(testId)}
      onPress={() => (onPress ? onPress() : undefined)}>
      {iconName && (
        <CustomImage
          source={iconsObject?.[iconName]}
          overrideResizeMode='contain'
          overrideStyle={[
            iconStyle,
            {
              width: iconWidth,
              height: iconHeight,
            },
          ]}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomClickableIcon;
