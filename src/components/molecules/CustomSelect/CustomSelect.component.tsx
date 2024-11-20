import { FC, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';

import { IconTrash } from '_assets/icons/svgsObject';
import { translateFunc } from '_locales/localesHelpers';
import { scale, verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import CustomText from '../../atoms/CustomText/CustomText.component';
import { styles } from './CustomSelect.style';
import { CustomSelectPropsTypes } from './CustomSelect.types';

const CustomSelect: FC<CustomSelectPropsTypes> = ({
  title = '',
  required = false,
  value,
  items = [],
  testId = '',
  errorText = '',
  // placeholder = {},
  onFocus = () => {},
  overrideContainerStyle,
  overrideTitleStyle = {},
  onValueSelected = () => {},
  overrideErrorTextStyle = {},
  disabled,
  dropdownPosition = 'bottom',
}) => {
  const theme = useTheme();

  const {
    container,
    dropdownStyle,
    placeholderStyle,
    selectedTextStyle,
    itemTextStyle,
    titleContainer,
    titleStyle,
    errorTextStyle,
    selectedStyle,
  } = useMemo(() => styles(theme), [theme]);

  const renderErrorArea = () => {
    return <CustomText overrideStyle={[errorTextStyle, overrideErrorTextStyle]} text={errorText} />;
  };

  return (
    <View style={[container, overrideContainerStyle]} {...getAutomationTestingProp(testId)}>
      {title && (
        <View style={titleContainer}>
          <CustomText
            text={title}
            textFontStyle='bodyMedium'
            overrideStyle={[titleStyle, overrideTitleStyle]}
          />
          {required && (
            <CustomText
              text='*'
              textFontStyle='bodyMedium'
              overrideStyle={[
                titleStyle,
                overrideTitleStyle,
                { marginLeft: scale(4), color: theme?.danger[500] },
              ]}
            />
          )}
        </View>
      )}
      <MultiSelect
        disable={disabled}
        activeColor={theme?.gray[500]}
        style={[
          dropdownStyle,
          {
            borderColor: errorText ? theme?.danger[500] : dropdownStyle?.borderColor,
          },
          disabled && {
            backgroundColor: theme?.gray[100],
          },
        ]}
        placeholderStyle={[
          placeholderStyle,
          disabled && {
            color: theme?.gray[400],
          },
        ]}
        selectedTextStyle={selectedTextStyle}
        itemTextStyle={itemTextStyle}
        itemContainerStyle={{
          backgroundColor: theme?.background[900],
        }}
        containerStyle={{ borderColor: theme?.gray[600] }}
        data={items}
        maxHeight={verticalScale(250)}
        labelField='label'
        valueField='value'
        placeholder={translateFunc('components.customSelect.select')}
        value={value}
        onFocus={() => onFocus(true)}
        onBlur={() => onFocus(false)}
        dropdownPosition={dropdownPosition}
        onChange={item => {
          onFocus(false);
          onValueSelected(item);
        }}
        renderSelectedItem={(item, unSelect) => (
          <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
            <View style={selectedStyle}>
              <CustomText text={item.label} textFontStyle='bodyRegular' />
              <IconTrash size={scale(14)} color={theme?.gray[600]} stroke={scale(1.5)} />
            </View>
          </TouchableOpacity>
        )}
      />
      {errorText ? renderErrorArea() : null}
    </View>
  );
};

export default CustomSelect;
