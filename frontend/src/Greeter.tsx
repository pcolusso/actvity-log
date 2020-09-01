import React from 'react'
import { store, State } from './Store'

export default function Greeter() {
    const appState: State = React.useContext(store)
    return (
        <div>
            <h1>Hello, {appState.name}</h1>
            <button onClick={() => appState.dispatch({type: 'CANCEL_EDITING'})}>Click</button>
        </div>
    )
}