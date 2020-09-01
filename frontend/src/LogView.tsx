import React, { useContext, useState, ChangeEvent } from 'react'
import { store, State } from './Store'
import LogEntry from './structures'

type LogViewProps = {
    log: LogEntry
}

export default function LogView(props: LogViewProps) {
    const { log } = props
    const globalState: State = useContext(store)
    const [beingEdited, setBeingEdited] = useState(globalState.editing === log.id)
    const [contents, setContents] = useState(log.contents)
    const [time, setTime] = useState(log.at)

    const updateContents = (e: ChangeEvent<HTMLInputElement>) => beingEdited ? setContents(e.target.value) : {}
    const updateTime = (e: ChangeEvent<HTMLInputElement>) => beingEdited ? setTime(new Date(Date.parse(e.target.value))) : {}
    const cancelUpdating = () => {
        globalState.dispatch({type: 'CANCEL_EDITING'})
        setContents(log.contents)
        setTime(log.at)
    }
    const becomeEditable = () => {
        if (globalState.editing === false) {
            globalState.dispatch({type: 'START_EDITING', ident: log.id})
            setBeingEdited(true)
        }
    }
    
    return (
        <h3>
            <form onFocus={becomeEditable}>
                <input className={beingEdited ? 'Input-Editing' : 'Input-Locked'} value={time.toLocaleDateString()} onChange={updateTime} />
                <input className={beingEdited ? 'Input-Editing' : 'Input-Locked'} value={contents} onChange={updateContents} />
            </form>
        </h3>
    )
}  