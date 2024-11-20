import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';

// this to connect physical device also.
const { scriptURL } = NativeModules.SourceCode;
const scriptHostname = scriptURL.split('://')[1].split(':')[0];

// const queryClientManager = new QueryClientManager({
//   // @ts-ignore
//   queryClient,
// });

Reactotron
  // .use(reactotronReactQuery(queryClientManager))
  // .setAsyncStorageHandler(AsyncStorage)
  // AsyncStorage would either come from `react-native`
  // or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: 'Hertzie',
    host: scriptHostname,
  })
  // .asyncStorageHandler(AsyncStorage)
  .useReactNative({
    asyncStorage: true, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate|generate_204/,
    },
    editor: false, // there are more options to editor
    errors: { veto: () => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  // .use(reactotronRedux())
  .connect();
