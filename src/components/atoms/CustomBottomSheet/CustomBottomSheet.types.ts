import { FC, ReactNode, RefAttributes, RefObject } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SharedValue } from 'react-native-reanimated';

import { BottomSheetBackdropProps, BottomSheetProps } from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

import MainTypes from '_types/index';

type CustomBottomSheetPropsTypes = MainTypes & {
  scrollable?: boolean;
  refProp?: RefObject<BottomSheetMethods>;
  children?: ReactNode;
  modalProps?: Partial<BottomSheetProps> & RefAttributes<BottomSheetMethods>;
  index?: number;
  overrideStyle?: StyleProp<ViewStyle>;
  overrideModalStyle?: StyleProp<ViewStyle>;
  overrideHandleStyle?: StyleProp<ViewStyle>;
  snapPoints: Array<string | number> | SharedValue<Array<string | number>>;
  enableOverDrag?: boolean;
  enablePanDownToClose?: boolean;
  enableHandlePanningGesture?: boolean;
  enableContentPanningGesture?: boolean;
  backdropComponent?: FC<BottomSheetBackdropProps>;
};

export type { CustomBottomSheetPropsTypes };
