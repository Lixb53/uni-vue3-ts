import { defHttp } from '/@/utils/http/axios';

/**
 *  h5上配置了跨域请求，可以正常访问，但是在app中报错。app单独写域名就可以了
 */
enum Api {
  topSong = 'artist/top/song?id=6452'
}
/**
 * @description: 歌手热门 50 首歌曲
 */
export function artistTopSong() {
  return defHttp.get<any>({ url: Api.topSong }, { errorMessageMode: 'message' })
}
