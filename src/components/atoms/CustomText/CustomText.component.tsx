import { FC, useId, useMemo } from 'react';
import { Pressable, Text } from 'react-native';

import globalStyles from '_styles/globalStyles';
import { useTheme } from '_styles/theming';
import { TextStyle } from '_styles/typography';

import styles from './CustomText.style';
import { CustomTextPropsTypes } from './CustomText.types';

const CustomText: FC<CustomTextPropsTypes> = props => {
  const theme = useTheme();

  const {
    text,
    color,
    highlightedTexts,
    highlightColor,
    onPress,
    overrideStyle,
    restTextProps,
    testId,
    textFontStyle,
  } = props;

  if (!restTextProps?.onPress) {
    return (
      <TextComponent
        text={text}
        color={color}
        highlightedTexts={highlightedTexts}
        highlightColor={highlightColor}
        onPress={onPress}
        overrideStyle={overrideStyle}
        restTextProps={restTextProps}
        testId={testId}
        textFontStyle={textFontStyle}
      />
    );
  }

  return (
    <Pressable style={globalStyles(theme)?.flexOne} onPress={onPress || restTextProps?.onPress}>
      <TextComponent
        text={text}
        color={color}
        highlightedTexts={highlightedTexts}
        highlightColor={highlightColor}
        onPress={onPress}
        overrideStyle={overrideStyle}
        restTextProps={restTextProps}
        testId={testId}
        textFontStyle={textFontStyle}
      />
    </Pressable>
  );
};

export default CustomText;

const TextComponent: FC<CustomTextPropsTypes> = ({
  color,
  highlightColor,
  onPress,
  overrideStyle,
  restTextProps,
  textFontStyle = 'body400',
  text,
  highlightedTexts = [],
}) => {
  const theme = useTheme();
  const { textStyle } = useMemo(() => styles(theme), [theme]);
  const textId = useId();

  const getHighlightedText = () => {
    if (highlightedTexts.length === 0) return text;

    if (typeof text === 'string') {
      const parts: { value: string; isHighlighted: boolean }[] = [];

      const splittedTexts = text.split(' ');

      for (let j = 0; j < splittedTexts.length; j++) {
        const splittedText = splittedTexts[j];

        if (highlightedTexts.includes(splittedText)) {
          parts.push({
            value: splittedText + (j === splittedTexts.length ? '' : ' '),
            isHighlighted: true,
          });
        } else {
          parts.push({
            value: splittedText + (j === splittedTexts.length ? '' : ' '),
            isHighlighted: false,
          });
        }
      }

      return parts.map((part, index) => (
        <Text
          // eslint-disable-next-line react/no-array-index-key
          key={textId + index}
          style={[part.isHighlighted ? { color: highlightColor ?? theme?.purple } : undefined]}>
          {part.value}
        </Text>
      ));
    }

    return text;
  };

  return (
    <Text
      {...restTextProps}
      style={[
        textStyle,
        textFontStyle && (TextStyle as Record<string, any>)[textFontStyle],
        overrideStyle,
        color && { color },
      ]}
      onPress={onPress || restTextProps?.onPress}
      allowFontScaling={false}>
      {getHighlightedText()}
    </Text>
  );
};
