import {simplifyErrorMsg} from './Utils';
import {message} from 'antd';


type RequestOption = {
  request: Promise<any>,
  successHandler: Function,
  errorHandler: Function,
  showErrorMessage?: boolean
}

export function sendRequest({
                              request,
                              successHandler,
                              errorHandler,
                              showErrorMessage = true,
                            }: RequestOption): Promise<any> {
  return request
    .then(res => {
      successHandler && successHandler(res);
    })
    .catch(error => {
      showErrorMessage && message.error(simplifyErrorMsg(error));
      errorHandler && errorHandler(error);
    });
}


