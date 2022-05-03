import type { ErrorMessageMode } from '/#/axios';
import errMsg from './axiosTip';

export function checkStatus(
  status: number,
  msg: string,
  errorMessageMode: ErrorMessageMode = 'message',
): void {
  let errMessage = '';

  switch (status) {
    case 400:
      errMessage = `${msg}`;
      break;
    // 401: Not logged in
    // 如果未登录，则跳转到登录页面，并携带当前页面的路径
    // 成功登录后返回当前页面。此步骤需要在登录页面上进行操作。
    case 401:
      errMessage = errMsg.errMsg401;
      break;
    case 403:
      errMessage = errMsg.errMsg403;
      break;
    // 404请求不存在
    case 404:
      errMessage = errMsg.errMsg404;
      break;
    case 405:
      errMessage = errMsg.errMsg405;
      break;
    case 408:
      errMessage = errMsg.errMsg408;
      break;
    case 500:
      errMessage = errMsg.errMsg500;
      break;
    case 501:
      errMessage = errMsg.errMsg501;
      break;
    case 502:
      errMessage = errMsg.errMsg502;
      break;
    case 503:
      errMessage = errMsg.errMsg503;
      break;
    case 504:
      errMessage = errMsg.errMsg504;
      break;
    case 505:
      errMessage = errMsg.errMsg505;
      break;
    default:
  }

  if (errMessage) {
    if (errorMessageMode === 'modal') {
      uni.showModal({
        title: errMsg.errorTip,
        content: errMessage,
        showCancel: false
      });
    } else if (errorMessageMode === 'message') {
      // #ifdef APP-PLUS
      plus.nativeUI.toast(errMessage, {
        background: '#dd524d'
      });
      // #endif
      uni.showToast({
        icon: 'error',
        title: errMessage,
        duration: 2000
      })
    }
  }
}
