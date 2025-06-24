import React from 'react';
import { rootStore } from './root-store';

export const StoreContext = React.createContext(rootStore);

export const useStores = () => React.useContext(StoreContext);
