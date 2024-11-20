import { FC, useMemo } from 'react';
import { View } from 'react-native';

import imagesObject from '_assets/images/imagesObject';
import { CustomImage } from '_atoms';
import { useTranslate } from '_hooks/useTranslate';
import { scale, verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import CustomText from '../../atoms/CustomText/CustomText.component';
import styles from './ListEmpty.style';
import { ListEmptyPropsTypes } from './ListEmpty.types';

const ListEmpty: FC<ListEmptyPropsTypes> = ({
  overrideText,
  overrideTextFontStyle,
  restTextProps,
  overrideTextStyle,
  overrideContainerStyle,
}) => {
  const theme = useTheme();
  const { translate } = useTranslate();
  const text = translate('components.table.noData');

  const { container, textStyle } = useMemo(() => styles(theme), [theme]);

  return (
    <View style={[container, overrideContainerStyle]}>
      <CustomImage
        source={imagesObject?.logo}
        overrideStyle={{ width: scale(512 / 3), height: verticalScale(443 / 3) }}
      />
      <CustomText
        textFontStyle={overrideTextFontStyle ?? 'bodyMediumBold'}
        overrideStyle={[textStyle, overrideTextStyle]}
        text={overrideText || text}
        {...restTextProps}
      />
    </View>
  );
};

export default ListEmpty;
