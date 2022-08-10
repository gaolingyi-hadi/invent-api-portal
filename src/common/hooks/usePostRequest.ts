import { useMemo } from 'react';
import { generatePostRequest } from '../request.utils';


function usePostRequest(path: string, data: any) {

  const requestInstance = useMemo(() => {
    return generatePostRequest(path, data);
  }, [data, path]);

  return requestInstance;
}

export default usePostRequest;
