import React from 'react';
import './App.css';
import {usePrevious, useToggle} from "./hooks/CustomHooks";

const App = () => {

    const [status, setStatus] = useToggle(true)
    let [previous, current] = usePrevious(status)

    const CheckAllStatus = () => {
        setStatus()
        console.log(`previous: ${previous}`)
        console.log(`current: ${current}`)
    }

    return (
        <div>
            <h1>previous status: {previous ? 'true' : 'false'}</h1>
            <h1>current status: {current ? 'true' : 'false'}</h1>
            <button
                onClick={CheckAllStatus}
            >Click me...
            </button>
            <div>
                <input
                    type="checkbox"
                    name="status"
                    checked={status}
                    onChange={CheckAllStatus}
                />
                <label htmlFor="status">Status {status ? 'true' : 'false'}</label>

            </div>


        </div>
    );
}

export default App;