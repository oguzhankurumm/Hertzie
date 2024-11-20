# KeyboardAvoiding

### Description:

A reusable atom that help to avoid keyboard once click outside the input and also scroll the input above the keyboard when the screen is long and the component is at bottom.

</br>

### Props:

| Name                      | Description                                                                                                          | Type                                                                    | Default   |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | --------- |
| Offset                    | text of the component                                                                                                | number OR undefined                                                     | 80        |
| overrideStyle             | style of the text                                                                                                    | [ViewStyle](https://reactnative.dev/docs/view-style-props) OR undefined | {}        |
| children                  | any other react-native text props                                                                                    | React.ReactNode OR undefined                                            | undefined |
| childrenOutsideScrollView | property used in component to provide content or elements that should be rendered outside of a ScrollView component. | React.ReactNode OR undefined                                            | undefined |
| avoidOverComponent        | any other react-native text props                                                                                    | boolean OR undefined                                                    | true      |
| overrideContentStyle      | any other react-native text props                                                                                    | [ViewStyle](https://reactnative.dev/docs/view-style-props) OR undefined | {}        |
| testId                    | to test the whole component                                                                                          | string                                                                  | ''        |

</br>

### Dependencies:

| Component / Library                        | Source                          |
| ------------------------------------------ | ------------------------------- |
| KeyboardAvoidingView, Platform, ScrollView | react-native                    |
| useAnimatedStyle                           | react-native-reanimated         |
| getAutomationTestingProp                   | [utils](../../utils/helpers.md) |

</br>

### Basic Usage

```jsx
<KeyboardAvoiding />
```
