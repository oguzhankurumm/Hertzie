import { FC, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import { IconX } from '_assets/icons/svgsObject';
import { CustomImage } from '_atoms';
import { useTranslate } from '_hooks/useTranslate';
import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import CustomTextInput from '../../atoms/CustomTextInput/CustomTextInput.component';
import styles from './SearchBar.style';
import { SearchBarPropsTypes } from './SearchBar.types';

const searchIcon = iconsObject?.search;

const SearchBar: FC<SearchBarPropsTypes> = ({
  overrideContainerStyle,
  overrideInputStyle,
  searchHandler = () => {},
  overrideSearchInputContainerStyle,
  overridePlaceholderTextColor,
  inputValue,
  placeholder,
  restSearchInputProps,
  onSubmitSearch = () => {},
  showCloseButton = false,
  goBackHandler = () => {},
  maxLength,
}) => {
  const theme = useTheme();
  const { translate } = useTranslate();
  const { container, inputContainer, inputStyle, iconStyle, closeButton } = useMemo(
    () => styles(theme),
    [theme]
  );

  const placeholderTextColor = useMemo(
    () => overridePlaceholderTextColor ?? theme?.gray[400],
    [overridePlaceholderTextColor, theme?.gray]
  );

  return (
    <View style={[overrideContainerStyle, container]}>
      <CustomTextInput
        inputValue={inputValue}
        handleChange={searchHandler}
        overrideContainerStyle={[inputContainer, overrideSearchInputContainerStyle]}
        overridePlaceholderTextColor={placeholderTextColor}
        placeholder={placeholder ?? translate('components.searchBar.placeholder')}
        overrideInputStyle={[inputStyle, overrideInputStyle]}
        rightChild={
          <CustomImage source={searchIcon} overrideResizeMode='contain' overrideStyle={iconStyle} />
        }
        onSubmitEditing={onSubmitSearch}
        restTextInputProps={restSearchInputProps}
        maxLength={maxLength}
      />
      {showCloseButton && (
        <TouchableOpacity activeOpacity={0.8} onPress={goBackHandler} style={closeButton}>
          <IconX size={scale(16)} color={theme?.gray[400]} stroke={scale(1.5)} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
