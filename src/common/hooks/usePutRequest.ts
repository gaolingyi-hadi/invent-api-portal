import { useMemo } from 'react';
import { generatePutRequest } from '../request.utils';


function usePutRequest(path: string, data: any) {

  const requestInstance = useMemo(() => {
    return generatePutRequest(path, data);
  }, [data, path]);

  return requestInstance;
}

export default usePutRequest;
