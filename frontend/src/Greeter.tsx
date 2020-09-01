import React from 'react'
import { store } from './Store'

export default function Greeter() {
    const appState = React.useContext(store)
    return (
        <div>
            <h1>Hello, {appState.name}</h1>
            <button onClick={() => appState.dispatch({type: 'Test'})}>Click</button>
        </div>
    )
}