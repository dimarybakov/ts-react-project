import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileIsLoding = (state: StateSchema) =>
  state?.profile?.isLoading;
