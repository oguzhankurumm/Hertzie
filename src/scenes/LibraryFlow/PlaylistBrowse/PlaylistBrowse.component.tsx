import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import { CustomButton, CustomImage } from '_atoms';
import { InnerHeader } from '_molecules';
import { AppWrapper } from '_organisms';
import globalStyles from '_styles/globalStyles';
import { scale, verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './PlaylistBrowse.style';
import { usePlaylistBrowse } from './hooks/usePlaylistBrowse.hook';

const PlaylistBrowse = () => {
  const theme = useTheme();

  const { categories } = usePlaylistBrowse();

  const { container, innerHeaderStyle, buttonStyle } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container}>
      <InnerHeader
        showBackIcon
        title='Add songs to play queue'
        overrideTitleFontStyle='semibold14'
        titlePosition='left'
        showSearchIcon={false}
        overrideContainerStyle={innerHeaderStyle}
      />
      <ScrollView
        style={globalStyles(theme)?.flexOne}
        contentContainerStyle={{ paddingBottom: verticalScale(96) }}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            gap: scale(12),
            marginTop: verticalScale(16),
            paddingHorizontal: scale(10),
          }}>
          {categories.map((category: { title: string; onPress: () => void }) => (
            <CustomButton
              key={category.title}
              title={category.title}
              overrideStyle={buttonStyle}
              overrideFontStyle='semibold12'
              overrideTitleStyle={{ color: theme?.gray2 }}
              onPress={category.onPress}
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
