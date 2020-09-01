import React, { ReactNode } from 'react'

type State =  {
    name: string,
    dispatch: React.Dispatch<Action>
}

type Action =
    | { type: 'Test' }

const initialState: any = {name: "Paul"} // As initialState is incomplete without the dispatch, we leave it as any for the time being.
const store = React.createContext(initialState)
const { Provider } = store

const StateProvider = ({children} : { children: ReactNode}) => {
    const [state, dispatch] = React.useReducer((state: State, action: Action) => {
        const { type } = action;
        switch(type) {
            case 'Test':
                return {...state, name: "Greg"}
            default:
                throw new Error()
        }
    }, initialState)

    return <Provider value={{...state, dispatch}}>{children}</Provider>
}

export { store, StateProvider}