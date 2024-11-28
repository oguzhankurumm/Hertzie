import { useMemo } from 'react';
import { ImageBackground, View } from 'react-native';

import imagesObject from '_assets/images/imagesObject';
import { CustomButton, CustomText, CustomTextInput } from '_atoms';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { AppWrapper } from '_organisms';
import globalStyles from '_styles/globalStyles';
import { verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './CreatePlaylistName.style';
import { useCreatePlaylistName } from './hooks/useCreatePlaylistName.hook';

const CreatePlaylistName = () => {
  const theme = useTheme();

  const { playlistName, setPlaylistName } = useCreatePlaylistName();

  const {
    container,
    playlistInputContainer,
    playlistNameInputContainerStyle,
    playlistNameInputStyle,
    buttonsContainer,
    cancelButton,
    createButton,
  } = useMemo(() => styles(theme), [theme]);

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
          text='Give your playlist a name'
          textFontStyle='semibold20'
          color={theme?.gray2}
        />
        <View style={playlistInputContainer}>
          <CustomTextInput
            inputValue={playlistName}
            handleChange={setPlaylistName}
            placeholder='Enter a playlist name'
            overrideContainerStyle={playlistNameInputContainerStyle}
            overrideInputStyle={playlistNameInputStyle}
          />
        </View>
        <View style={buttonsContainer}>
          <CustomButton
            title='CANCEL'
            overrideStyle={cancelButton}
            onPress={() => {
              NavigationServices.goBack();
            }}
          />
          <CustomButton
            title='CREATE'
            onPress={() => {
              NavigationServices.navigate(Scenes.playlistInside);
            }}
            overrideStyle={createButton}
          />
        </View>
      </ImageBackground>
    </AppWrapper>
  );
};

export default CreatePlaylistName;
