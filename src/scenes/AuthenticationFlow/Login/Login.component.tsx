import { useMemo } from 'react';
import { View } from 'react-native';

import { AuthTitle } from '_atoms';
import { useTranslate } from '_hooks/useTranslate';
import { CustomFormBuilder } from '_organisms';
import { useTheme } from '_styles/theming';
import { CustomFormFieldType } from '_types/index';

import styles from './Login.style';
import { FormType } from './Login.types';
import { useLogin } from './hooks/useLogin.hook';

const Login = () => {
  const theme = useTheme();
  const { translate } = useTranslate();
  const {
    handleSubmit,
    phoneValidationSchema,
    onRegisterPress,
    onForgotPasswordPress,
    isSubmitting,
  } = useLogin();

  const {
    formBuilderContainer,
    inputTitleStyle,
    inputContainerStyle,
    passwordInputContainerStyle,
    forgotPasswordTextStyle,
  } = useMemo(() => styles(theme), [theme]);

  const renderHeader = () => {
    return (
      <View>
        <AuthTitle
          title={translate('login.title')}
          redirectText={translate('login.registerTitle')}
          onPress={onRegisterPress}
        />
      </View>
    );
  };

  return (
    <CustomFormBuilder
      testId='login.formBuilder'
      overrideContainerStyle={formBuilderContainer}
      onSubmit={(data: unknown) => handleSubmit(data as FormType)}
      renderHeader={renderHeader()}
      withBottomActions
      loading={isSubmitting}
      disabled={isSubmitting}
      buttonTitle={translate('login.loginButtonTitle')}
      fields={[
        {
          field_key: 'phone',
          field_type: CustomFormFieldType.Phone,
          required: true,
          validation: phoneValidationSchema.phone,
          placeholder: translate('login.phonePlaceholder'),
          overrideTitleStyle: inputTitleStyle,
          overrideFieldViewStyle: { ...inputContainerStyle },
        },
        {
          field_key: 'password',
          field_type: CustomFormFieldType.Password,
          required: true,
          validation: phoneValidationSchema.password,
          placeholder: translate('login.passwordPlaceholder'),
          overrideTitleStyle: inputTitleStyle,
          overrideFieldViewStyle: { ...passwordInputContainerStyle },
        },
        {
          field_key: 'forgotPassword',
          field_type: CustomFormFieldType.Text,
          fieldOtherProps: {
            overrideStyle: forgotPasswordTextStyle,
            restTextProps: {
              onPress: () => onForgotPasswordPress(),
            },
          },
        },
      ]}
      initialValues={{
        phone: '',
        email: '',
        password: '',
        forgotPassword: translate('login.forgotPassword'),
      }}
    />
  );
};

export default Login;
