import { FC, useMemo } from 'react';
import { View } from 'react-native';

import { CustomClickableIcon, CustomText } from '_atoms';
import NavigationServices from '_navigations/NavigationServices';
import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './InnerHeader.style';
import { InnerHeaderProps } from './InnerHeader.types';

const InnerHeader: FC<InnerHeaderProps> = ({
  title,
  titlePosition = 'center',
  showBackIcon = true,
  swipeDirection = 'left',
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
        <CustomClickableIcon
          iconName={swipeDirection === 'left' ? 'biArrowLeft' : 'downFill'}
          onPress={() => NavigationServices.goBack()}
          overrideStyle={{ paddingRight: scale(24) }}
        />
      ) : titlePosition === 'center' ? (
        <View style={iconStyle} />
      ) : null}
      {title && (
        <CustomText
          text={title.toLocaleUpperCase()}
          textFontStyle={overrideTitleFontStyle}
          color={theme?.gray2}
          overrideStyle={showBackIcon ? { left: scale(-24) } : {}}
        />
      )}
      <View style={titlePosition === 'left' ? [rightContainer, { flex: 1 }] : rightContainer}>
        {showSearchIcon && <CustomClickableIcon iconName='search' onPress={onSearchIconPress} />}
        {showAddIcon && <CustomClickableIcon iconName='plus' onPress={onAddIconPress} />}
      </View>
    </View>
  );
};

export default InnerHeader;
