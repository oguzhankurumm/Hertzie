import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import imagesObject from '_assets/images/imagesObject';
import { CustomButton, CustomImage, CustomText } from '_atoms';
import { InnerHeader } from '_molecules';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { AppWrapper } from '_organisms';
import globalStyles from '_styles/globalStyles';
import { scale, verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './PlaylistBrowse.style';
import { usePlaylistBrowse } from './hooks/usePlaylistBrowse.hook';

const PlaylistBrowse = () => {
  const theme = useTheme();

  const { categories } = usePlaylistBrowse();

  const { container, buttonStyle } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container}>
      <InnerHeader
        showBackIcon
        title='Add songs to play queue'
        overrideTitleFontStyle='semibold14'
        titlePosition='left'
        showSearchIcon={false}
        overrideContainerStyle={{
          paddingTop: verticalScale(24),
          backgroundColor: 'transparent',
          width: '100%',
        }}
      />
      <ScrollView
        style={globalStyles(theme)?.flexOne}
        contentContainerStyle={{ paddingBottom: verticalScale(30) }}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            gap: scale(20),
            marginTop: verticalScale(16),
            paddingHorizontal: scale(10),
          }}>
          {categories.map((category: any) => (
            <CustomButton
              key={category.id}
              title={category.title}
              overrideStyle={buttonStyle}
              overrideFontStyle='semibold13'
              overrideTitleStyle={{ color: theme?.gray2 }}
              onPress={() => NavigationServices.navigate(Scenes.playlistInside)}
              leftChild={
                <CustomImage
                  source={iconsObject?.search}
                  overrideStyle={{ width: scale(18), height: scale(18), tintColor: theme?.purple }}
                />
              }
            />
          ))}
        </View>
      </ScrollView>
    </AppWrapper>
  );
};

export default PlaylistBrowse;
