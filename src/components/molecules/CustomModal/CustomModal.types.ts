import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ModalProps } from 'react-native-modal';

import MainTypes from '_types/index';

type CustomModalPropsTypes = MainTypes & {
  onHideModal?: () => void;
  modalVisible?: boolean;
  children?: ReactNode;
  presentation?: ModalProps['presentationStyle'];
  animationIn?: ModalProps['animationIn'];
  animationOut?: ModalProps['animationOut'];
  animationInTiming?: ModalProps['animationInTiming'];
  animationOutTiming?: ModalProps['animationOutTiming'];
  hasBackdrop?: ModalProps['hasBackdrop'];
  backdropColor?: ModalProps['backdropColor'];
  backdropOpacity?: ModalProps['backdropOpacity'];
  onBackdropPress?: ModalProps['onBackdropPress'];
  onBackButtonPress?: ModalProps['onBackButtonPress'];
  overrideModalContainerStyle?: StyleProp<ViewStyle>;
  overrideHeaderStyle?: StyleProp<ViewStyle>;
  showIconsContainer?: boolean;
  hideCloseButton?: boolean;
  hideBackButton?: boolean;
  overrideIconsContainerStyle?: StyleProp<ViewStyle>;
  overrideCloseIconContainer?: StyleProp<ViewStyle>;
  overrideBackIconContainer?: StyleProp<ViewStyle>;
  overrideContentContainerStyle?: StyleProp<ViewStyle>;
};

export type { CustomModalPropsTypes };
