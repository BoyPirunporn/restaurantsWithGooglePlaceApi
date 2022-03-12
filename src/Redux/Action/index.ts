import { DataObject } from "../../model/place"

interface REQUEST {
    type: 'REQUEST',
}
interface SUCCESS {
    type: 'SUCCESS',
    payload: DataObject[]
}
interface FAIL {
    type: 'FAIL',
    error: any
}

export type ActionType = REQUEST | SUCCESS | FAIL