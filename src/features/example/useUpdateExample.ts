import { useMutation } from '@tanstack/react-query';
import exampleApi from './example.service';

const useUpdateExample = () => {
  return useMutation({
    mutationFn: exampleApi.updateExample,
  });
};

export default useUpdateExample;
