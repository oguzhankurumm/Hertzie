import { FC, memo } from 'react';
import { GestureResponderEvent } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { WebView } from 'react-native-webview';

import * as WebBrowser from 'expo-web-browser';

import { verticalScale, width } from '_styles/scaling';
import { useTheme } from '_styles/theming';
import { TextStyle } from '_styles/typography';
import { getAutomationTestingProp } from '_utils/helpers';

import { classesStyles } from './RenderHtmlContent.styles';
import { RenderTypeProps } from './RenderHtmlContent.types';

export const RenderHtmlContent: FC<RenderTypeProps> = ({
  html,
  sliced = false,
  testId = '',
  ...restProps
}) => {
  const theme = useTheme();

  if (!html || typeof html !== 'string') {
    return null;
  }

  const contentHtml = {
    html,
  };

  const handlePress = async (_event: GestureResponderEvent, href: string) => {
    try {
      const browserOptions = {
        controlsColor: theme?.white,
        toolbarColor: theme?.gray[100],
        enableBarCollapsing: true,
        readerMode: true,
        presentationStyle: WebBrowser.WebBrowserPresentationStyle.PAGE_SHEET,
      };
      await WebBrowser.openBrowserAsync(href, browserOptions);
    } catch (error) {
      console.log('Error opening browser', error);
    }
  };

  const renderersProps = {
    a: {
      onPress: handlePress,
    },
  };

  return (
    <RenderHtml
      contentWidth={width}
      source={{
        html:
          contentHtml.html?.length > 55 && sliced
            ? contentHtml.html?.slice(0, 55).concat('...')
            : contentHtml.html,
      }}
      tagsStyles={{
        body: {
          whiteSpace: 'normal',
          ...TextStyle.bodyRegular,
          lineHeight: verticalScale(13),
          color: theme?.gray[500],
        },
        a: {
          ...TextStyle.bodyRegular,
          color: theme?.gray[400],
          lineHeight: verticalScale(13),
          textDecorationLine: 'none',
        },
      }}
      enableExperimentalMarginCollapsing
      enableExperimentalGhostLinesPrevention
      enableExperimentalBRCollapsing
      dangerouslyDisableWhitespaceCollapsing
      WebView={WebView}
      classesStyles={classesStyles}
      renderersProps={renderersProps}
      {...getAutomationTestingProp(testId)}
      {...restProps}
    />
  );
};
export default memo(RenderHtmlContent);
