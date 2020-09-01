import React, { ReactNode } from 'react'
import LogEntry from './structures'

export type State =  {
    name: string,
    dispatch: React.Dispatch<Action>,
    editing: boolean | number
}

type Action =
    | { type: 'START_EDITING', ident: number }
    | { type: 'CANCEL_EDITING' }
    | { type: 'SAVE', log: LogEntry }

const initialState: any = {name: "Paul", editing: false} // As initialState is incomplete without the dispatch, we leave it as any for the time being.
const store = React.createContext(initialState)
const { Provider } = store

const StateProvider = ({children} : { children: ReactNode}) => {
    const [state, dispatch] = React.useReducer((state: State, action: Action) => {
        switch(action.type) {
            case 'START_EDITING':
                return {...state, editing: action.ident }
            case 'CANCEL_EDITING':
                return {...state, editing: false}
            default:
                throw new Error()
        }
    }, initialState)

    return <Provider value={{...state, dispatch}}>{children}</Provider>
}

export { store, StateProvider}