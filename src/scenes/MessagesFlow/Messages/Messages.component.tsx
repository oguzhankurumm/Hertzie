import { useMemo } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import { CustomImage, CustomText } from '_atoms';
// import { useTranslate } from '_hooks/useTranslate';
import { AppWrapper } from '_organisms';
import { verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './Messages.style';
import { useMessages } from './hooks/useMessages.hook';

const ItemSeparator = () => <View style={{ height: verticalScale(16) }} />;

const Messages = () => {
  const theme = useTheme();
  // const { translate } = useTranslate();

  const { dummyEventChatMessages } = useMessages();

  const { container, scrollView } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container}>
      <FlatList
        data={dummyEventChatMessages}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => {}} tintColor={theme?.pink[600]} />
        }
        contentContainerStyle={scrollView}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <CustomText text={item.message} />}
      />
    </AppWrapper>
  );
};

export default Messages;
