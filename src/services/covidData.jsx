import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const covidApi = createApi({
  reducerPath: "covidApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getCovidData: builder.query({
      query: () => "https://covidnigeria.herokuapp.com/api",
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetCovidData } = covidApi;




// Defining Query Endpoints
// Query endpoints are defined by returning an object inside the endpoints section of createApi, and defining the fields using the builder.query() method.

// Query endpoints should define either a query callback that constructs the URL (including any URL query params), or a queryFn callback that may do arbitrary async logic and return a result.

// If the query callback needs additional data to generate the URL, it should be written to take a single argument. If you need to pass in multiple parameters, pass them formatted as a single "options object".

// Query endpoints may also modify the response contents before the result is cached, define "tags" to identify cache invalidation, and provide cache entry lifecycle callbacks to run additional logic as cache entries are added and removed.

// Visit the link below to learn more 
// https://redux-toolkit.js.org/tutorials/rtk-query