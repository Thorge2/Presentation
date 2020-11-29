import React, { useContext } from "react";
import { KeyContext } from "./context/KeyContext";
import NodeRSA from "node-rsa";
import { Card, Button, Container } from "react-bootstrap";

const Key = () => {
  const [key, setKey] = useContext(KeyContext);

  const newKey = (e) => {
    setKey(new NodeRSA({ b: 512 }));
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>privater Schlüssel:</Card.Title>
        <Card>
          <Card.Body>
            <Card.Text>{key.exportKey("pkcs8-private-pem")}</Card.Text>
          </Card.Body>
        </Card>

        <br></br>

        <Card.Title>öffentlicher Schlüssel:</Card.Title>
        <Card>
          <Card.Body>
            <Card.Text>{key.exportKey("pkcs8-public-pem")}</Card.Text>
          </Card.Body>
        </Card>

        <br></br>

        <Button onClick={newKey} variant="primary">
          Neuen Schlüssel erstellen
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Key;
