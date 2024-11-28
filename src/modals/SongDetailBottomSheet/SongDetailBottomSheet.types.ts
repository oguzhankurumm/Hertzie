import { RefObject } from 'react';

import BottomSheet from '@gorhom/bottom-sheet';

import MainTypes from '_types/index';

type SongDetailBottomSheetPropsTypes = MainTypes & {
  bottomSheetRef: RefObject<BottomSheet>;
  snapPoints?: string[];
  onInfoPress?: () => void;
  handleClose?: () => void;
};

export type { SongDetailBottomSheetPropsTypes };
