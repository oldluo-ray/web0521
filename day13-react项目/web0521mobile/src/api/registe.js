import axios from 'axios'
export function verifyPhone(phone) {
  return axios({
    method: 'post',
    url: '/regist/verify_phone',
    data: {
      phone,
    },
  })
}
