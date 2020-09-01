import React from 'react'
import LogEntry from './structures'
import LogView from './LogView'

export default function Log() {
    const entries = Array.from(Array(20).keys()).map(id =>  { return({at: new Date(), id, contents: "Test Entry" }) } )
    const children = entries.map(e => <LogView log={e} key={e.id} />)

    return (
        <div className="Fade">
            <div className="Logs">{children}</div>
        </div>
    )
}
