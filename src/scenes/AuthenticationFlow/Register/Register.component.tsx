import { useMemo } from 'react';
import { View } from 'react-native';

import { AuthTitle } from '_atoms';
import { useTranslate } from '_hooks/useTranslate';
import { CustomFormBuilder } from '_organisms';
import { useTheme } from '_styles/theming';
import { CustomFormFieldType } from '_types/index';

import styles from './Register.style';
import { FormType } from './Register.types';
import { useRegister } from './hooks/useRegister.hook';

const Register = () => {
  const theme = useTheme();
  const { translate } = useTranslate();
  const { handleSubmit, phoneValidationSchema, onLoginPress, isSubmitting } = useRegister();

  const {
    formBuilderContainer,
    inputTitleStyle,
    checkBoxTitleStyle,
    inputContainerStyle,
    checkBoxContainerStyle,
    submitButtonStyle,
  } = useMemo(() => styles(theme), [theme]);

  const renderHeader = () => {
    return (
      <View>
        <AuthTitle
          title={translate('register.title')}
          redirectText={translate('register.loginTitle')}
          onPress={onLoginPress}
        />
      </View>
    );
  };

  return (
    <CustomFormBuilder
      testId='register.formBuilder'
      overrideContainerStyle={formBuilderContainer}
      onSubmit={(data: unknown) => handleSubmit(data as FormType)}
      renderHeader={renderHeader()}
      withBottomActions
      loading={isSubmitting}
      buttonTitle={translate('register.registerButtonTitle')}
      overrideButtonStyle={submitButtonStyle}
      fields={[
        {
          field_key: 'phone',
          field_type: CustomFormFieldType.Phone,
          required: true,
          validation: phoneValidationSchema.phone,
          placeholder: translate('register.phonePlaceholder'),
          overrideTitleStyle: inputTitleStyle,
          overrideFieldViewStyle: { ...inputContainerStyle },
        },
        {
          field_key: 'password',
          field_type: CustomFormFieldType.Password,
          required: true,
          max_length: 20,
          validation: phoneValidationSchema.password,
          placeholder: translate('register.passwordPlaceholder'),
          overrideTitleStyle: inputTitleStyle,
          overrideFieldViewStyle: { ...inputContainerStyle },
        },
        {
          field_key: 'confirmPassword',
          field_type: CustomFormFieldType.Password,
          required: true,
          max_length: 20,
          validation: phoneValidationSchema.confirmPassword,
          placeholder: translate('register.confirmPasswordPlaceholder'),
          overrideTitleStyle: inputTitleStyle,
          overrideFieldViewStyle: { ...inputContainerStyle },
        },
        {
          field_key: 'referenceCode',
          field_type: CustomFormFieldType.TextInput,
          required: false,
          keyboardType: 'number-pad',
          validation: phoneValidationSchema.referenceCode,
          placeholder: translate('register.refCodePlaceholder'),
          overrideTitleStyle: inputTitleStyle,
          overrideFieldViewStyle: { ...inputContainerStyle },
          max_length: 7,
        },
        {
          field_key: 'agreements',
          field_type: CustomFormFieldType.Checkbox,
          required: true,
          title: translate('register.agreements'),
          validation: phoneValidationSchema.agreements,
          overrideTitleStyle: checkBoxTitleStyle,
          overrideFieldViewStyle: { ...checkBoxContainerStyle },
        },
        {
          field_key: 'explicitConsent',
          field_type: CustomFormFieldType.Checkbox,
          required: true,
          title: translate('register.explicitConsent'),
          validation: phoneValidationSchema.explicitConsent,
          overrideTitleStyle: checkBoxTitleStyle,
          overrideFieldViewStyle: { ...checkBoxContainerStyle },
        },
        {
          field_key: 'notifications',
          field_type: CustomFormFieldType.Checkbox,
          required: false,
          title: translate('register.notifications'),
          overrideTitleStyle: checkBoxTitleStyle,
          validation: phoneValidationSchema.notifications,
        },
      ]}
      initialValues={{
        phone: '',
        password: '',
        confirmPassword: '',
        referenceCode: '',
      }}
    />
  );
};

export default Register;
