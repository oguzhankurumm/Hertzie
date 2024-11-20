# StorageHandler

### Description:

A reusable heper file that contains methods that help in read & write data in storage.

</br>

### Helpers:

| Name              | Description                                       | Props with Types            | Returned Value    |
| ----------------- | ------------------------------------------------- | --------------------------- | ----------------- |
| setStorageItem    | used to set data in storage by key                | key: StorageKeys, data: any | None              |
| getStorageItem    | used to get data from storage by key              | key: StorageKeys            | saved data        |
| removeStorageItem | used to remove data from storage by key           | key: StorageKeys            | None              |
| clearStorage      | used to remove all data from storage              | None                        | None              |
| storageServices   | an object that contains methods to handle storage | None                        | object of methods |

</br>

### StorageServices

| Name        | Description                      | Props with Types | Returned Value  |
| ----------- | -------------------------------- | ---------------- | --------------- |
| setDeviceId | used to set user device id       | deviceId: string | None            |
| getDeviceId | used to get saved user device id | None             | saved auth data |

</br>

### Dependencies:

| Component / Library | Source                                    |
| ------------------- | ----------------------------------------- |
| AsyncStorage        | @react-native-async-storage/async-storage |

</br>

### Basic Usage

```jsx
// setStorageItem :
await setStorageItem(key, data);

// ---------------------
// getStorageItem :
const savedData = await getStorageItem(key);

// ---------------------
// removeStorageItem :
await removeStorageItem(key);

// ---------------------
// clearStorage :
await clearStorage();

// ---------------------
// setDeviceId :
await storageServices.setDeviceId(deviceId);

// ---------------------
// getDeviceId :
const savedDeviceId = await storageServices.getDeviceId();
```
