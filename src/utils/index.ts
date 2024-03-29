import { isObject } from "./is";

/**
 * 将对象作为参数添加到 URL
 * @param baseUrl url
 * @param obj
 * @returns {字符串}
 * eg：
 *  let obj = {a： '3'， b： '4'}
 *  setObjToUrlParams（'www.baidu.com'， obj）
 *  ==>www.baidu.com？a=3&b=4
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = '';
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
  }
  parameters = parameters.replace(/&$/, '');
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters;
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}

