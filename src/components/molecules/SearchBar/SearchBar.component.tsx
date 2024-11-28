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
const filterIcon = iconsObject?.filter;
const sortIcon = iconsObject?.sortOutline;

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
  showFilterButton = false,
  onFilterPress = () => {},
  showSortButton = false,
  onSortPress = () => {},
  maxLength,
}) => {
  const theme = useTheme();
  const { translate } = useTranslate();
  const {
    container,
    inputContainer,
    inputStyle,
    iconStyle,
    closeButton,
    iconButton,
    iconButtonImage,
    iconButtonImage20,
  } = useMemo(() => styles(theme), [theme]);

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
        leftChild={
          <CustomImage source={searchIcon} overrideResizeMode='contain' overrideStyle={iconStyle} />
        }
        onSubmitEditing={onSubmitSearch}
        restTextInputProps={restSearchInputProps}
        maxLength={maxLength}
      />
      {showCloseButton && (
        <TouchableOpacity activeOpacity={0.8} onPress={goBackHandler} style={closeButton}>
          <IconX size={scale(16)} color={theme?.gray6} stroke={scale(1.5)} />
        </TouchableOpacity>
      )}
      {showSortButton && (
        <TouchableOpacity activeOpacity={0.8} onPress={onSortPress} style={iconButton}>
          <CustomImage
            source={sortIcon}
            overrideResizeMode='contain'
            overrideStyle={iconButtonImage20}
          />
        </TouchableOpacity>
      )}
      {showFilterButton && (
        <TouchableOpacity activeOpacity={0.8} onPress={onFilterPress} style={iconButton}>
          <CustomImage
            source={filterIcon}
            overrideResizeMode='contain'
            overrideStyle={iconButtonImage}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
