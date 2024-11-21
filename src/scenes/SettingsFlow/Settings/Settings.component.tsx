import { useCallback, useMemo } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { CustomText } from '_atoms';
import { InnerHeader } from '_molecules';
import { AppWrapper } from '_organisms';
import { verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './Settings.style';
import { useSettings } from './hooks/useSettings.hook';

const Settings = () => {
  const theme = useTheme();

  const { container, listStyle } = useMemo(() => styles(theme), [theme]);
  const { settingsItems } = useSettings();

  const ItemSeparatorComponent = useCallback(
    () => <View style={{ height: verticalScale(26) }} />,
    []
  );

  return (
    <AppWrapper overrideStyle={container} removeSafeAreaView>
      <InnerHeader title='Settings' />
      <FlatList
        data={settingsItems}
        contentContainerStyle={listStyle}
        keyExtractor={item => item.title}
        ItemSeparatorComponent={ItemSeparatorComponent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8} onPress={item.onPress}>
            <CustomText text={item.title} color={theme?.gray2} textFontStyle='semibold15' />
          </TouchableOpacity>
        )}
      />
    </AppWrapper>
  );
};

export default Settings;
