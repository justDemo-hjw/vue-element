/*
 * @Date: 2020-08-26 23:05:04
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-08-26 23:38:24
 */
import axios from 'axios'

const ERR_OK = 0

export function get(url) {
  return function(params) {
    return axios
      .get(url, { params })
      .then(res => {
        const { errno, data } = res.data
        if (errno === ERR_OK) {
          return data
        }
      })
      .catch(() => {})
  }
}
