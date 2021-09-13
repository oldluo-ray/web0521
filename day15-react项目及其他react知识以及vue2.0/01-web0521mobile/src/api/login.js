import axios from 'axios'
export function sendCode(phone) {
  return axios({
    method: 'post',
    url: '/login/digits',
    data: {
      phone,
    },
  })
}