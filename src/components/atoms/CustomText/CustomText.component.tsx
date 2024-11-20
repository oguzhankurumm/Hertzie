import { FC, useMemo } from 'react';
import { Pressable, Text } from 'react-native';

import globalStyles from '_styles/globalStyles';
import { useTheme } from '_styles/theming';
import { TextStyle } from '_styles/typography';

import styles from './CustomText.style';
import { CustomTextPropsTypes } from './CustomText.types';

const CustomText: FC<CustomTextPropsTypes> = props => {
  const theme = useTheme();

  const { text, color, fontWeight, onPress, overrideStyle, restTextProps, testId, textFontStyle } =
    props;

  if (!restTextProps?.onPress) {
    return (
      <TextComponent
        text={text}
        color={color}
        onPress={onPress}
        overrideStyle={overrideStyle}
        restTextProps={restTextProps}
        testId={testId}
        textFontStyle={textFontStyle}
        fontWeight={fontWeight}
      />
    );
  }

  return (
    <Pressable style={globalStyles(theme)?.flexOne} onPress={onPress || restTextProps?.onPress}>
      <TextComponent
        text={text}
        color={color}
        onPress={onPress}
        overrideStyle={overrideStyle}
        restTextProps={restTextProps}
        testId={testId}
        textFontStyle={textFontStyle}
        fontWeight={fontWeight}
      />
    </Pressable>
  );
};

export default CustomText;

const TextComponent: FC<CustomTextPropsTypes> = ({
  color,
  fontWeight,
  onPress,
  overrideStyle,
  restTextProps,
  textFontStyle = 'body400',
  text,
}) => {
  const theme = useTheme();
  const { textStyle } = useMemo(() => styles(theme), [theme]);

  return (
    <Text
      {...restTextProps}
      style={[
        textStyle,
        textFontStyle && (TextStyle as Record<string, any>)[textFontStyle],
        overrideStyle,
        color && { color },
        fontWeight && { fontWeight },
      ]}
      onPress={onPress || restTextProps?.onPress}
      allowFontScaling={false}>
      {text}
    </Text>
  );
};
