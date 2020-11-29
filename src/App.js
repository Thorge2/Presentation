import React, { useEffect } from 'react';
import Key from './Key';
import Message from './Message';
import {KeyProvider} from './context/KeyContext';
import {Container} from 'react-bootstrap';

const App = () => {
    return (
        <Container>
            <h1 style={{margin: '20px'}}>RSA Verfahren</h1>

            <br></br>

            <KeyProvider>
                <Message />
                <Key />
            </KeyProvider>
        </Container>
    )
}

export default App;