import { FC, useMemo } from 'react';
import { View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import { CustomImage, CustomText } from '_atoms';
import { useTheme } from '_styles/theming';

import styles from './InnerHeader.style';
import { InnerHeaderProps } from './InnerHeader.types';

const InnerHeader: FC<InnerHeaderProps> = ({
  iconName,
  title,
  subtitle,
  overrideTitleFontStyle = 'subtitle',
  overrideSubtitleFontStyle = 'bodySmall',
  overrideContainerStyle,
}) => {
  const theme = useTheme();

  const { container, iconStyle } = useMemo(() => styles(theme), [theme]);

  return (
    <View style={[container, overrideContainerStyle]}>
      {iconName && <CustomImage source={iconsObject?.[iconName]} overrideStyle={iconStyle} />}
      <CustomText text={title} textFontStyle={overrideTitleFontStyle} color={theme?.white} />
      {subtitle && (
        <CustomText
          text={subtitle}
          textFontStyle={overrideSubtitleFontStyle}
          color={theme?.gray[400]}
        />
      )}
    </View>
  );
};

export default InnerHeader;
