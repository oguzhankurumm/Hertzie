import { Keyboard } from 'react-native';

import * as Yup from 'yup';

import { useTranslate } from '_hooks/useTranslate';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';

import { FormType } from '../Register.types';

const useRegister = () => {
  const { translate } = useTranslate();

  const phoneValidationSchema = {
    phone: Yup.string()
      .matches(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g,
        translate('errors.Phonenumber.Invalid_Type')
      )
      .required(translate('errors.Phonenumber.Required')),
    password: Yup.string()
      .min(8, translate('errors.Password.Min_Length'))
      .max(32, translate('errors.Password.Max_Length'))
      .matches(/^\S*$/, translate('errors.Password.NoWhiteSpace'))
      .required(translate('errors.Password.Required')),
    confirmPassword: Yup.string()
      .required(translate('errors.Password.Required'))
      .min(8, translate('errors.Password.Min_Length'))
      .max(32, translate('errors.Password.Max_Length'))
      .matches(/^\S*$/, translate('errors.Password.NoWhiteSpace'))
      .oneOf([Yup.ref('password')], translate('errors.Password.Match')),
    referenceCode: Yup.string()
      .test(
        'len',
        translate('errors.ReferenceCode.Min_Length', { length: 7 }),
        val => val?.length === 7 || val === ''
      )
      .notRequired()
      .nullable(),
    agreements: Yup.boolean()
      .oneOf([true], translate('errors.Agreements.Required'))
      .required(translate('errors.Agreements.Required')),
    explicitConsent: Yup.boolean()
      .oneOf([true], translate('errors.ExplicitConsent.Required'))
      .required(translate('errors.ExplicitConsent.Required')),
    notifications: Yup.boolean().notRequired().nullable(),
  };

  const handleSubmit = async (_values: FormType) => {
    Keyboard.dismiss();
  };

  const onLoginPress = () => NavigationServices.navigate(Scenes.login);

  return {
    handleSubmit,
    phoneValidationSchema,
    onLoginPress,
    isSubmitting: false,
  };
};

export { useRegister };
