'use client';
import { useQuery } from '@tanstack/react-query';
import exampleApi from './example.service';

const useGetExample = () => {
  const queryData = useQuery(['example/get'], {
    queryFn: () => exampleApi.getExamples(),
    keepPreviousData: true,
  });

  return queryData;
};
export default useGetExample;
