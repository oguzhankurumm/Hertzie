# SecureStorageHandler

### Description:

A reusable heper file that contains methods that help in read & write data in secure storage.

</br>

### Helpers:

| Name                  | Description                                              | Props with Types           | Returned Value    |
| --------------------- | -------------------------------------------------------- | -------------------------- | ----------------- |
| setSecureData         | used to set data in secure storage by key                | key: SecureKeys, data: any | None              |
| getSecureData         | used to get data from secure storage by key              | key: SecureKeys            | saved data        |
| removeSecureData      | used to remove data from secure storage by key           | key: SecureKeys            | None              |
| clearSecureStorage    | used to remove all data from secure storage              | None                       | None              |
| secureStorageServices | an object that contains methods to handle secure storage | None                       | object of methods |

</br>

### SecureStorageServices

| Name            | Description                      | Props with Types      | Returned Value      |
| --------------- | -------------------------------- | --------------------- | ------------------- |
| setAuthData     | used to set user auth data       | loginData: any        | None                |
| getAuthData     | used to get saved user auth data | key?: string          | saved auth data     |
| setUser         | used to set user data            | userData: any OR null | None                |
| getUser         | used to get saved user data      | key?: string          | saved user data     |
| setExtKey       | used to set ext key              | extKey: string        | None                |
| getExtKey       | used to get saved ext key        | None                  | Key or empty string |
| setUserKeyACL   | used to set user key ACL         | acl: any, index: any  | None                |
| getUserKeyACL   | used to get saved user key ACL   | index: any            | saved user key ACL  |
| clearUserKeyACL | used to remove user key ACL      | None                  | None                |

</br>

### Dependencies:

| Component / Library | Source                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------- |
| createsecureStore   | [@neverdull-agency/expo-unlimited-secure-store](https://github.com/dannyklaassen/expo-unlimited-secure-store) |

</br>

### Basic Usage

```jsx
// setSecureData :
await setSecureData(key, data);

// ---------------------
// getSecureData :
const savedData = await getSecureData(key);

// ---------------------
// removeSecureData :
await removeSecureData(key);

// ---------------------
// clearSecureStorage :
await clearSecureStorage();

// ---------------------
// setAuthData :
await secureStorageServices.setAuthData(loginData);

// ---------------------
// getAuthData :
const savedData = await secureStorageServices.getAuthData(key);

// ---------------------
// setUser :
await secureStorageServices.setUser(userData);

// ---------------------
// getUser :
const savedData = await secureStorageServices.getUser(key);

// ---------------------
// setExtKey :
await secureStorageServices.setExtKey(extKey);

// ---------------------
// getExtKey :
const savedKeyData = await secureStorageServices.getExtKey();

// ---------------------
// setUserKeyACL :
await secureStorageServices.setUserKeyACL(acl, index);

// ---------------------
// getUserKeyACL :
const savedKeyData = await secureStorageServices.getUserKeyACL(index);

// ---------------------
// clearUserKeyACL :
await secureStorageServices.clearUserKeyACL();

```
