import { StateCreator, create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const createMobileStoreWithMiddlewares = <State>(
  f: StateCreator<State, [['zustand/immer', never]], []>
) => create<State, [['zustand/immer', State]]>(immer(f));
