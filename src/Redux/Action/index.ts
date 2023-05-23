
interface REQUEST {
    type: 'REQUEST',
}
interface SUCCESS {
    type: 'SUCCESS',
    payload: IRestaurants[]
}
interface FAIL {
    type: 'FAIL',
    error: any
}

export type ActionType = REQUEST | SUCCESS | FAIL