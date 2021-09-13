import {SAVE_PHONE} from './constants'

export function savePhone(phone){
    return {type: SAVE_PHONE, phone}
}