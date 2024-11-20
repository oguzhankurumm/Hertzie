import { FC, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

import { IconChevronLeft, IconX } from '_assets/icons/svgsObject';
import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import styles from './CustomModal.style';
import { CustomModalPropsTypes } from './CustomModal.types';

const CustomModal: FC<CustomModalPropsTypes> = ({
  onHideModal = () => {},
  modalVisible = false,
  children,
  presentation = 'overFullScreen',
  animationIn = 'slideInUp',
  animationOut = 'slideInDown',
  animationInTiming = 300,
  animationOutTiming = 300,
  hasBackdrop,
  backdropColor,
  backdropOpacity = 0.5,
  onBackdropPress,
  onBackButtonPress,
  hideBackButton = false,
  hideCloseButton = false,
  overrideModalContainerStyle,
  overrideHeaderStyle,
  showIconsContainer = true,
  overrideIconsContainerStyle,
  overrideCloseIconContainer,
  overrideBackIconContainer,
  overrideContentContainerStyle,
  testId = '',
}) => {
  const theme = useTheme();

  const {
    modalView,
    headerView,
    iconsContainer,
    closeIconContainer,
    backIconContainer,
    contentContainer,
  } = useMemo(() => styles(theme), [theme]);

  return (
    <Modal
      {...getAutomationTestingProp(testId)}
      isVisible={modalVisible}
      presentationStyle={presentation}
      animationIn={animationIn}
      animationInTiming={animationInTiming}
      animationOut={animationOut}
      animationOutTiming={animationOutTiming}
      backdropColor={backdropColor}
      hasBackdrop={hasBackdrop}
      backdropOpacity={backdropOpacity}
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackButtonPress}>
      <View style={[modalView, overrideModalContainerStyle]}>
        <View style={[headerView, overrideHeaderStyle]}>
          {showIconsContainer && (
            <View style={[iconsContainer, overrideIconsContainerStyle]}>
              {!hideBackButton && (
                <TouchableOpacity
                  onPress={onBackButtonPress}
                  style={[backIconContainer, overrideBackIconContainer]}>
                  <IconChevronLeft size={scale(24)} stroke={scale(1.5)} color={theme?.gray[400]} />
                </TouchableOpacity>
              )}
              {!hideCloseButton && (
                <TouchableOpacity
                  onPress={onHideModal}
                  style={[closeIconContainer, overrideCloseIconContainer]}>
                  <IconX size={scale(24)} stroke={scale(1.5)} color={theme?.gray[400]} />
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
        <View style={[contentContainer, overrideContentContainerStyle]}>{children}</View>
      </View>
    </Modal>
  );
};

export default CustomModal;
