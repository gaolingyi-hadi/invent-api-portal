import _ from 'lodash';

export function simplifyErrorMsg(error: any, defaultMessage: string = 'Request Error'): string {
  let message;

  if (error.response) {
    console.log(error.response.data);
    message = error.response.data?.error;
  }

  if (message) {
    if (message.message) {
      message = message.message
    }
    if (_.isString(message)) {
      return message.substring(0, 240);
    }
    if (_.isObject(message)) {
      return JSON.stringify(message).substring(0, 240);
    }
    return message.toString().substring(0, 240);
  }
  try {
    message = error.toString().substring(0, 240);
  } catch (e) {
    message = defaultMessage;
  }

  return message;
}
