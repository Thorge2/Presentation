import React, {useContext} from 'react';
import {KeyContext} from './context/KeyContext'
import NodeRSA from 'node-rsa';

const Key = () => {

    const [key, setKey] = useContext(KeyContext)

    const newKey = (e) => {
        setKey(new NodeRSA({b: 512}))
    }

    return (
        <div>
            <div>
                <h3>privater Schlüssel:</h3>
			    <div>
					<p>{key.exportKey('pkcs8-private-pem')}</p>
				</div>
			
				<h3>öffentlicher Schlüssel:</h3>
			    <div>
                    <p>{key.exportKey('pkcs8-public-pem')}</p>
				</div>
			</div>
		
			<div>
				<button onClick={newKey}>Neuen Schlüssel erstellen</button>
			</div>
        </div>
    )
}

export default Key;