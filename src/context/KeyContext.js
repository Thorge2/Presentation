import React, { createContext, useState, useEffect } from 'react';
import NodeRSA from 'node-rsa';

export const KeyContext = createContext();

export const KeyProvider = ({children}) => {

    const [key, setKey] = useState(new NodeRSA({b: 512}));

    return (
        <KeyContext.Provider value={[key, setKey]}>
            {children}
        </KeyContext.Provider>
    )
}