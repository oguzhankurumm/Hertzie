import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import { CustomButton, CustomImage } from '_atoms';
import { InnerHeader } from '_molecules';
import { AppWrapper } from '_organisms';
import { useTheme } from '_styles/theming';

import styles, { getStyleByStatus } from './SelectLanguage.style';
import { useSelectLanguage } from './hooks/useSelectLanguage.hook';

const SelectLanguage = () => {
  const theme = useTheme();

  const { languageItems, onLanguageChange } = useSelectLanguage();

  const { container, listStyle, actionItemContainer, actionItemImage } = useMemo(
    () => styles(theme),
    [theme]
  );
  return (
    <AppWrapper overrideStyle={container} removeSafeAreaView>
      <InnerHeader title='Select Language' />
      <ScrollView contentContainerStyle={listStyle} showsVerticalScrollIndicator={false}>
        <View style={actionItemContainer}>
          {languageItems.map(item => (
            <CustomButton
              key={item.id}
              title={item.title}
              onPress={() => onLanguageChange(item.id)}
              overrideStyle={getStyleByStatus(theme, item.active)?.actionItemStyle}
              leftChild={
                <CustomImage
                  source={iconsObject[item.iconName as keyof typeof iconsObject]}
                  overrideStyle={actionItemImage}
                />
              }
            />
          ))}
        </View>
      </ScrollView>
    </AppWrapper>
  );
};

export default SelectLanguage;
