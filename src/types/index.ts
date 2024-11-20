import { ComponentType, ReactNode } from 'react';

type MainTypes = {
  testId?: string;
};

type ThemeProviderType<Theme> = ComponentType<{
  children?: ReactNode;
  theme?: Theme;
}>;

type MainState = {
  loading: boolean;
};

enum AppStatuses {
  Ok = 'ok',
  Maintenance = 'maintenance',
  Upgrade = 'upgrade',
}

enum AppStatusFeature {
  On = 'on',
  Off = 'off',
}

enum CustomFormFieldType {
  Text = 'text',
  Email = 'email',
  Date = 'date',
  DateTime = 'dateTime',
  Phone = 'phone',
  Radio = 'radio',
  Switch = 'switch',
  Select = 'select',
  SubForm = 'subForm',
  Dropdown = 'dropdown',
  TextArea = 'textArea',
  Password = 'password',
  Checkbox = 'checkbox',
  CodeInput = 'codeInput',
  TextInput = 'textInput',
  TimeHours = 'timeHours',
  NumberInput = 'numberInput',
  TimeMinutes = 'timeMinutes',
  CountryPicker = 'countryPicker',
  CityPicker = 'cityPicker',
  ImagesUploader = 'imagesUploader',
  SearchableListOfCities = 'searchableListOfCities',
  MultiSelectBottomSheet = 'multiSelectBottomSheet',
  GroupSelectionBottomSheet = 'groupSelectionBottomSheet',
}

enum OtpStateModeTypes {
  Default = 'default',
  ResetPassword = 'resetPassword',
  PasswordChange = 'PasswordChange',
  CryptoWithdrawConfirm = 'CryptoWithdrawConfirm',
  TryWithdraw = 'TryWithdraw',
  Google2FAActive = 'Google2FAActive',
  Google2FADeactive = 'Google2FADeactive',
  AccountFreeze = 'AccountFreeze',
  EmailVerification = 'EmailVerification',
  PhoneVerification = 'PhoneVerification',
  ResendEmailOtp = 'ResendEmailOtp',
  ResendSMSOTP = 'ResendSMSOTP',
}

enum BottomAlertTypes {
  Info = 'info',
  Error = 'error',
  Success = 'success',
  Warning = 'warning',
}

enum AppThemes {
  Dark = 'dark',
  Light = 'light',
}

enum MenuItemTypes {
  Switch = 'switch',
  Navigate = 'navigate',
  Function = 'function',
}

enum NotificationStatuses {
  Read = 'read',
  Unread = 'unread',
}

enum TabTypes {
  Default = 'default',
  Secondary = 'secondary',
}

type PhoneCountryInputType = {
  country: string;
  callingCode: string;
  phoneNumber: string;
};

export {
  AppStatuses,
  AppStatusFeature,
  AppThemes,
  BottomAlertTypes,
  CustomFormFieldType,
  MenuItemTypes,
  NotificationStatuses,
  OtpStateModeTypes,
  TabTypes,
};

export type { MainState, PhoneCountryInputType, ThemeProviderType };
export default MainTypes;
