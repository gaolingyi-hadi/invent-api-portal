import { useMemo } from 'react';
import { generateGetRequest } from '../request.utils';


function useGetRequest(path: string) {

  const requestInstance = useMemo(() => {
    return generateGetRequest(path);
  }, [path]);

  Object.defineProperty(requestInstance, 'UAP_request_path', {
    value: path,
    writable: false,
    configurable: false,
  });

  return requestInstance;
}

export default useGetRequest;
