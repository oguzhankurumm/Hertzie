import { getSecureData, removeSecureData, setSecureData } from '_utils/secureStorageHandler';

import { createMobileStoreWithMiddlewares } from './createMobileStoreWithMiddlewares';

const STORAGE_KEY_SESSION = 'session';

export type Session = {
  customerId: string;
  token: string;
  tokenExpires: number;
  refreshToken: string;
  refreshTokenExpires: number;
  roles: string[] | null;
};

export interface AuthState {
  isHydrated: boolean;
  isInitializedBefore: boolean;
  isInitializedAfter: boolean;

  isLoggedIn: boolean;

  session: Session | null;
  setSession: (session: Session) => Promise<void>;
  clearSession: () => Promise<void>;
  initSessionFromStorageBefore: () => Promise<void>;
  initSessionFromStorageAfter: () => Promise<void>;
}

export const useAuthStore = createMobileStoreWithMiddlewares<AuthState>(set => ({
  isHydrated: false,
  isInitializedBefore: false,
  isInitializedAfter: false,

  isLoggedIn: false,

  session: null,
  setSession: async session => {
    await setSecureData(STORAGE_KEY_SESSION, JSON.stringify(session));

    set(state => {
      state.session = session;
      state.isLoggedIn = true;
    });
  },
  clearSession: async () => {
    await removeSecureData(STORAGE_KEY_SESSION);

    set(state => {
      state.session = null;
      state.isLoggedIn = false;
    });
  },
  initSessionFromStorageBefore: async () => {
    const sessionText = await getSecureData(STORAGE_KEY_SESSION);
    const session = sessionText ? JSON.parse(sessionText) : null;

    if (!session) {
      set(state => {
        state.isInitializedBefore = true;
        state.session = null;
        state.isLoggedIn = false;
      });

      return;
    }

    set(state => {
      state.isInitializedBefore = true;
      state.session = session;
      state.isLoggedIn = true;
    });
  },
  initSessionFromStorageAfter: async () => {
    set(state => {
      state.isInitializedAfter = true;
    });
  },
}));
