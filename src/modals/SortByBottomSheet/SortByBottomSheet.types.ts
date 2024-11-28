import { RefObject } from 'react';

import BottomSheet from '@gorhom/bottom-sheet';

import MainTypes from '_types/index';

type SortByBottomSheetPropsTypes = MainTypes & {
  bottomSheetRef: RefObject<BottomSheet>;
  snapPoints?: string[];
  handleClose?: () => void;
};

export type { SortByBottomSheetPropsTypes };
