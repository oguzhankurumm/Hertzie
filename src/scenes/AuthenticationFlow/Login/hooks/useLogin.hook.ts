import { Keyboard } from 'react-native';

import * as Yup from 'yup';

import { useTranslate } from '_hooks/useTranslate';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';

import { FormType } from '../Login.types';

const useLogin = () => {
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
  };

  const handleSubmit = async (_data: FormType) => {
    Keyboard.dismiss();
  };

  const onRegisterPress = () => NavigationServices.navigate(Scenes.register);

  const onForgotPasswordPress = () => {
    NavigationServices.navigate(Scenes.register);
  };

  return {
    handleSubmit,
    phoneValidationSchema,
    onRegisterPress,
    onForgotPasswordPress,
    isSubmitting: false,
  };
};

export { useLogin };
