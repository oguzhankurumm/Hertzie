/* eslint-disable react/no-unstable-nested-components */
import { useMemo } from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import iconsObject from '_assets/icons/iconsObject';
import { CustomButton, CustomImage, CustomText } from '_atoms';
import { SortByBottomSheet } from '_modals';
import { InnerHeader, PlaylistCard, SearchBar } from '_molecules';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { AppWrapper } from '_organisms';
import { useHome } from '_scenes/HomeFlow/Home/hooks/useHome.hook';
import { scale, verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './AddToPlaylist.style';
import { useAddToPlaylist } from './hooks/useAddToPlaylist.hook';

const AddToPlaylist = () => {
  const theme = useTheme();

  const { SortByBottomSheetRef, onSortByPress } = useAddToPlaylist();
  const { playlistItems } = useHome();

  const {
    container,
    innerHeaderStyle,
    searchBarContainerStyle,
    createButton,
    doneButton,
    headerStyle,
    headerSort,
    headerIcon,
  } = useMemo(() => styles(theme), [theme]);

  return (
    <BottomSheetModalProvider>
      <AppWrapper overrideStyle={container}>
        <InnerHeader
          showBackIcon
          swipeDirection='bottom'
          title='Add to Playlist'
          showSearchIcon={false}
          overrideContainerStyle={innerHeaderStyle}
        />
        <View style={{ flex: 1, paddingHorizontal: scale(12) }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: verticalScale(72) }}
            nestedScrollEnabled>
            <CustomButton
              title='New Playlist'
              overrideStyle={createButton}
              overrideFontStyle='semibold11'
              onPress={() => {
                NavigationServices.navigate(Scenes.createPlaylistName);
              }}
            />
            <SearchBar
              placeholder='FIND PLAYLIST'
              overrideContainerStyle={searchBarContainerStyle}
            />
            <View style={[headerStyle, { marginBottom: verticalScale(8) }]}>
              <CustomText text='Saved In' textFontStyle='semibold13' color={theme?.gray2} />
              <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <CustomText text='Clear all' textFontStyle='semibold11' color={theme?.purple} />
              </TouchableOpacity>
            </View>
            <FlatList
              nestedScrollEnabled
              data={playlistItems.slice(0, 2)}
              keyExtractor={item => item.id}
              horizontal={false}
              scrollEnabled={false}
              onEndReachedThreshold={0.5}
              onEndReached={() => {}}
              ListFooterComponent={<View style={{ height: verticalScale(16) }} />}
              ItemSeparatorComponent={() => <View style={{ height: verticalScale(16) }} />}
              renderItem={({ item, index }) => (
                <PlaylistCard
                  key={item.id}
                  showPinIcon={index === 0}
                  type='list'
                  selectable
                  selected={index === 0}
                  toggleSelected={() => {}}
                  {...item}
                />
              )}
            />
            <TouchableOpacity style={headerSort} activeOpacity={0.8} onPress={onSortByPress}>
              <CustomImage source={iconsObject?.menuFill} overrideStyle={headerIcon} />
              <CustomText text='Most Relevant' textFontStyle='semibold13' color={theme?.gray2} />
            </TouchableOpacity>
            <FlatList
              nestedScrollEnabled
              data={playlistItems}
              keyExtractor={item => item.id}
              horizontal={false}
              scrollEnabled={false}
              onEndReachedThreshold={0.5}
              onEndReached={() => {}}
              ListFooterComponent={<View style={{ height: verticalScale(16) }} />}
              ItemSeparatorComponent={() => <View style={{ height: verticalScale(16) }} />}
              renderItem={({ item }) => (
                <PlaylistCard
                  key={item.id}
                  type='list'
                  selectable
                  toggleSelected={() => {}}
                  {...item}
                />
              )}
            />
          </ScrollView>
          <CustomButton
            title='Done'
            overrideStyle={doneButton}
            overrideFontStyle='semibold14'
            onPress={() => {
              NavigationServices.goBack();
            }}
          />
        </View>
        <SortByBottomSheet bottomSheetRef={SortByBottomSheetRef} on />
      </AppWrapper>
    </BottomSheetModalProvider>
  );
};

export default AddToPlaylist;
