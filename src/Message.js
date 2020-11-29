import React, { useState, useContext } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { KeyContext } from "./context/KeyContext";

const Message = () => {
  const [message, setMessage] = useState("");
  const [encryted, setEncrypted] = useState("");
  const [decrypted, setDecrypted] = useState("");

  const [key, setKey] = useContext(KeyContext);

  const encrypt = (e) => {
    e.preventDefault();

    try {
      const temp = key.encrypt(message, "base64");
      setEncrypted(temp);
    } catch (error) {
      setEncrypted("");
    }
  };

  const decrypt = (e) => {
    e.preventDefault();

    try {
      const temp = key.decrypt(encryted, "utf-8");
      setDecrypted(temp);
    } catch (error) {
      setDecrypted("");
    }
  };

  const inputStyle = {
    fontFamily: "Arial",
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Verschlüsseln - Entschlüsseln</Card.Title>

        <Card.Body>
          <Card.Subtitle>Nachricht:</Card.Subtitle>
          <Form onSubmit={encrypt}>
          <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)}/>
            <br></br>
            <Button variant="primary" type="submit">Verschlüsseln</Button>
          </Form>
        </Card.Body>

        <Card.Body>
          <Card.Subtitle>Verschlüsselte Nachricht</Card.Subtitle>
          <Form onSubmit={decrypt}>
          <Form.Control as="textarea" rows={3} value={encryted} onChange={(e) => setEncrypted(e.target.value)}/>
            <br></br>
            <Button variant="primary" type="submit">Entschlüsseln</Button>
          </Form>
        </Card.Body>


        <Card.Body>
          <Card.Title>Entschlüsselte Nachricht</Card.Title>
          <Form.Control as="textarea" rows={3} value={decrypted}></Form.Control>
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

export default Message;
