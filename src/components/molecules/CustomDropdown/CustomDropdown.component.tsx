import { FC, useMemo } from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import { translateFunc } from '_locales/localesHelpers';
import { scale, verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import CustomText from '../../atoms/CustomText/CustomText.component';
import { styles } from './CustomDropdown.style';
import { CustomDropdownPropsTypes } from './CustomDropdown.types';

const CustomDropdown: FC<CustomDropdownPropsTypes> = ({
  title = '',
  required = false,
  value = '',
  items = [],
  testId = '',
  errorText = '',
  placeholder = '',
  disabled,
  dropdownPosition = 'bottom',
  search = false,
  onFocus = () => {},
  overrideTitleStyle = {},
  onValueSelected = () => {},
  overrideErrorTextStyle = {},
  overrideContainerStyle,
  overridePlaceholderStyle,
}) => {
  const theme = useTheme();

  const {
    // container,
    dropdownStyle,
    placeholderStyle,
    selectedTextStyle,
    itemTextStyle,
    titleContainer,
    titleStyle,
    errorTextStyle,
    inputSearchStyle,
    containerStyle,
    itemContainerStyle,
  } = useMemo(() => styles(theme, !!errorText), [errorText, theme]);

  const renderErrorArea = () => {
    return (
      <CustomText
        overrideStyle={[errorTextStyle, overrideErrorTextStyle]}
        textFontStyle='bodyRegular'
        text={errorText}
      />
    );
  };

  return (
    <View {...getAutomationTestingProp(testId)} style={overrideContainerStyle}>
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
      <Dropdown
        disable={disabled}
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
          overridePlaceholderStyle,
          disabled && {
            color: theme?.gray[400],
          },
        ]}
        selectedTextStyle={[
          selectedTextStyle,
          disabled &&
            disabled && {
              color: theme?.gray[400],
            },
        ]}
        activeColor={theme?.gray[600]}
        itemContainerStyle={itemContainerStyle}
        containerStyle={containerStyle}
        data={items}
        maxHeight={verticalScale(200)}
        labelField='label'
        valueField='value'
        placeholder={placeholder}
        value={value}
        onFocus={() => onFocus(true)}
        onBlur={() => onFocus(false)}
        onChange={item => {
          // onFocus(false);
          onValueSelected(item.value, item.index);
        }}
        autoScroll
        dropdownPosition={dropdownPosition}
        search={search}
        searchPlaceholder={translateFunc('common.searchInputPlaceholder')}
        inputSearchStyle={inputSearchStyle}
        renderItem={item => (
          <CustomText
            text={item.label}
            textFontStyle='bodyMediumRegular'
            overrideStyle={itemTextStyle}
          />
        )}
      />
      {errorText ? renderErrorArea() : null}
    </View>
  );
};

export default CustomDropdown;
