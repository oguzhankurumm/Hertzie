import { useMutation } from '@tanstack/react-query';

import { AUTH_QUERY_KEYS } from './keys';

export const useAuthSendSmsOtpPost = () =>
  useMutation({
    mutationKey: [AUTH_QUERY_KEYS.sendSmsOtpPost],
    // mutationFn: authServices.sendSmsOtpPost,
  });

export const useAuthSignInPost = () =>
  useMutation({
    mutationKey: [AUTH_QUERY_KEYS.signInPost],
    // mutationFn: authServices.signInPost,
  });

export const useAuthSignUpPost = () =>
  useMutation({
    mutationKey: [AUTH_QUERY_KEYS.signUpPost],
    // mutationFn: authServices.signUpPost,
  });

export const useAuthVerifyOtpCodesPost = () =>
  useMutation({
    mutationKey: [AUTH_QUERY_KEYS.verifyOtpCodesPost],
    // mutationFn: authServices.verifyOtpCodesPost,
  });

export const useAuthVerifyPasswordOtpPost = () =>
  useMutation({
    mutationKey: [AUTH_QUERY_KEYS.verifyPasswordOtpPost],
    // mutationFn: authServices.verifyPasswordOtpPost,
  });
