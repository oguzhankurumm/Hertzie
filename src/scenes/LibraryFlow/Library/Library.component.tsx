import { useMemo } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import iconsObject from '_assets/icons/iconsObject';
import { CustomClickableIcon, CustomImage, CustomText } from '_atoms';
import { InnerHeader, PlaylistCard, SelectableTabs, VideoCard } from '_molecules';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { AppWrapper, MediaList } from '_organisms';
import { useHome } from '_scenes/HomeFlow/Home/hooks/useHome.hook';
import { SongType } from '_stores/songsStore';
import globalStyles from '_styles/globalStyles';
import { scale, verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './Library.style';
import { LibraryShownType, useLibrary } from './hooks/useLibrary.hook';

const Library = () => {
  const theme = useTheme();

  const { videoItems, playlistItems } = useHome();
  const {
    songs,
    pagerRef,
    tabs,
    selectedTab,
    onTabPress,
    shownType,
    setShownType,
    showSortModal,
    setShowSortModal,
  } = useLibrary();

  const {
    container,
    innerHeaderStyle,
    listStyle,
    headerStyle,
    headerLeft,
    headerIcon,
    tabsContainer,
  } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container}>
      <InnerHeader
        title='Your Library'
        titlePosition='left'
        showBackIcon
        showAddIcon
        onAddIconPress={() => NavigationServices.navigate(Scenes.createPlaylist)}
        overrideContainerStyle={innerHeaderStyle}
      />
      <SelectableTabs
        tabs={tabs}
        selectedTab={selectedTab}
        onTabPress={onTabPress}
        bounces={false}
        overrideContainerStyle={tabsContainer}
      />
      <View style={headerStyle}>
        <TouchableOpacity style={headerLeft} activeOpacity={0.8} onPress={() => {}}>
          <CustomImage source={iconsObject?.sortOutline2} overrideStyle={headerIcon} />
          <CustomText text='Recents' textFontStyle='semibold13' color={theme?.gray2} />
        </TouchableOpacity>
        {selectedTab !== 'Radios' && (
          <CustomClickableIcon
            iconName={shownType === LibraryShownType.Grid ? 'list' : 'grid'}
            overrideIconStyle={[headerIcon, { tintColor: theme?.white, paddingLeft: scale(48) }]}
            onPress={() =>
              setShownType(
                shownType === LibraryShownType.Grid ? LibraryShownType.List : LibraryShownType.Grid
              )
            }
          />
        )}
      </View>
      <PagerView
        onPageSelected={({ nativeEvent }) => onTabPress(tabs[nativeEvent.position])}
        ref={pagerRef}
        pageMargin={scale(12)}
        style={globalStyles(theme)?.flexOne}
        initialPage={0}
        scrollEnabled>
        <View key='0' style={listStyle}>
          {shownType === 'grid' && (
            <FlatList
              data={playlistItems}
              renderItem={({ item, index }) => (
                <PlaylistCard
                  key={item.id}
                  showPinIcon={index === 0}
                  type='grid'
                  {...item}
                  overrideContainerStyle={{
                    marginBottom: verticalScale(16),
                  }}
                />
              )}
              columnWrapperStyle={{ gap: scale(20) }}
              keyExtractor={item => item.id}
              numColumns={3}
              horizontal={false}
              onEndReachedThreshold={0.5}
              onEndReached={() => {}}
            />
          )}
          {shownType === 'list' && (
            <FlatList
              data={playlistItems}
              renderItem={({ item, index }) => (
                <PlaylistCard
                  key={item.id}
                  showPinIcon={index === 0}
                  type='list'
                  {...item}
                  overrideContainerStyle={{ marginBottom: verticalScale(16) }}
                />
              )}
              keyExtractor={item => item.id}
              horizontal={false}
              onEndReachedThreshold={0.5}
              onEndReached={() => {}}
              ListFooterComponent={<View style={{ height: verticalScale(16) }} />}
            />
          )}
        </View>
        <View key='1' style={listStyle}>
          {shownType === 'grid' && (
            <FlatList
              data={videoItems}
              renderItem={({ item }) => (
                <VideoCard
                  key={item.id}
                  type='grid'
                  {...item}
                  overrideContainerStyle={{ marginBottom: verticalScale(16) }}
                />
              )}
              columnWrapperStyle={{ gap: scale(20) }}
              keyExtractor={item => item.id}
              numColumns={2}
              horizontal={false}
              onEndReachedThreshold={0.5}
              onEndReached={() => {}}
              ListFooterComponent={<View style={{ height: verticalScale(16) }} />}
            />
          )}
          {shownType === 'list' && (
            <FlatList
              data={videoItems}
              renderItem={({ item }) => (
                <VideoCard
                  key={item.id}
                  type='list'
                  {...item}
                  overrideContainerStyle={{ marginBottom: verticalScale(16) }}
                />
              )}
              keyExtractor={item => item.id}
              horizontal={false}
              onEndReachedThreshold={0.5}
              onEndReached={() => {}}
              ListFooterComponent={<View style={{ height: verticalScale(16) }} />}
            />
          )}
        </View>
        <View key='2' style={listStyle}>
          <MediaList
            data={songs!.filter(radio => radio.type === SongType.Radio)}
            type={SongType.Radio}
            mode={shownType}
            showHeader={false}
            onItemPress={() => {}}
            showMoreIcon={false}
          />
        </View>
      </PagerView>
    </AppWrapper>
  );
};

export default Library;
