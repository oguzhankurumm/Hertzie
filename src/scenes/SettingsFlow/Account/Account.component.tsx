import { useCallback, useMemo } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import { CustomText, Divider } from '_atoms';
import { InnerHeader } from '_molecules';
import { AppWrapper } from '_organisms';
import { verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './Account.style';
import { useAccount } from './hooks/useAccount.hook';

const Account = () => {
  const theme = useTheme();

  const { container, listStyle, actionItemContainer, actionItem } = useMemo(
    () => styles(theme),
    [theme]
  );
  return (
    <AppWrapper overrideStyle={container} removeSafeAreaView>
      <InnerHeader title='Account' />
      <ScrollView contentContainerStyle={listStyle} showsVerticalScrollIndicator={false}>
        <CustomText text='Account Details' textFontStyle='semibold20' color={theme?.gray2} />
        <View style={actionItemContainer}>
          <TouchableOpacity activeOpacity={0.8} style={actionItem}>
            <CustomText text='Username' textFontStyle='semibold15' color={theme?.gray2} />
            <CustomText
              text='thisisyourusername111'
              textFontStyle='regular13'
              color={theme?.gray6}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={actionItem}>
            <CustomText text='Email' textFontStyle='semibold15' color={theme?.gray2} />
            <CustomText
              text='thisisyouremail@email.com'
              textFontStyle='regular13'
              color={theme?.gray6}
            />
          </TouchableOpacity>
        </View>
        <Divider
          overrideStyle={{ backgroundColor: theme?.gray6, marginVertical: verticalScale(30) }}
        />
        <CustomText text='Your Plan' textFontStyle='semibold20' color={theme?.gray2} />
        <View style={actionItemContainer}>
          <TouchableOpacity activeOpacity={0.8} style={actionItem}>
            <CustomText text='Premium' textFontStyle='semibold15' color={theme?.gray2} />
            <CustomText
              text=' Monthly subscription'
              textFontStyle='regular13'
              color={theme?.gray6}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={actionItem}>
            <CustomText text='Billing' textFontStyle='semibold15' color={theme?.gray2} />
            <CustomText text='See details' textFontStyle='regular13' color={theme?.gray6} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={actionItem}>
            <CustomText
              text='Cancel Subscription'
              textFontStyle='semibold15'
              color={theme?.gray2}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </AppWrapper>
  );
};

export default Account;
