import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const SUMMARIZE_API_KEY = process.env.REACT_APP_SUMMARIZE_API_KEY;

export const summarizeApi = createApi({
  reducerPath: 'summarize',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com',
    prepareHeaders: (headers) => {
        headers.set("X-RapidAPI-Host", "article-extractor-and-summarizer.p.rapidapi.com");
        headers.set("X-RapidAPI-Key", SUMMARIZE_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummaryByUrl: builder.query({
      query: (params) => {
        let paragraph_length = 3;
        if(params?.paragraph_length){
          paragraph_length = params.paragraph_length
        }

        let path = `/summarize?url=${encodeURIComponent(params.url)}&length=${paragraph_length}`
        return path
      },
    }),
  }),
})

//want lazy version to control when to fetch data
export const { useLazyGetSummaryByUrlQuery } = summarizeApi