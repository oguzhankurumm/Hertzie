import { useMemo } from 'react';
import { View } from 'react-native';

import imagesObject from '_assets/images/imagesObject';
import { CustomButton, CustomImage, CustomText } from '_atoms';
import { InnerHeader } from '_molecules';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { AppWrapper } from '_organisms';
import { scale, verticalScale, width } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './PlaylistInside.style';
import { usePlaylistInside } from './hooks/usePlaylistInside.hook';

const PlaylistInside = () => {
  const theme = useTheme();

  const {} = usePlaylistInside();

  const {
    container,
    playlistTypeItemCardImageContainer,
    playlistTypeItemCardImage,
    playlistTypeItemContainer,
    buttonContainer,
    createButton,
  } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container}>
      <InnerHeader
        showBackIcon
        titlePosition='left'
        showSearchIcon={false}
        overrideContainerStyle={{
          paddingTop: verticalScale(24),
          backgroundColor: 'transparent',
          width: '100%',
        }}
      />
      <View
        style={{
          paddingHorizontal: scale(40),
        }}>
        <View style={playlistTypeItemContainer}>
          <View style={playlistTypeItemCardImageContainer}>
            <CustomImage
              source={imagesObject?.music}
              overrideStyle={playlistTypeItemCardImage}
              overrideResizeMode='contain'
            />
          </View>
          <CustomText text='Playlist Name' />
        </View>
        <View style={buttonContainer}>
          <CustomText
            text='Let’s start building your playlist'
            textFontStyle='semibold16'
            color={theme?.gray2}
            overrideStyle={{ textAlign: 'center' }}
          />
          <CustomButton
            title='Add to this playlist'
            overrideStyle={createButton}
            onPress={() => {
              NavigationServices.navigate(Scenes.playlistBrowse);
            }}
          />
        </View>
      </View>
    </AppWrapper>
  );
};

export default PlaylistInside;
