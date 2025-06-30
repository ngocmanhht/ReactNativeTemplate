import { QueryClient } from '@tanstack/react-query';
import { rootStore } from '../stores/root-store';

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onMutate: () => {
        rootStore.uiStore.setIsLoading(true);
      },
      onSettled: () => {
        rootStore.uiStore.setIsLoading(false);
      },
    },
  },
});
