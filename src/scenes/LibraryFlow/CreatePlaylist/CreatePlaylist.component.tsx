import { useMemo } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

import imagesObject from '_assets/images/imagesObject';
import { CustomImage, CustomText } from '_atoms';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { AppWrapper } from '_organisms';
import globalStyles from '_styles/globalStyles';
import { verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './CreatePlaylist.style';
import { useCreatePlaylist } from './hooks/useCreatePlaylist.hook';

const CreatePlaylist = () => {
  const theme = useTheme();

  const {} = useCreatePlaylist();

  const {
    container,
    itemTypesContainer,
    playlistTypeItemCardImageContainer,
    playlistTypeItemCardImage,
    playlistTypeItemContainer,
  } = useMemo(() => styles(theme), [theme]);

  // eslint-disable-next-line react/no-unstable-nested-components
  const PlaylistTypeItemCard = ({ title, image }: any) => {
    return (
      <TouchableOpacity
        onPress={() => NavigationServices.navigate(Scenes.createPlaylistName)}
        style={playlistTypeItemContainer}
        activeOpacity={0.8}>
        <View style={playlistTypeItemCardImageContainer}>
          <CustomImage
            source={image}
            overrideStyle={playlistTypeItemCardImage}
            overrideResizeMode='contain'
          />
        </View>
        <CustomText text={title} />
      </TouchableOpacity>
    );
  };

  return (
    <AppWrapper overrideStyle={container}>
      <ImageBackground
        source={imagesObject?.blurBackground}
        resizeMode='cover'
        style={[
          globalStyles(theme)?.flexOne,
          globalStyles(theme)?.fullyCentered,
          { paddingBottom: verticalScale(72) },
        ]}
        imageStyle={globalStyles(theme)?.flexOne}>
        <CustomText
          text='Choose the playlist type'
          textFontStyle='semibold20'
          color={theme?.gray2}
        />
        <View style={itemTypesContainer}>
          <PlaylistTypeItemCard title='Radio' type='radio' image={imagesObject?.radio} />
          <PlaylistTypeItemCard title='Music' type='music' image={imagesObject?.music} />
          <PlaylistTypeItemCard title='Video' type='video' image={imagesObject?.video} />
        </View>
      </ImageBackground>
    </AppWrapper>
  );
};

export default CreatePlaylist;
