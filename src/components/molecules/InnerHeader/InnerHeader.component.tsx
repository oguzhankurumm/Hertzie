import { FC, useMemo } from 'react';
import { View } from 'react-native';

import { CustomClickableIcon, CustomText } from '_atoms';
import { useTheme } from '_styles/theming';

import styles from './InnerHeader.style';
import { InnerHeaderProps } from './InnerHeader.types';

const InnerHeader: FC<InnerHeaderProps> = ({
  title,
  titlePosition = 'center',
  showBackIcon = true,
  showSearchIcon = true,
  onSearchIconPress,
  showAddIcon = false,
  onAddIconPress,
  overrideTitleFontStyle = 'extraBold16',
  overrideContainerStyle,
}) => {
  const theme = useTheme();

  const { container, rightContainer, iconStyle } = useMemo(() => styles(theme), [theme]);

  return (
    <View style={[container, overrideContainerStyle]}>
      {showBackIcon ? (
        <CustomClickableIcon iconName='biArrowLeft' />
      ) : titlePosition === 'center' ? (
        <View style={iconStyle} />
      ) : null}
      {title && (
        <CustomText
          text={title.toLocaleUpperCase()}
          textFontStyle={overrideTitleFontStyle}
          color={theme?.gray2}
        />
      )}
      <View style={titlePosition === 'left' ? [rightContainer, { flex: 1 }] : rightContainer}>
        {showAddIcon && <CustomClickableIcon iconName='plus' onPress={onAddIconPress} />}
        {showSearchIcon && <CustomClickableIcon iconName='search' onPress={onSearchIconPress} />}
      </View>
    </View>
  );
};

export default InnerHeader;
