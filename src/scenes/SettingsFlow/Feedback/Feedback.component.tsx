import { useMemo } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import imagesObject from '_assets/images/imagesObject';
import { CustomButton, CustomCheckBox, CustomImage, CustomText, CustomTextInput } from '_atoms';
import { InnerHeader } from '_molecules';
import { AppWrapper } from '_organisms';
import { useTheme } from '_styles/theming';
import { showToast } from '_utils/helpers';

import styles from './Feedback.style';
import { useFeedback } from './hooks/useFeedback.hook';

const Feedback = () => {
  const theme = useTheme();

  const { feedbackItems, text, setText } = useFeedback();

  const {
    container,
    listStyle,
    actionItemContainer,
    feedbackImageStyle,
    textRowContainer,
    textContainer,
    textCenter,
    inputStyle,
    imageButtonStyle,
    submitButtonStyle,
  } = useMemo(() => styles(theme), [theme]);
  return (
    <AppWrapper overrideStyle={container} removeSafeAreaView>
      <InnerHeader title='Feedback' showSearchIcon={false} />
      <ScrollView contentContainerStyle={listStyle} showsVerticalScrollIndicator={false}>
        <View style={textRowContainer}>
          <CustomImage source={imagesObject?.feedback} overrideStyle={feedbackImageStyle} />
          <CustomText
            text='Your thoughts matter.'
            highlightedTexts={['matter.']}
            textFontStyle='semibold23'
            color={theme?.white}
            overrideStyle={textCenter}
          />
        </View>
        <View style={textContainer}>
          <CustomText
            text='How can we make things better?'
            highlightedTexts={['better?']}
            textFontStyle='semibold23'
            color={theme?.white}
            overrideStyle={textCenter}
          />
        </View>
        <View style={actionItemContainer}>
          {feedbackItems.map(item => (
            <CustomCheckBox
              key={item.id}
              title={item.title}
              selected={item.active}
              onPress={() => {}}
            />
          ))}
        </View>
        <CustomTextInput
          placeholder='Please enter at least 6 characters'
          handleChange={setText}
          inputValue={text}
          overrideContainerStyle={inputStyle}
          restTextInputProps={{
            multiline: true,
            numberOfLines: 4,
          }}
        />
        <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
          <CustomImage source={iconsObject?.addImage} overrideStyle={imageButtonStyle} />
        </TouchableOpacity>
        <CustomButton
          title='Submit'
          overrideStyle={submitButtonStyle}
          onPress={() => {
            showToast({
              title: 'Feedback Submitted',
              type: 'success',
            });
          }}
        />
      </ScrollView>
    </AppWrapper>
  );
};

export default Feedback;
