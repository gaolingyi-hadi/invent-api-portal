import {sendRequest} from '../../axios/RequestUtil';
import {useEffect, useState} from 'react';
import {simplifyErrorMsg} from '../../axios/Utils';

interface OnMountRequestParams<T> {
  request: Promise<any>,
  defaultValue?: T | null,
  successHandler?: (res: any) => void,
  errorHandler?: (error: string) => void,
  disabled?: boolean
}

function useOnMountRequest<T>({
                                request,
                                defaultValue = null,
                                successHandler,
                                errorHandler,
                                disabled = false,
                              }: OnMountRequestParams<T>): [boolean, T | null, string] {
  const [querying, setQuerying] = useState(true);
  const [data, setData] = useState<T | null>(defaultValue);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (disabled) {
      // do not send the request
      setQuerying(false);
      setError('');
      return;
    }

    // setQuerying(true);
    sendRequest({
      request: request,
      successHandler: (res: any) => {
        setData(res?.data?.data);
        setQuerying(false);
        successHandler && successHandler(res);
        // console.log(JSON.stringify(data, null, 4));
      },
      errorHandler: (error: any) => {
        const errorMsg = simplifyErrorMsg(error);
        setError(errorMsg);
        setQuerying(false);
        errorHandler && errorHandler(errorMsg)
      },
    });
  }, [disabled, errorHandler, request]);

  return [querying, data, error];
}

export default useOnMountRequest;
