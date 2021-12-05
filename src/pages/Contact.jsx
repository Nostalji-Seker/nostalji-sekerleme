import React from "react";
import { Card, CardGroup, Nav } from "react-bootstrap";
import "../styles/contact.css";
//Features to be added in future versions
//maili ve telefonu tiklaninca clipboarda kopyalama

function Contact() {
  return (
    <div id="contact">
      <CardGroup className="my-5 mx-2 mx-md-5">
        <Card bg="light" border="light" className="">
          <Card.Body className="d-flex flex-column justify-content-center text-center">
            <Card.Text>
              <b>Recep SAVUT</b>
            </Card.Text>
            <Card.Text>Osmangazi / BURSA</Card.Text>
              <Card.Text>
                0537 637 06 81
              </Card.Text>
            <Card.Text>
              <Nav.Link className="text-dark"
              href="mailto:bursanostaljiorganizasyon@gmail.com"
              target="_blank"
            >
              bursanostaljiorganizasyon@gmail.com
            </Nav.Link>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            className="imgStyle"
            variant="top"
            src="https://static.wixstatic.com/media/nsplsh_817afd2b04024c16a16da0f597173f92~mv2.jpg/v1/fill/w_613,h_460,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/nsplsh_817afd2b04024c16a16da0f597173f92~mv2.webp"
          />
        </Card>
      </CardGroup>
    </div>
  );
}

export default Contact;
