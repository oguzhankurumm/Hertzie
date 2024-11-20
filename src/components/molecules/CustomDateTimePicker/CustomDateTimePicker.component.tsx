import { FC, useMemo, useRef, useState } from 'react';
import { Keyboard, Platform, ScrollView, TouchableOpacity, View } from 'react-native';

import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

import { IconCalendar, IconClock } from '_assets/icons/svgsObject';
import { CustomBottomSheet, CustomText } from '_atoms';
import { translateFunc } from '_locales/localesHelpers';
import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';
import { getAutomationTestingProp, isNullOrEmpty } from '_utils/helpers';

import styles from './CustomDateTimePicker.style';
import { CustomDateTimePickerPropsTypes } from './CustomDateTimePicker.types';

const CustomDateTimePicker: FC<CustomDateTimePickerPropsTypes> = ({
  title,
  required = false,
  value,
  hintText,
  errorText,
  customFormat,
  testId = '',
  onValueSelected,
  minimumDate,
  maximumDate,
  mode = 'date',
  disabled = false,
  snapPoints = '40%',
  overrideModalStyle,
  overrideValueStyle,
  overrideTitleStyle,
  overrideHandleStyle,
  androidMode = 'date',
  overrideHintTextStyle,
  overrideErrorTextStyle,
  overrideContainerStyle,
  overrideItemsWrapperStyle,
  overrideItemContainerStyle,
  placeholder = translateFunc('common.select'),
}) => {
  const theme = useTheme();

  const {
    titleStyle,
    titleContainer,
    noShadowStyle,
    hintTextStyle,
    errorTextStyle,
    containerStyle,
    valueTextStyle,
    modalHandleStyle,
    placeholderStyle,
    itemsWrapperStyle,
    itemContainerStyle,
    modalContainerStyle,
    headerContainerStyle,
  } = useMemo(() => styles(theme, !!errorText, disabled), [errorText, disabled, theme]);

  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(value ? new Date(value) : new Date());
  const modalRef = useRef(null);

  const convertDate = (val: Date) => (val ? new Date(val) : null);

  const formattedTime = value ? format(new Date(value), 'h:mm a') : 'N/A';
  const onChangeAndroid = (selectedDate: Date) => {
    const splitDate = convertDate(selectedDate);
    const newDate = androidMode === 'date' ? splitDate : selectedDate;
    onValueSelected && onValueSelected(newDate as any);
    DateTimePickerAndroid.dismiss;
  };

  const showAndroidDateTimePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      minimumDate,
      maximumDate,
      mode: androidMode,
      display: 'spinner',
      onTouchCancel: () => {
        DateTimePickerAndroid.dismiss;
      },
      onChange: (_, selectedDate) => {
        onChangeAndroid(selectedDate as Date);
      },
    });
  };

  return (
    <View {...getAutomationTestingProp(testId)}>
      {!isNullOrEmpty(title) && (
        <View style={titleContainer}>
          <CustomText
            text={title || ''}
            testId={`${testId}.title`}
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

      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.8}
        style={[containerStyle, overrideContainerStyle]}
        onPress={() => {
          Keyboard.dismiss();
          if (Platform.OS === 'ios') {
            (modalRef?.current as any)?.expand();
            setIsOpen(true);
          } else {
            showAndroidDateTimePicker();
          }
        }}>
        <CustomText
          testId={`${testId}.value`}
          restTextProps={{ numberOfLines: 1 }}
          text={Platform.select({
            ios: value ? format(value, customFormat || 'dd.MM.yyyy') : placeholder,
            android: value
              ? androidMode === 'time'
                ? formattedTime
                : format(value, customFormat || 'dd.MM.yyyy')
              : placeholder,
          })}
          textFontStyle='bodyMediumRegular'
          overrideStyle={[
            valueTextStyle,
            isNullOrEmpty(value) && placeholderStyle,
            overrideValueStyle,
          ]}
        />
        <TouchableOpacity testID={`${testId}.icon`}>
          {Platform.OS === 'android' && androidMode === 'time' ? (
            <IconClock size={scale(20)} color={theme?.gray[400]} stroke={scale(1.5)} />
          ) : (
            <IconCalendar size={scale(20)} color={theme?.gray[400]} stroke={scale(1.5)} />
          )}
        </TouchableOpacity>
      </TouchableOpacity>
      {(!isNullOrEmpty(errorText) || !isNullOrEmpty(hintText)) && (
        <CustomText
          testId={`${testId}.hint`}
          text={!isNullOrEmpty(errorText) ? errorText : hintText}
          overrideStyle={
            !isNullOrEmpty(errorText)
              ? [errorTextStyle, overrideErrorTextStyle]
              : [hintTextStyle, overrideHintTextStyle]
          }
        />
      )}
      <CustomBottomSheet
        refProp={modalRef}
        snapPoints={[snapPoints]}
        testId={`${testId}.modal`}
        modalProps={{ onClose: () => setIsOpen(false) }}
        overrideHandleStyle={[modalHandleStyle, overrideHandleStyle]}
        overrideModalStyle={[modalContainerStyle, !isOpen && noShadowStyle, overrideModalStyle]}>
        <View style={[itemsWrapperStyle, overrideItemsWrapperStyle]}>
          <View style={headerContainerStyle}>
            <TouchableOpacity onPress={() => (modalRef?.current as any)?.close()}>
              <CustomText
                text={translateFunc('common.cancel')}
                textFontStyle='bodyMediumSemibold'
                overrideStyle={{ color: theme?.gray[400] }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onValueSelected && onValueSelected(convertDate(date as Date) as any);
                (modalRef?.current as any)?.close();
              }}>
              <CustomText
                text={translateFunc('common.done')}
                textFontStyle='bodyMediumSemibold'
                overrideStyle={{ color: theme?.gray[400] }}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            indicatorStyle='white'
            contentContainerStyle={[itemContainerStyle, overrideItemContainerStyle]}>
            {Platform.OS === 'ios' && (
              <DateTimePicker
                testID={`${testId}.dateTimePicker`}
                themeVariant={theme?.title === 'dark' ? 'dark' : 'light'}
                value={date}
                maximumDate={maximumDate || new Date(Date.now())}
                display='spinner'
                mode={mode}
                onChange={(_, selectedDate) => {
                  setDate(selectedDate as Date);
                }}
              />
            )}
          </ScrollView>
        </View>
      </CustomBottomSheet>
    </View>
  );
};

export default CustomDateTimePicker;
