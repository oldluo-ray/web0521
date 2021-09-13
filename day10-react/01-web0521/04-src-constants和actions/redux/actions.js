import { DEC, INC } from "./constants";

// 定义actionCreator
export function incCreator(num){
    return {type: INC, num}
}

export function decCreator(num){
    return {type: DEC, num}
}

