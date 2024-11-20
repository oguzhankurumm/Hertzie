import { FC } from 'react';
import { View } from 'react-native';

import { getAutomationTestingProp } from '_utils/helpers';

import CustomActivityIndicator from '../../atoms/CustomActivityIndicator/CustomActivityIndicator.component';
import styles from './GlobalLoader.style';
import { GlobalLoaderPropsTypes } from './GlobalLoader.types';

const { container } = styles();

const GlobalLoader: FC<GlobalLoaderPropsTypes> = ({
  testId = '',
  overrideContainerStyle = undefined,
  activityIndicatorProps = {
    loaderColor: '#fff',
    loaderSize: 'large',
  },
}) => {
  const isLoading = false;

  return isLoading ? (
    <View {...getAutomationTestingProp(testId)} style={[container, overrideContainerStyle]}>
      <CustomActivityIndicator {...activityIndicatorProps} />
    </View>
  ) : null;
};

export default GlobalLoader;
