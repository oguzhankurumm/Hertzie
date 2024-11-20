import createsecureStore from '@neverdull-agency/expo-unlimited-secure-store';

const secureStore = createsecureStore();

const setSecureData = async (key: string, data: any) => {
  try {
    await secureStore.setItem(key, data);
  } catch (error: any) {
    throw new Error(error);
  }
};

const getSecureData = async (key: string) => {
  let data = '';
  try {
    data = (await secureStore.getItem(key)) ?? '';
  } catch (error) {
    data = '';
    if (error instanceof Error) console.log('Get Secure Data Error: ', error.message);
  }
  return data;
};

const removeSecureData = async (key: string) => {
  try {
    await secureStore.removeItem(key);
  } catch (error: any) {
    if (error instanceof Error) console.log('Remove Secure Data Error: ', error.message);

    throw new Error(error);
  }
};

export { getSecureData, removeSecureData, setSecureData };
