import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { covidApi } from "./covidData";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [covidApi.reducerPath]: covidApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(covidApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Visit the link below to learn more 
// https://redux-toolkit.js.org/tutorials/rtk-query