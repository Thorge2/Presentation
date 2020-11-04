import React, { useEffect } from 'react';
import Key from './Key';
import Message from './Message';
import {KeyProvider} from './context/KeyContext';

const App = () => {
    return (
        <div className='app'>
            <h1>RSA Verfahren</h1>

            <KeyProvider>
                <Key />
                <Message />
            </KeyProvider>
        </div>
    )
}

export default App;