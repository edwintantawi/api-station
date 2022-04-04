import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  PublicApiCategoriesResponse,
  PublicApiEntriesResponse,
} from '../types';

export const publicApiService = createApi({
  reducerPath: 'publicApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.publicapis.org/' }),
  endpoints: (builder) => ({
    getPublicApiCategories: builder.query<PublicApiCategoriesResponse, null>({
      query: () => 'categories',
    }),
    getPublicApisByCategory: builder.query<PublicApiEntriesResponse, String>({
      query: (category) => `entries?category=${category}`,
    }),
  }),
});

export const {
  useGetPublicApiCategoriesQuery,
  useGetPublicApisByCategoryQuery,
} = publicApiService;
