type FormType = {
  phone?: string;
  email?: string;
  password: string;
  confirmPassword?: string;
  referenceCode?: string;
  agreements: boolean;
  explicitConsent: boolean;
  notifications?: boolean;
};

export type { FormType };
