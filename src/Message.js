import React, {useState, useContext} from 'react';
import {KeyContext} from './context/KeyContext';

const Message = () => {

	const [message, setMessage] = useState('');
	const [encryted, setEncrypted] = useState('');
	const [decrypted, setDecrypted] = useState('');

	const [key, setKey] = useContext(KeyContext);

	const encrypt = (e) => {
		e.preventDefault();

		try {
			const temp = key.encrypt(message, 'base64');
			setEncrypted(temp);	
		} catch (error) {
			setEncrypted('');
		}
	}

	const decrypt = (e) => {
		e.preventDefault();

		try {
			const temp = key.decrypt(encryted, 'utf-8');
			setDecrypted(temp);	
		} catch (error) {
			setDecrypted('');
		}
	}

	const inputStyle = {
		fontFamily: 'Arial'
	}

    return (
        <>
            <div>
			    <h2>Verschlüsseln - Entschlüsseln</h2>
			
			    <div>
				    <h3>Nachricht:</h3>
				    <form onSubmit={encrypt}>
					    <textarea rows='10' cols='60' value={message} onChange={(e) => setMessage(e.target.value)} style={inputStyle}></textarea>
						<br></br>
					    <button>Verschlüsseln</button>
				    </form>
			    </div>
			
			    <div>
				    <h3>Verschlüsselte Nachricht</h3>
				    <form onSubmit={decrypt}>
						<textarea rows='10' cols='60' value={encryted} onChange={(e) => setEncrypted(e.target.value)} style={inputStyle}></textarea>
						<br></br>
					    <button>Entschlüsseln</button>
				    </form>
			    </div>
			
			    <div>
					<h3>Entschlüsselte Nachricht</h3>
					<textarea rows='10' cols='60' value={decrypted} style={inputStyle}></textarea>
			    </div>
		    </div>
        </>
    )
}

export default Message;